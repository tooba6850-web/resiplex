import { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./PropertyDetailPage.css";
import ImageGallery from "../components/ImageGallery";
import Badge from "../components/Badge";
import FavoriteButton from "../components/FavoriteButton";
import Button from "../components/Button";
import AgentCard from "../components/AgentCard";
import Modal from "../components/Modal";
import { PropertyGrid } from "../components/PropertyGrid";
import { Field, Input, Select } from "../components/Field";
import { useToast } from "../context/ToastContext";
import {
  IconPin,
  IconBed,
  IconBath,
  IconArea,
  IconArrowLeft,
  IconCheck,
  IconCalendar,
} from "../components/icons";
import {
  PROPERTIES,
  getPropertyBySlug,
  relatedProperties,
  formatPrice,
  formatArea,
  cityName,
  statusLabel,
} from "../data/properties";
import NotFoundPage from "./NotFoundPage";

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const nav = useNavigate();
  const { toast } = useToast();
  const property = getPropertyBySlug(PROPERTIES, slug);

  const related = useMemo(
    () => (property ? relatedProperties(PROPERTIES, property) : []),
    [property]
  );

  const [scheduleOpen, setScheduleOpen] = useState(false);

  if (!property) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <section className="section pdp" key={property.slug}>
        <div className="container">
          <div className="pdp__crumb">
            <Link to="/properties" className="pdp__back">
              <IconArrowLeft /> All Properties
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={`/locations/${property.city}`} className="pdp__loc">
              {cityName(property.city)}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="pdp__cur">{property.name}</span>
          </div>

          <div className="pdp__grid">
            <div className="pdp__media" data-reveal>
              <ImageGallery images={property.gallery} alt={property.name} />
            </div>

            <div className="pdp__summary" data-reveal style={{ "--d": "120ms" }}>
              <div className="pdp__badges">
                <Badge variant={property.status === "rent" ? "rent" : "solid"}>
                  {statusLabel(property)}
                </Badge>
                {property.newListing ? <Badge variant="gold">New Listing</Badge> : null}
                {property.featured ? <Badge variant="line">Featured</Badge> : null}
              </div>

              <p className="pdp__price">{formatPrice(property.price, property.period)}</p>
              <h1 className="pdp__name">{property.name}</h1>
              <p className="pdp__place">
                <IconPin />
                {property.area}, {cityName(property.city)}
              </p>

              <div className="pdp__facts">
                <span>
                  <IconBed />
                  <b>{property.beds}</b> Bedrooms
                </span>
                <span>
                  <IconBath />
                  <b>{property.baths}</b> Bathrooms
                </span>
                <span>
                  <IconArea />
                  <b>{formatArea(property.sqft)}</b>
                </span>
              </div>

              <p className="pdp__lead">{property.description.split("\n\n")[0]}</p>

              <div className="pdp__actions">
                <Button variant="gold" onClick={() => setScheduleOpen(true)}>
                  <IconCalendar /> Schedule a Viewing
                </Button>
                <FavoriteButton slug={property.slug} className="pdp__fav" />
              </div>

              <div className="pdp__reference">
                <span>Reference</span>
                <b>RP-{property.slug.split("-").map((s) => s.slice(0, 3).toUpperCase()).join("")}</b>
              </div>
            </div>
          </div>

          <div className="pdp__detail">
            <div className="pdp__features" data-reveal>
              <p className="eyebrow">The Residence</p>
              <h2 className="pdp__h2">Features &amp; finishes</h2>
              <ul className="pdp__feature-list">
                {property.features.map((f) => (
                  <li key={f}>
                    <IconCheck />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdp__amenities" data-reveal style={{ "--d": "100ms" }}>
              <p className="eyebrow">What's on offer</p>
              <h2 className="pdp__h2">Amenities</h2>
              <div className="pdp__chip-list">
                {property.amenities.map((a) => (
                  <span className="pdp__chip" key={a}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="pdp__agent" data-reveal style={{ "--d": "200ms" }}>
              <AgentCard agent={property.agent}>
                <Button variant="primary" size="sm" href={`tel:${property.agent.phone.replace(/\s/g, "")}`}>
                  Call immediately
                </Button>
                <Button variant="outline" size="sm" href={`mailto:${property.agent.email}?subject=${encodeURIComponent(`Enquiry: ${property.name}`)}`}>
                  Email advisor
                </Button>
              </AgentCard>
            </div>
          </div>

          <div className="pdp__overview" data-reveal>
            <div className="pdp__overview-copy">
              <p className="eyebrow">Overview</p>
              <h2 className="pdp__h2">Life at {property.name}</h2>
              {property.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <dl className="pdp__specs">
              {[
                ["Status", statusLabel(property)],
                ["Type", property.type],
                ["City", cityName(property.city)],
                ["Neighbourhood", property.area],
                ["Year Built", property.yearBuilt],
                ["Size", formatArea(property.sqft)],
              ].map(([k, v]) => (
                <div className="pdp__spec" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {related.length > 0 ? (
            <div className="pdp__related">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Continue Exploring</p>
                  <h2 className="pdp__rel-title">Similar residences</h2>
                </div>
                <Button to="/properties" variant="outline" size="sm">
                  View all
                </Button>
              </div>
              <PropertyGrid properties={related} />
            </div>
          ) : null}
        </div>
      </section>

      <ScheduleModal
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        property={property}
        toast={toast}
      />
    </div>
  );
}

function ScheduleModal({ open, onClose, property, toast }) {
  const [form, setForm] = useState({ name: "", email: "", date: "", phone: "" });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Please enter a valid email.";
    if (!form.date) next.date = "Please choose a preferred date.";
    setErrors(next);
    if (Object.keys(next).length) return;
    onClose();
    setForm({ name: "", email: "", date: "", phone: "" });
    toast(`Viewing request sent — ${property.agent.name} will confirm shortly.`);
  };

  return (
    <Modal open={open} onClose={onClose} label={`Schedule a viewing for ${property.name}`}>
      <form className="pdp__modal" onSubmit={submit} noValidate>
        <p className="eyebrow">Private viewing</p>
        <h3 className="pdp__modal-title">See {property.name} in person</h3>
        <p className="pdp__modal-sub">
          Pick a time and {property.agent.name} will arrange everything.
        </p>

        <div className="pdp__modal-grid">
          <Field label="Full name" htmlFor="v-name" required error={errors.name}>
            <Input id="v-name" placeholder="Your name" value={form.name} onChange={set("name")} />
          </Field>
          <Field label="Email" htmlFor="v-email" required error={errors.email}>
            <Input id="v-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
          </Field>
          <Field label="Phone" htmlFor="v-phone">
            <Input id="v-phone" type="tel" placeholder="Optional" value={form.phone} onChange={set("phone")} />
          </Field>
          <Field label="Preferred date" htmlFor="v-date" required error={errors.date}>
            <Select id="v-date" value={form.date} onChange={set("date")}>
              <option value="">Choose a day</option>
              <option>Tomorrow, 10:00 AM</option>
              <option>Tomorrow, 4:00 PM</option>
              <option>This Saturday, 11:00 AM</option>
              <option>This Saturday, 3:00 PM</option>
              <option>Next week — flexible</option>
            </Select>
          </Field>
        </div>

        <div className="pdp__modal-actions">
          <Button type="submit" variant="gold">
            Request viewing
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
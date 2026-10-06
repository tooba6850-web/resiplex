import { useParams, Link } from "react-router-dom";
import "./LocationDetailPage.css";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { PropertyGrid, PropertyList } from "../components/PropertyGrid";
import LocationCard from "../components/LocationCard";
import BlogCard from "../components/BlogCard";
import { IconPin, IconChevronRight, IconArrowRight } from "../components/icons";
import { getLocationBySlug, LOCATIONS } from "../data/locations";
import { PROPERTIES, formatPrice, propertiesByCity, cityName } from "../data/properties";
import { BLOG_POSTS, getPostBySlug, relatedPosts } from "../data/blog";

export default function LocationDetailPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <section className="section sect--pad">
        <div className="container">
          <PageHeader
            eyebrow="Locations"
            title="This destination isn't mapped yet."
            lead="The area you were looking for isn't in our portfolio — explore the regions we do operate in."
          />
          <div className="pagehead--actions">
            <Button to="/locations">All Locations</Button>
            <Button to="/" variant="ghost">
              Home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const cityProps = PROPERTIES.filter((p) => p.city === location.slug);
  const post = BLOG_POSTS[0];
  const posts = relatedPosts(post, 2);
  const otherAreas = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 2);
  const avgPrice = cityProps.length
    ? Math.round(cityProps.reduce((sum, p) => sum + p.price, 0) / cityProps.length)
    : 0;

  return (
    <div className="ldp">
      <PageHeader
        eyebrow={`${location.country}`}
        title={location.name}
        lead={location.tagline}
      />

      <section className="sect sect--pad">
        <div className="container">
          <div className="ldp__intro" data-reveal>
            <div className="ldp__intro-copy">
              <SectionHeading eyebrow="Overview" title="The destination" />
              {location.overview.split("\n").map((para, i) => (
                <p key={i} className="ldp__p">
                  {para}
                </p>
              ))}
            </div>
            <div className="ldp__stats" data-reveal style={{ "--d": "120ms" }}>
              {location.stats.map((s) => (
                <div className="ldp__stat" key={s.label}>
                  <span className="ldp__stat-value">{s.value}</span>
                  <span className="ldp__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {location.neighborhoods?.length ? (
        <section className="section sect--pad">
          <div className="container">
            <SectionHeading
              eyebrow="Neighbourhoods"
              title="Where in the city"
              lead="Each enclave has its own rhythm, price point and provenance. Choose by the way you live, not just the skyline."
            />
            <div className="ldp__hoods">
              {location.neighborhoods.map((hood, i) => (
                <article
                  className="hood-card"
                  data-reveal
                  key={hood.name}
                  style={{ "--d": `${i * 80}ms` }}
                >
                  <div className="hood-card__media">
                    <img src={hood.image} alt={hood.name} loading="lazy" />
                  </div>
                  <div className="hood-card__body">
                    <h3>{hood.name}</h3>
                    <p>{hood.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section sect--pad sect--divider">
        <div className="container">
          <SectionHeading
            eyebrow="Residences"
            title={`Current homes in ${location.name}`}
            lead="A shortlist of what we are quietly selling in the city right now."
          />
          <PropertyGrid properties={cityProps} />
        </div>
      </section>

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="Why live here" title="The local reasons" />
          <div className="ldp__why">
            {location.whyLive.map((w, i) => (
              <div
                className="ldp__why-item"
                data-reveal
                key={w.title}
                style={{ "--d": `${i * 80}ms` }}
              >
                <IconPin className="ldp__why-icon" />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad sect--divider">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Reading for the region"
            action={
              <Button to="/blog" size="small">
                All Insights
              </Button>
            }
          />
          <div className="ldp__posts">
            {posts.map((p, i) => (
              <BlogCard post={p} key={p.slug} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="Elsewhere" title="Other destinations" />
          <div className="ldp__areas">
            {otherAreas.map((other, i) => (
              <LocationCard
                location={other}
                key={other.slug}
                i={i}
                count={PROPERTIES.filter((p) => p.city === other.slug).length}
                avgPrice={Math.round(
                  PROPERTIES.filter((p) => p.city === other.slug).reduce(
                    (sum, p) => sum + p.price,
                    0
                  ) /
                    (PROPERTIES.filter((p) => p.city === other.slug).length || 1)
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

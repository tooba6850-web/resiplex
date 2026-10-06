import { useState } from "react";
import "./ContactPage.css";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { IconMail, IconPhone, IconPin } from "../components/icons";
import { BRAND, HERO_BACKDROP } from "../data/site";
import { useToast } from "../context/ToastContext";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast("Please fill in all fields.");
      return;
    }
    toast("Thank you! Your message has been sent to our advisors.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page contact-page">
      <PageHeader 
        image={HERO_BACKDROP[4]} 
        eyebrow="Get in Touch" 
        title="Ask us anything." 
        lead="Our advisors are ready to answer your questions, whether you're looking to buy, sell, or just explore your options." 
      />

      <section className="section contact-content">
        <div className="container contact-grid">
          <div className="contact-info" data-reveal style={{ "--d": "300ms" }}>
            <h2>Contact Information</h2>
            <p>Reach out directly or visit our office.</p>
            <div className="contact-info__items">
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="contact-info__item">
                <IconPhone />
                <div>
                  <strong>Phone</strong>
                  <span>{BRAND.phone}</span>
                </div>
              </a>
              <a href={`mailto:${BRAND.email}`} className="contact-info__item">
                <IconMail />
                <div>
                  <strong>Email</strong>
                  <span>{BRAND.email}</span>
                </div>
              </a>
              <div className="contact-info__item">
                <IconPin />
                <div>
                  <strong>Office</strong>
                  <span>{BRAND.address}</span>
                </div>
              </div>
            </div>
            
            <div className="contact-info__map" style={{ marginTop: "3rem", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--line)" }}>
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926922!2d55.2778!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sICD%20Brookfield%20Place!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae" 
                width="100%" 
                height="250" 
                style={{ border: 0, display: "block" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <form action={`mailto:${BRAND.email}`} method="post" encType="text/plain" className="contact-form" data-reveal style={{ "--d": "400ms" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "1.5rem", color: "var(--text)" }}>Send a Message</h3>
            <div className="field">
              <label className="field__label">Name <span className="field__req">*</span></label>
              <div className="field__control">
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
            </div>
            
            <div className="field">
              <label className="field__label">Email <span className="field__req">*</span></label>
              <div className="field__control">
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="field__label">Message</label>
              <div className="field__control">
                <textarea 
                  name="message"
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

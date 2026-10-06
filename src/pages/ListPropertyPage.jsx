import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { HERO_BACKDROP, BRAND } from "../data/site";
import { IconCheck } from "../components/icons";
import { useToast } from "../context/ToastContext";

export default function ListPropertyPage() {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address || !name || !email) {
      toast("Please fill in all required fields.");
      return;
    }
    toast("Thank you! A local agent will contact you shortly to discuss your property.");
    setAddress("");
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="page">
      <PageHeader 
        image={HERO_BACKDROP[2]} 
        eyebrow="List with us" 
        title="Sell your home with experts." 
        lead="Maximize your property's value with our expansive network, world-class marketing, and trusted local agents." 
      />

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
          
          <div data-reveal style={{ "--d": "100ms" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--text)" }}>Why List With {BRAND.name}?</h2>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Our dedicated team ensures your property receives maximum exposure to qualified buyers. We handle everything from professional photography to closing the deal.
            </p>
            
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Access to millions of active buyers",
                "Professional photography and virtual tours",
                "Data-driven pricing strategies",
                "Dedicated support from start to finish"
              ].map((point, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text)" }}>
                  <div style={{ color: "var(--gold)", display: "flex" }}>
                    <IconCheck />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <form 
            onSubmit={handleSubmit}
            data-reveal 
            style={{ 
              "--d": "200ms",
              background: "var(--surface)", 
              padding: "2.5rem", 
              borderRadius: "var(--radius-lg)", 
              border: "1px solid var(--line)",
              boxShadow: "var(--shadow)"
            }}
          >
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "1.5rem", color: "var(--text)" }}>Get a Free Home Valuation</h3>
            
            <div className="field" style={{ marginBottom: "1.2rem" }}>
              <label className="field__label">Property Address <span className="field__req">*</span></label>
              <div className="field__control">
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="123 Main St, City, State" />
              </div>
            </div>

            <div className="field" style={{ marginBottom: "1.2rem" }}>
              <label className="field__label">Your Name <span className="field__req">*</span></label>
              <div className="field__control">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.5rem" }}>
              <div className="field">
                <label className="field__label">Email Address <span className="field__req">*</span></label>
                <div className="field__control">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" />
                </div>
              </div>
              <div className="field">
                <label className="field__label">Phone Number</label>
                <div className="field__control">
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 000-0000" />
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>Request Valuation</Button>
          </form>

        </div>
      </section>
    </div>
  );
}

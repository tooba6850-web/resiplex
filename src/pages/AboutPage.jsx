import "./AboutPage.css";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import AgentCard from "../components/AgentCard";
import BlogCard from "../components/BlogCard";
import { BRAND, PHILOSOPHY, VALUES, HOW_WE_WORK, TEAM, TESTIMONIALS, HERO_BACKDROP } from "../data/site";
import { BLOG_POSTS } from "../data/blog";
import Button from "../components/Button";

export default function AboutPage() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <div>
      <PageHeader image={HERO_BACKDROP[0]} eyebrow="About" title={BRAND.name} lead="Privately, quietly, brilliantly — that is how RESIPLEX has sold property for the last two decades." />

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="Philosophy" title={PHILOSOPHY.title} lead={PHILOSOPHY.text} />
          <div className="about__stats">
            {HOW_WE_WORK.map((step, i) => (
              <div className="about__stat" key={step.title} data-reveal style={{ "--d": `${i * 80}ms` }}>
                <span className="about__stat-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad sect--divider">
        <div className="container">
          <SectionHeading eyebrow="Values" title="What we stand on" />
          <div className="about__values">
            {VALUES.map((v, i) => (
              <div className="about__val" key={v.title} data-reveal style={{ "--d": `${i * 80}ms` }}>
                <v.icon data-reveal />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="The team" title="The people behind the keys" />
          <div className="about__team">
            {TEAM.map((member, i) => (
              <AgentCard agent={member} key={member.name} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad sect--divider">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="In their words" />
          <div className="about__testi">
            {TESTIMONIALS.map((t, i) => (
              <blockquote className="about__quote" key={t.name} data-reveal style={{ "--d": `${i * 80}ms` }}>
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="Journal" title="From the desk" />
          <div className="about__posts">
            {posts.map((post, i) => (
              <BlogCard post={post} key={post.slug} i={i} />
            ))}
          </div>
          <div className="about__actions">
            <Button to="/blog">All Journal Entries</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

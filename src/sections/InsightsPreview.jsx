import "./InsightsPreview.css";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import { BLOG_POSTS } from "../data/blog";

export default function InsightsPreview() {
  const posts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="RESIPLEX Insights"
            title="Notes from the market"
            lead="Market signals, buying discipline and the design of exceptional homes — from the teams inside the deals."
          />
          <Button to="/blog" variant="outline" arrow>
            All insights
          </Button>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
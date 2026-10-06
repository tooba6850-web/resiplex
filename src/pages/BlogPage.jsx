import { useState } from "react";
import "./BlogPage.css";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/blog";
import { HERO_BACKDROP } from "../data/site";

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const posts =
    active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <div>
      <PageHeader
        image={HERO_BACKDROP[3]}
        eyebrow="Journal"
        title="Insights from the desk"
        lead="Market notes, buying craft and the occasional manifesto — written by the people who actually sell. No fluff, no filler, ever."
      />

      <section className="section sect--pad">
        <div className="container">
          <div className="blog__cats">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`blog__cat ${active === cat ? "is-active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section sect--pad sect--divider">
        <div className="container">
          <SectionHeading eyebrow="Recent" title="Newest entries" />
          <div className="blog__grid">
            {posts.map((post, i) => (
              <BlogCard post={post} key={post.slug} i={i} />
            ))}
          </div>
          {!posts.length ? (
            <p className="blog__empty">
              Nothing filed under {active} yet — the desk is usually fast. Try a different category.
            </p>
          ) : null}
        </div>
      </section>

      <section className="section sect--pad">
        <div className="container">
          <SectionHeading eyebrow="Subscribe" title="The Sunday brief" />
          <p className="blog__brief">
            One email, every other Sunday, with the three things that moved in luxury property this
            week. No noise — a readable eight minutes.
          </p>
        </div>
      </section>
    </div>
  );
}

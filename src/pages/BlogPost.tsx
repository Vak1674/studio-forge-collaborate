import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} — Radical Earth Studio`;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", post.excerpt);
    setMeta("keywords", post.tags.join(", "));
    setMeta("og:title", post.title, "property");
    setMeta("og:description", post.excerpt, "property");
    setMeta("og:type", "article", "property");
    setMeta("article:published_time", post.date, "property");

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      description: post.excerpt,
      keywords: post.tags.join(", "),
      author: { "@type": "Organization", name: "Radical Earth Studio" },
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(ld);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl mb-4">Post not found</h1>
            <Link to="/blog" className="font-sans text-sm tracking-widest uppercase border-b border-foreground pb-1">
              Back to Journal
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <article className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-8 block"
          >
            ← Back to Journal
          </Link>

          <div className="flex items-center gap-4 font-sans text-xs tracking-widest uppercase text-muted-foreground mb-6">
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-8">
            {post.title}
          </h1>

          <p className="font-serif text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 md:mt-16">
          <div className="aspect-[16/9] overflow-hidden bg-secondary">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 md:mt-20 space-y-6 md:space-y-8">
          {post.content.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2
                  key={i}
                  className="font-serif text-2xl md:text-4xl tracking-tighter leading-tight pt-8 md:pt-12"
                >
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3
                  key={i}
                  className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase pt-4"
                >
                  {block.text}
                </h3>
              );
            if (block.type === "blockquote")
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-foreground pl-6 md:pl-8 py-2 my-4 font-serif text-xl md:text-2xl italic leading-relaxed"
                >
                  {block.text}
                </blockquote>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="space-y-3 list-none pl-0">
                  {block.items?.map((item, j) => (
                    <li
                      key={j}
                      className="font-serif text-base md:text-lg leading-relaxed text-foreground/90 pl-6 relative"
                    >
                      <span className="absolute left-0 top-3 w-2 h-px bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            return (
              <p
                key={i}
                className="font-serif text-base md:text-lg leading-relaxed text-foreground/90"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-16 md:mt-24 pt-8 border-t border-border">
          <span className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground block mb-4">
            Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="font-sans text-[10px] tracking-widest uppercase border border-foreground/20 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

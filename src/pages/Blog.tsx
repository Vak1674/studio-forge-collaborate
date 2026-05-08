import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">
          Journal
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
          Field <span className="italic">notes</span> <br />
          from the studio.
        </h1>
        <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-8 max-w-2xl leading-relaxed">
          Essays on context, ecology, and the craft of building places that belong.
        </p>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 border-t border-border pt-12">
          {posts.map((post) => (
            <article key={post.slug} className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-16 mb-16 border-b border-border">
              <Link to={`/blog/${post.slug}`} className="md:col-span-6 block aspect-[4/3] overflow-hidden bg-secondary group">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </Link>
              <div className="md:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-4 font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  <span>{post.dateLabel}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-serif text-2xl md:text-4xl tracking-tighter leading-tight hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                </Link>
                <p className="font-serif text-base md:text-lg italic text-muted-foreground mt-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="font-sans text-[10px] tracking-widest uppercase border border-foreground/20 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-8 font-sans text-xs font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:pb-2 transition-all self-start"
                >
                  Read essay →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

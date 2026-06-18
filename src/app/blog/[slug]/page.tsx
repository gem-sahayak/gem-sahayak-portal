import React from "react";
import { getPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";

// Next.js 15 Static Params Pre-rendering
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate SEO Metadata dynamically based on post data
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} — GeM Sahayak Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ background: "white", padding: "60px 0 100px 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Back navigation */}
        <a 
          href="/blog" 
          style={{ 
            color: "var(--primary-green)", 
            fontWeight: "700", 
            fontSize: "0.95rem", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "6px",
            marginBottom: "32px" 
          }}
        >
          ← Back to all posts
        </a>

        {/* Post Header */}
        <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--border-light)", paddingBottom: "32px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
            <span style={{ background: "rgba(22, 163, 74, 0.1)", color: "var(--primary-green)", fontSize: "0.8rem", padding: "4px 12px", borderRadius: "100px", fontWeight: "700" }}>
              {post.category}
            </span>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "500" }}>
              📅 Published: {post.date}
            </span>
          </div>

          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "var(--primary-dark)", lineHeight: "1.2" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", color: "var(--text-dark)", fontWeight: "600" }}>
            <span>✍️ Written by: {post.author}</span>
          </div>
        </header>

        {/* Post Content */}
        <article 
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
        
        {/* Author bio / box */}
        <div style={{ marginTop: "60px", background: "var(--bg-light)", border: "1px solid var(--border-light)", borderRadius: "12px", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "2.5rem" }}>🤖</div>
          <div>
            <h4 style={{ color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "4px" }}>About GeM Sahayak</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              GeM Sahayak is a free software tool built to help Indian MSMEs succeed in public procurement by automating the tedious parts of the Government e-Marketplace portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

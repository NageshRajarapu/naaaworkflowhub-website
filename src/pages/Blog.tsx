import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const Blog = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold mb-3">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground">Tutorials, tips, and automation ideas</p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 group cursor-pointer glow-hover"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{post.category}</span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>
              <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
              <span className="text-sm text-primary flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;

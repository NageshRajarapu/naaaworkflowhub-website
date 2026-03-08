import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Search, Download, Zap, Star, Users, Bot, MessageSquare, Mail, Target, BarChart3, Smartphone } from "lucide-react";
import { workflows, categories, testimonials } from "@/lib/data";
import WorkflowCard from "@/components/WorkflowCard";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "ai-agents": <Bot className="w-6 h-6" />,
  whatsapp: <MessageSquare className="w-6 h-6" />,
  email: <Mail className="w-6 h-6" />,
  "lead-gen": <Target className="w-6 h-6" />,
  crm: <BarChart3 className="w-6 h-6" />,
  "social-media": <Smartphone className="w-6 h-6" />,
};

const Index = () => {
  const featured = workflows.filter((w) => w.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-muted-foreground mb-8">
              <Zap className="w-4 h-4 text-primary" />
              Powered by n8n Automation
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automate Your Business in Minutes with{" "}
              <span className="gradient-text">Ready-Made Workflows</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download powerful automation workflows built with n8n and save hours of manual work. 
              No coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/marketplace">
                  <Search className="w-4 h-4 mr-1" />
                  Browse Workflows
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/submit">
                  Submit Your Workflow
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                <span>10K+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8 Avg Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>2K+ Users</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Workflows */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Featured Workflows</h2>
            <p className="text-muted-foreground">Hand-picked automation workflows to supercharge your business</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((w, i) => (
              <WorkflowCard key={w.id} workflow={w} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero-outline" asChild>
              <Link to="/marketplace">View All Workflows <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-muted-foreground">Get started in three simple steps</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Browse", desc: "Explore our marketplace of ready-made automation workflows.", icon: <Search className="w-6 h-6" /> },
              { step: "02", title: "Download", desc: "Get the workflow JSON file and import it into your n8n instance.", icon: <Download className="w-6 h-6" /> },
              { step: "03", title: "Automate", desc: "Configure your credentials and start automating in minutes.", icon: <Zap className="w-6 h-6" /> },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-primary/60">{item.step}</span>
                <h3 className="font-heading text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Popular Categories</h2>
            <p className="text-muted-foreground">Find the perfect workflow for your use case</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/marketplace?category=${cat.id}`}
                  className="glass-card rounded-xl p-5 text-center glow-hover block group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.id]}
                  </div>
                  <h3 className="font-heading text-sm font-medium mb-1">{cat.label}</h3>
                  <span className="text-xs text-muted-foreground">{cat.count} workflows</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">What Our Users Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="relative glass-card rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">Automate</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join thousands of businesses already saving hours every week with our ready-made workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/marketplace">Get Started Now</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/submit">Become a Creator</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

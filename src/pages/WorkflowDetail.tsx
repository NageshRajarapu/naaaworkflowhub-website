import { useParams, Link } from "react-router-dom";
import { workflows } from "@/lib/data";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Star, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowDetail = () => {
  const { id } = useParams();
  const workflow = workflows.find((w) => w.id === id);

  if (!workflow) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Workflow not found.</p>
          <Button variant="hero-outline" asChild className="mt-4">
            <Link to="/marketplace">Back to Marketplace</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Marketplace
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {workflow.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                  <h1 className="font-heading text-3xl font-bold mt-3">{workflow.title}</h1>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-heading text-3xl font-bold">
                    {workflow.price === 0 ? (
                      <span className="text-emerald-400">Free</span>
                    ) : (
                      `$${workflow.price}`
                    )}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {workflow.rating}
                    <span>•</span>
                    <Download className="w-4 h-4" /> {workflow.downloads.toLocaleString()}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">{workflow.description}</p>

              {/* Screenshot placeholder */}
              <div className="rounded-xl bg-secondary/50 aspect-video flex items-center justify-center mb-8 border border-border/50">
                <span className="text-muted-foreground text-sm">Workflow Screenshot Preview</span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workflow.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Setup */}
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Setup Instructions</h2>
                <p className="text-sm text-muted-foreground">{workflow.setupInstructions}</p>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                {workflow.price === 0 ? "Download Free" : `Buy for $${workflow.price}`}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkflowDetail;

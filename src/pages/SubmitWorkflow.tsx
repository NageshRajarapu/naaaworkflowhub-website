import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/lib/data";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const SubmitWorkflow = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Workflow submitted! We'll review it shortly.");
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-3">
              Submit Your <span className="gradient-text">Workflow</span>
            </h1>
            <p className="text-muted-foreground">Share your n8n automation with the community and earn money.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <Input placeholder="John Doe" className="bg-secondary/50 border-border" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-secondary/50 border-border" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Workflow Title</label>
              <Input placeholder="e.g., AI Customer Support Bot" className="bg-secondary/50 border-border" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea placeholder="Describe what your workflow does..." className="bg-secondary/50 border-border min-h-[100px]" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Upload Workflow File (.json)</label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Drag & drop your n8n JSON file or click to browse</p>
                <input type="file" accept=".json" className="hidden" />
              </div>
            </div>

            <Button variant="hero" size="lg" type="submit" className="w-full">
              Submit Workflow
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitWorkflow;

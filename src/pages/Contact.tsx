import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-3">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="glass-card rounded-xl p-5 text-center">
              <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-heading font-semibold text-sm">Email</h3>
              <p className="text-sm text-muted-foreground">support@workflowhub.ai</p>
            </div>
            <div className="glass-card rounded-xl p-5 text-center">
              <MessageSquare className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-heading font-semibold text-sm">Community</h3>
              <p className="text-sm text-muted-foreground">Join our Discord server</p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" className="bg-secondary/50 border-border" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@example.com" className="bg-secondary/50 border-border" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="How can we help?" className="bg-secondary/50 border-border min-h-[120px]" required />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

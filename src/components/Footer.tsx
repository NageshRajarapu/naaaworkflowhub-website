import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold">NaaaworkflowHub</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Discover and download ready-made automation workflows built with n8n.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link></li>
            <li><Link to="/submit" className="hover:text-foreground transition-colors">Submit Workflow</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/marketplace?category=ai-agents" className="hover:text-foreground transition-colors">AI Agents</Link></li>
            <li><Link to="/marketplace?category=whatsapp" className="hover:text-foreground transition-colors">WhatsApp Automation</Link></li>
            <li><Link to="/marketplace?category=email" className="hover:text-foreground transition-colors">Email Automation</Link></li>
            <li><Link to="/marketplace?category=lead-gen" className="hover:text-foreground transition-colors">Lead Generation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NaaaworkflowHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

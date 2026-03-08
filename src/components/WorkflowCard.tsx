import { Link } from "react-router-dom";
import { Workflow } from "@/lib/data";
import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WorkflowCard = ({ workflow, index = 0 }: { workflow: Workflow; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Link
      to={`/workflow/${workflow.id}`}
      className="glass-card rounded-xl p-5 flex flex-col gap-3 glow-hover group block h-full"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
          {workflow.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>
        <span className="font-heading font-bold text-lg">
          {workflow.price === 0 ? (
            <span className="text-emerald-400">Free</span>
          ) : (
            `$${workflow.price}`
          )}
        </span>
      </div>

      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
        {workflow.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{workflow.description}</p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            {workflow.rating}
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            {workflow.downloads.toLocaleString()}
          </span>
        </div>
        <Button variant="hero" size="sm" className="text-xs">
          Download
        </Button>
      </div>
    </Link>
  </motion.div>
);

export default WorkflowCard;

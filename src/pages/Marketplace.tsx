import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { workflows, categories } from "@/lib/data";
import WorkflowCard from "@/components/WorkflowCard";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    return workflows.filter((w) => {
      const matchesCategory = activeCategory === "all" || w.category === activeCategory;
      const matchesSearch =
        !search ||
        w.title.toLowerCase().includes(search.toLowerCase()) ||
        w.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl font-bold mb-3">
              Workflow <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Browse, filter, and download automation workflows for every use case.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search workflows..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={activeCategory === "all" ? "hero" : "secondary"}
                size="sm"
                onClick={() => setSearchParams({})}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 mr-1" />
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "hero" : "secondary"}
                  size="sm"
                  onClick={() => setSearchParams({ category: cat.id })}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No workflows found</p>
              <p className="text-sm mt-1">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((w, i) => (
                <WorkflowCard key={w.id} workflow={w} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;

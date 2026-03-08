import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Zap, Users, Globe } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold mb-4">
            About <span className="gradient-text">NaaaworkflowHub</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're on a mission to help businesses automate their work with ready-to-use automation workflows — no coding required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Zap className="w-6 h-6" />, title: "Our Mission", desc: "Make powerful automation accessible to everyone, from solo entrepreneurs to large teams." },
            { icon: <Users className="w-6 h-6" />, title: "Community", desc: "A growing community of creators and businesses sharing and discovering workflows." },
            { icon: <Globe className="w-6 h-6" />, title: "Open Source", desc: "Built on n8n, the fair-code automation platform trusted by thousands worldwide." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">{item.icon}</div>
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

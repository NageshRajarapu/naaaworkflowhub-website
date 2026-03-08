export interface Workflow {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number; // 0 = free
  featured: boolean;
  downloads: number;
  rating: number;
  image?: string;
  features: string[];
  setupInstructions: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "ai-agents", label: "AI Agents", icon: "🤖", count: 24 },
  { id: "whatsapp", label: "WhatsApp Automation", icon: "💬", count: 18 },
  { id: "email", label: "Email Automation", icon: "📧", count: 31 },
  { id: "lead-gen", label: "Lead Generation", icon: "🎯", count: 22 },
  { id: "crm", label: "CRM Automation", icon: "📊", count: 15 },
  { id: "social-media", label: "Social Media", icon: "📱", count: 27 },
];

export const workflows: Workflow[] = [
  {
    id: "1",
    title: "AI Customer Support Agent",
    description: "Automate customer support with an intelligent AI agent that handles FAQs, tickets, and escalations.",
    category: "ai-agents",
    price: 29,
    featured: true,
    downloads: 1240,
    rating: 4.9,
    features: ["GPT-4 powered responses", "Ticket routing", "Multi-language support", "Slack integration"],
    setupInstructions: "Import the JSON file into your n8n instance, configure OpenAI API key, and connect your support channels.",
  },
  {
    id: "2",
    title: "WhatsApp Lead Qualifier",
    description: "Automatically qualify leads through WhatsApp conversations and sync with your CRM.",
    category: "whatsapp",
    price: 19,
    featured: true,
    downloads: 890,
    rating: 4.7,
    features: ["Auto-reply", "Lead scoring", "CRM sync", "Follow-up sequences"],
    setupInstructions: "Connect WhatsApp Business API, configure qualification criteria, and link your CRM.",
  },
  {
    id: "3",
    title: "Email Drip Campaign Builder",
    description: "Create powerful email sequences that nurture leads and convert them into customers.",
    category: "email",
    price: 0,
    featured: true,
    downloads: 2100,
    rating: 4.8,
    features: ["Drag-and-drop sequences", "A/B testing", "Analytics", "Template library"],
    setupInstructions: "Import workflow, connect your email provider (Gmail, SendGrid, etc.), and configure your sequences.",
  },
  {
    id: "4",
    title: "LinkedIn Lead Scraper",
    description: "Extract and enrich leads from LinkedIn automatically with AI-powered data enrichment.",
    category: "lead-gen",
    price: 39,
    featured: false,
    downloads: 670,
    rating: 4.6,
    features: ["Profile scraping", "Email finder", "Data enrichment", "CSV export"],
    setupInstructions: "Set up LinkedIn cookies, configure search criteria, and enable data enrichment APIs.",
  },
  {
    id: "5",
    title: "Social Media Auto-Poster",
    description: "Schedule and publish content across all major social media platforms from one workflow.",
    category: "social-media",
    price: 15,
    featured: true,
    downloads: 1560,
    rating: 4.5,
    features: ["Multi-platform", "Content calendar", "AI captions", "Analytics tracking"],
    setupInstructions: "Connect your social accounts, set posting schedule, and optionally enable AI caption generation.",
  },
  {
    id: "6",
    title: "HubSpot CRM Sync Engine",
    description: "Keep your CRM data clean and synced across all your tools automatically.",
    category: "crm",
    price: 25,
    featured: false,
    downloads: 430,
    rating: 4.4,
    features: ["Bi-directional sync", "Duplicate detection", "Field mapping", "Error handling"],
    setupInstructions: "Connect HubSpot API, configure field mappings, and set sync intervals.",
  },
  {
    id: "7",
    title: "AI Content Writer Agent",
    description: "Generate blog posts, social media content, and emails using AI with human-like quality.",
    category: "ai-agents",
    price: 0,
    featured: false,
    downloads: 3200,
    rating: 4.8,
    features: ["Multiple content types", "SEO optimization", "Brand voice", "Bulk generation"],
    setupInstructions: "Import workflow, add your OpenAI key, configure brand guidelines, and start generating.",
  },
  {
    id: "8",
    title: "Invoice & Payment Tracker",
    description: "Automate invoice creation, payment reminders, and reconciliation with Stripe and QuickBooks.",
    category: "crm",
    price: 35,
    featured: false,
    downloads: 520,
    rating: 4.7,
    features: ["Auto-invoicing", "Payment reminders", "Reconciliation", "Reports"],
    setupInstructions: "Connect Stripe and QuickBooks, set up invoice templates, and configure reminder schedules.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, GrowthLab",
    text: "NaaaworkflowHub saved us 20+ hours per week. The workflows are production-ready and incredibly easy to set up.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Freelance Developer",
    text: "I've been selling my n8n workflows here and the platform is fantastic. Great community and support.",
    avatar: "MJ",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    text: "The email automation workflows transformed our lead nurturing. 3x conversion rate improvement in just one month.",
    avatar: "ER",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Getting Started with n8n: A Complete Beginner's Guide",
    excerpt: "Learn the basics of n8n workflow automation and build your first workflow in under 10 minutes.",
    category: "Tutorials",
    date: "Mar 5, 2026",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Top 10 AI Automation Ideas for Small Businesses",
    excerpt: "Discover how AI-powered workflows can save time and money for your small business.",
    category: "AI Agents",
    date: "Mar 2, 2026",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "How to Build a WhatsApp Chatbot with n8n",
    excerpt: "Step-by-step tutorial on creating an automated WhatsApp chatbot for customer support.",
    category: "Tutorials",
    date: "Feb 28, 2026",
    readTime: "12 min read",
  },
  {
    id: "4",
    title: "5 Workflow Tips to 10x Your Productivity",
    excerpt: "Pro tips from power users on optimizing your automation workflows for maximum efficiency.",
    category: "Tips",
    date: "Feb 25, 2026",
    readTime: "5 min read",
  },
];

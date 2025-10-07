import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";
import { 
  ArrowRight, 
  Brain,
  Workflow, 
  Bot,
  Globe,
  Settings,
  Code
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "We start with a disciplined audit to understand your current administrative costs. This ensures your AI investment is directly aligned with business goals and delivers guaranteed financial ROI.",
      features: [
        "Fixed-Price Automation Audit", // Emphasize the entry point
        "Roadmap development (3/6/12 month)",
        "Identify high-cost, high-volume workflows",
        "ROI analysis and financial planning"
      ]
    },
    {
      icon: Workflow,
      title: "AI Process Automation",
      description: "Implement AI agents that eliminate manual, repetitive work like data entry, invoice processing, and report generation. We turn staff time spent clicking into recoverable dollars.",
      features: [
        "AI Document Processing (NLP)", // Covers data extraction
        "Intelligent workflow orchestration (Make/Zapier)",
        "Automated data syncing across systems (CRM/ERP)",
        "Reduce human errors and compliance risk"
      ]
    },
    {
      icon: Bot,
      title: "Conversational AI & Customer Service",
      description: "Deploy advanced AI assistants to manage customer interactions, handle internal requests, and act as a 24/7 AI receptionist using voice-to-text technology.",
      features: [
        "AI Customer Service Triage & Resolution",
        "Custom Chatbots and Virtual Assistants",
        "Voice-to-Text AI Receptionist and Intake", // Addresses your specific goal
        "Multi-channel support integration"
      ]
    },
    {
      icon: Globe,
      title: "Website Solutions & Digital Presence",
      description: "We design and rebuild modern, scalable websites that act as a strong digital front door for your business, ready for seamless AI integration and future growth.",
      features: [
        "Website design and rebuild (UX/UI)",
        "Mobile-first, responsive development",
        "CRM and marketing tool integration",
        "Optimisation for lead generation"
      ]
    },
    {
      icon: Code, // New icon for development focus
      title: "Custom Application Development",
      description: "Build custom web portals, internal mobile apps, and dedicated data dashboards that provide simple, centralized access points for your team or customers.",
      features: [
        "Mobile application development (iOS/Android)",
        "Internal functional web portals",
        "Custom data dashboards and reporting tools",
        "Scalable back-end infrastructure design"
      ]
    },
    {
      icon: Settings,
      title: "AI Integration & Optimisation",
      description: "Seamlessly integrate your new AI solutions with your existing software stack (CRM, accounting, legacy systems) and provide ongoing support to ensure peak performance.",
      features: [
        "System integration and API development",
        "Ongoing performance monitoring and tuning",
        "Dedicated technical support and maintenance",
        "Future-proofing and scaling capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs. From strategy to implementation, 
            we're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground p-12 text-center shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to explore how our AI services can transform your business? Get in touch today.
            </p>
            <NavLink to="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </NavLink>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

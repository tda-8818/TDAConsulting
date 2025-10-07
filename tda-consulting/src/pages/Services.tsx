import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Database, 
  Workflow, 
  Bot, 
  LineChart, 
  Shield,
  Lightbulb,
  Cpu,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop a comprehensive AI roadmap aligned with your business objectives. We help you identify opportunities, assess readiness, and create actionable implementation plans.",
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Technology stack selection",
        "ROI analysis and planning"
      ]
    },
    {
      icon: Cpu,
      title: "Machine Learning Solutions",
      description: "Custom ML models designed to solve your unique business challenges. From predictive analytics to natural language processing.",
      features: [
        "Custom model development",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights. Advanced analytics, data visualization, and business intelligence solutions.",
      features: [
        "Data pipeline development",
        "Advanced analytics",
        "Interactive dashboards",
        "Real-time reporting"
      ]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation. Reduce manual work, minimize errors, and boost productivity.",
      features: [
        "Workflow automation",
        "Document processing",
        "RPA implementation",
        "Integration services"
      ]
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Deploy intelligent chatbots and virtual assistants to enhance customer service and internal operations.",
      features: [
        "Chatbot development",
        "Virtual assistants",
        "Voice interfaces",
        "Multi-channel support"
      ]
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Forecast trends, identify risks, and make data-driven decisions with advanced predictive models.",
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Customer behaviour prediction",
        "Market trend analysis"
      ]
    },
    {
      icon: Shield,
      title: "AI Governance & Ethics",
      description: "Ensure responsible AI deployment with proper governance frameworks and ethical guidelines.",
      features: [
        "Policy development",
        "Bias detection and mitigation",
        "Compliance assurance",
        "Risk management"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Hands-on workshops to educate your team and identify AI opportunities within your organisation.",
      features: [
        "Team training",
        "Ideation sessions",
        "Proof of concept development",
        "Change management"
      ]
    },
    {
      icon: Settings,
      title: "AI Integration & Support",
      description: "Seamlessly integrate AI solutions into your existing systems with ongoing support and optimisation.",
      features: [
        "System integration",
        "API development",
        "Performance optimisation",
        "24/7 technical support"
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

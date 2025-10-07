import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Award, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to democratising AI technology and making it accessible to Australian businesses of all sizes."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build long-term partnerships based on trust, transparency, and results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy development to implementation."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real business value."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the AI revolution in Australia with expert consulting and innovative solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-card border-border">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Technology Development and Automation (TDA) specialises in delivering cutting-edge AI and automation services to businesses of all sizes. 
                From advanced workflow automation and intelligent data processing to custom enterprise solutions, we empower organisations to modernise their operations 
                and scale their digital capabilities in the ever-evolving digital world.
              </p>
              <p>
                At TDA, we pride ourselves on providing tailored solutions that meet the unique needs of each client. Our team of experts ensures seamless integration, 
                enhanced productivity, and long-term success for your business by eliminating costly human errors and wasted staff hours. 
                We don't just implement technology; we focus on real-world outcomes that deliver clear, quantifiable value for your business.
              </p>
              <p>
                Whether you’re looking to streamline your internal admin, secure your data, or scale your operations across multiple departments, we’re here to make it happen. 
                As part of a global network focused on technology and automation, we bring a wealth of experience, innovation, and a strong commitment to excellence to every 
                business we partner with. TDA is committed to helping you thrive and achieve your growth ambitions.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 opacity-90">Industries</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Real Estate & Property Management</li>
                  <li>• Financial Services & Lending</li>
                  <li>• Legal & Professional Services</li>
                  <li>• Healthcare Administration</li>
                  <li>• Logistics & Supply Chain</li>
                  <li>• Technology & SaaS Operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 opacity-90">Technologies</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• AI Document Processing</li>
                  <li>• Autonomous Workflow Orchestration</li>
                  <li>• Intelligent Data Classification</li>
                  <li>• Predictive Analytics</li>
                  <li>• Generative AI for Operations</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

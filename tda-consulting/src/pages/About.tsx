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
                Founded with a vision to bridge the gap between cutting-edge AI technology and practical
                business applications, we've grown to become one of Australia's most trusted AI consulting firms,
                helping businesses transform through intelligent automation.
              </p>
              <p>
                Our team of experienced data scientists, ML engineers, and business consultants brings together
                deep technical expertise and real-world business acumen. We understand that successful AI
                implementation isn't just about the technology—it's about understanding your business, your
                challenges, and your goals.
              </p>
              <p>
                With a proven track record across industries including finance, healthcare, retail, real estate,
                and professional services, we've helped Australian businesses unlock the transformative power of AI.
                From initial strategy to full-scale implementation, we're with you every step of the way.
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
                  <li>• Financial Services</li>
                  <li>• Healthcare & Life Sciences</li>
                  <li>• Retail & E-commerce</li>
                  <li>• Manufacturing</li>
                  <li>• Professional Services</li>
                  <li>• Technology</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 opacity-90">Technologies</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Cloud AI Services</li>
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

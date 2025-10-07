import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  // Replace this with your actual Google Form embed URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@aiconsulting.com.au</p>
                  <p className="text-sm text-muted-foreground">support@aiconsulting.com.au</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+61 2 1234 5678</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm AEST</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">Sydney CBD</p>
                  <p className="text-sm text-muted-foreground">New South Wales, Australia</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Google Form Embed */}
          <Card className="p-8 bg-card border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Google Form Iframe */}
            <div className="w-full bg-secondary/20 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Google Form Integration</h3>
                <p className="text-muted-foreground max-w-md">
                  To complete the setup, replace the <code className="bg-muted px-2 py-1 rounded text-sm">googleFormUrl</code> variable 
                  in <code className="bg-muted px-2 py-1 rounded text-sm">src/pages/Contact.tsx</code> with your actual Google Form embed URL.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://docs.google.com/forms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Create a Google Form →
                  </a>
                </div>
              </div>
            </div>

            {/* Uncomment this section once you have your Google Form URL */}
            {/* <iframe
              src={googleFormUrl}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe> */}
          </Card>

          {/* Business Hours */}
          <Card className="mt-8 p-6 bg-secondary/30 border-border">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-6 h-6 text-primary" />
              <div className="text-center">
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM AEST | Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

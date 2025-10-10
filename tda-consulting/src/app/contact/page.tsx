// src/app/contact/page.tsx
import { Card } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | TDA Consulting",
  description: "Get in touch with TDA Consulting. Book your free 15-minute AI automation audit. Based in Sydney, Australia.",
};

export default function Contact() {
  const googleFormUrl = "https://forms.gle/ZdHtUxALkWsMg1zw5";

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Let&apos;s start a conversation about your goals and how we can help.
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
                  <p className="text-sm text-muted-foreground">info@tdaconsulting.services</p>
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
                  <p className="text-sm text-muted-foreground">+61 414 810 390</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm AEST</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM AEST</p>
                  <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Google Form Embed */}
          <Card className="p-8 bg-card border-border">
            <iframe
              src={googleFormUrl}
              width="100%"
              height="800"
              className="rounded-lg border-0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </Card>
        </div>
      </section>
    </div>
  );
}
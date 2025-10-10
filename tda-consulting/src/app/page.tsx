// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Sparkles, UserCheck, FileCheck, MessageSquare, DollarSign, Target } from "lucide-react";

export default function Home() {
  const solutions = [
    {
      title: "Autonomous Lead Qualification Agent",
      problem: "Wasted Team Time",
      description: "Filters, scores, and updates 24/7, ensuring your team only engages with qualified leads (7/10 score or higher).",
      icon: UserCheck,
    },
    {
      title: "AI Document Processor",
      problem: "Document/Data Risk",
      description: "Instantly extracts key data from PDFs, contracts, and forms, then syncs directly to your CRM or business software.",
      icon: FileCheck,
    },
    {
      title: "Client Nurturing Engine",
      problem: "Inconsistent Follow-up",
      description: "Sends hyper-personalised follow-up communications immediately after meetings or appointments based on team notes.",
      icon: MessageSquare,
    },
  ];

  const roiMetrics = [
    {
      icon: DollarSign,
      value: "$8,400+",
      label: "Recovered Annually",
      description: "The hidden cost of 1 hour/day of manual admin time per employee",
    },
    {
      icon: Target,
      value: "100%",
      label: "Team Time on High-Value Work",
      description: "We automate the repetitive 0-60% qualification phase entirely",
    },
    {
      icon: CheckCircle,
      value: "Near-Zero",
      label: "Error Rate",
      description: "Eliminate manual copy/paste errors in sensitive documents",
    },
  ];

  const processSteps = [
    {
      step: "Step 1 (Free)",
      title: "The 15-Minute Diagnosis",
      description: "A quick call to identify the single, most repetitive task costing your business the most time and money.",
    },
    {
      step: "Step 2 (Paid)",
      title: "The $499 AI Audit Blueprint",
      description: "We deploy resources to map the chosen process, calculate the exact ROI, and deliver the 3-page, fixed-price solution blueprint.",
    },
    {
      step: "Step 3 (Project)",
      title: "Implementation & Go-Live",
      description: "We deploy the custom AI Agent, integrating directly with your CRM and existing systems. You start recovering the cost of the Audit within the first two weeks.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium">AI Automation Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Stop Paying for Manual Work.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Deploy Autonomous AI.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We eliminate the hidden cost of manual administration by automating high-volume,
              low-value workflows (e.g., lead qualification, document processing, data entry).
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="group">
                  Quantify Your Savings: Book Discovery Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">3 High-ROI Problems We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Focus on the core issues costing your business time and money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
                >
                  <div className="mb-6">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-accent">{solution.problem}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI & Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">The ROI You Can Expect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hard numbers based on real automation outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {roiMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="p-8 text-center bg-card hover:shadow-lg transition-all">
                  <Icon className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                  <h3 className="text-4xl font-bold mb-2">{metric.value}</h3>
                  <p className="text-lg font-semibold mb-2">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Your Path to AI Automation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A clear, transparent process from diagnosis to deployment
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-accent mb-2">{step.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="hero" size="lg" className="group">
                Start with Step 1: Book Your Free Diagnosis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground p-12 text-center shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Eliminate Admin Waste?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your free 15-minute diagnosis and discover exactly how much your agency can save with AI automation.
            </p>
            <Link href="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
              >
                Book Your Free Discovery Call
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
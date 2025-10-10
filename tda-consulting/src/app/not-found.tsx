"use client";

// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
        </div>
        
        <p className="text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button variant="hero" size="lg">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
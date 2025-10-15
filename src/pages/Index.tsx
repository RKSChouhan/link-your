import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { ComparisonSection } from "@/components/ComparisonSection";
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-muted-foreground text-center">
            SCD-V Division, DoSJE - Scholarship Awareness Initiative
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Student Scholarship
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Banking Guide</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Essential information about DBT-enabled Aadhaar seeded bank accounts for Pre-Matric & 
            Post-Matric scholarship disbursements. Avoid delays in scholarship payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn">
              <Button size="lg" className="min-w-[200px]">
                Learn About DBT Banking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/setup">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Setup Your Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={BookOpen}
              title="Interactive Learning"
              description="Step-by-step explanations with visual aids to understand complex banking concepts"
            />
            <FeatureCard
              icon={Users}
              title="Student Focused"
              description="Designed specifically for students to grasp Aadhaar banking systems easily"
            />
            <FeatureCard
              icon={Trophy}
              title="Knowledge Testing"
              description="Interactive quizzes to test and reinforce your understanding"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Student Scholarship Banking Guide. Educational Initiative by SCD-V Division, DoSJE</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

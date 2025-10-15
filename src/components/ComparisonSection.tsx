import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand scholarship requirements and avoid payment delays
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                Aadhaar Linked Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm">Basic account linking process</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm">Limited scholarship eligibility</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm">Manual enrollment required</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm">Potential payment delays</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                DBT Enabled Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">Direct scholarship payments</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">No payment delays or middlemen</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">Automatic benefit eligibility</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">Real-time transfer tracking</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Learn About DBT Banking</h1>
          <p className="text-lg text-muted-foreground">
            Understanding Direct Benefit Transfer (DBT) enabled bank accounts for scholarship disbursements
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                What is DBT (Direct Benefit Transfer)?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Direct Benefit Transfer (DBT) is a system where government benefits and scholarships are directly transferred 
                to the beneficiary's bank account. This eliminates intermediaries and ensures faster, transparent disbursement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Why Aadhaar Seeding is Important
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Aadhaar seeding means linking your Aadhaar number with your bank account. This is essential for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Receiving scholarship payments directly</li>
                <li>Avoiding payment delays and rejections</li>
                <li>Ensuring secure and verified transactions</li>
                <li>Accessing various government benefits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Steps to Enable DBT on Your Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li className="font-medium">Visit your bank branch with Aadhaar card</li>
                <li className="font-medium">Request for Aadhaar seeding/linking</li>
                <li className="font-medium">Fill the Aadhaar seeding form</li>
                <li className="font-medium">Verify your Aadhaar details</li>
                <li className="font-medium">Wait for confirmation (usually 2-3 working days)</li>
                <li className="font-medium">Verify DBT enablement through bank portal or mobile banking</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Issues and Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Payment Delays</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure your Aadhaar is properly seeded and details match across all documents
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Rejection of Scholarship</h4>
                  <p className="text-sm text-muted-foreground">
                    Verify that your bank account is DBT-enabled and not just Aadhaar-linked
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Wrong Account Details</h4>
                  <p className="text-sm text-muted-foreground">
                    Double-check your bank account number and IFSC code in scholarship applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 pt-4">
            <Link to="/setup" className="flex-1">
              <Button className="w-full" size="lg">
                Setup Your Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const scholarshipSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Phone must be 10 digits").optional().or(z.literal("")),
  aadhaarNumber: z.string().trim().regex(/^[0-9]{12}$/, "Aadhaar must be 12 digits").optional().or(z.literal("")),
  bankAccountNumber: z.string().trim().min(8, "Invalid account number").max(18, "Invalid account number").optional().or(z.literal("")),
  ifscCode: z.string().trim().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code").optional().or(z.literal("")),
  scholarshipType: z.string().trim().max(100).optional().or(z.literal("")),
});

const Setup = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhaarNumber: "",
    bankAccountNumber: "",
    ifscCode: "",
    scholarshipType: "",
    isDbtEnabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = scholarshipSchema.parse(formData);

      // Insert into Supabase
      const { error } = await supabase.from("scholarship_submissions").insert([
        {
          full_name: validatedData.fullName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          aadhaar_number: validatedData.aadhaarNumber || null,
          bank_account_number: validatedData.bankAccountNumber || null,
          ifsc_code: validatedData.ifscCode || null,
          scholarship_type: validatedData.scholarshipType || null,
          is_dbt_enabled: formData.isDbtEnabled,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your scholarship information has been submitted successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        aadhaarNumber: "",
        bankAccountNumber: "",
        ifscCode: "",
        scholarshipType: "",
        isDbtEnabled: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit form. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Setup Your Scholarship Account</CardTitle>
            <CardDescription>
              Provide your details to ensure smooth scholarship disbursement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleInputChange}
                  placeholder="12-digit Aadhaar number"
                  maxLength={12}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
                <Input
                  id="bankAccountNumber"
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleInputChange}
                  placeholder="Your bank account number"
                  maxLength={18}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  placeholder="e.g., SBIN0001234"
                  maxLength={11}
                  style={{ textTransform: "uppercase" }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scholarshipType">Scholarship Type</Label>
                <Input
                  id="scholarshipType"
                  name="scholarshipType"
                  value={formData.scholarshipType}
                  onChange={handleInputChange}
                  placeholder="e.g., Pre-Matric, Post-Matric"
                  maxLength={100}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isDbtEnabled"
                  checked={formData.isDbtEnabled}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, isDbtEnabled: checked as boolean }))
                  }
                />
                <Label htmlFor="isDbtEnabled" className="font-normal cursor-pointer">
                  My bank account is DBT-enabled
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Setup;

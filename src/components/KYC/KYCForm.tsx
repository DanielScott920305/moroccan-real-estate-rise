
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const KYCForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    nationality: "",
    idType: "passport",
    idNumber: "",
    phoneNumber: "",
    
    // Address Information
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Morocco",
    
    // Investment Profile
    employmentStatus: "",
    occupation: "",
    annualIncome: "",
    sourceOfFunds: "",
    investmentGoals: "",
    investmentExperience: "",
    riskTolerance: "",
    
    // Document Upload
    idDocument: null,
    proofOfAddress: null,
    
    // Declarations
    isPEP: false,
    isSanctioned: false,
    isCompliant: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "KYC Submission Successful",
        description: "Your KYC information has been submitted for review. We'll notify you once the verification is complete.",
        duration: 5000,
      });
      setIsLoading(false);
    }, 2000);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-morocco-blue">Personal Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Legal Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="idType">ID Document Type</Label>
              <Select 
                value={formData.idType} 
                onValueChange={(value) => handleSelectChange("idType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select ID Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="national_id">National ID Card</SelectItem>
                  <SelectItem value="drivers_license">Driver's License</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="+212..."
              />
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={nextStep} className="bg-morocco-blue hover:bg-morocco-lightBlue">
                Next: Address Information
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-morocco-blue">Address Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="province">Province/Region</Label>
              <Input
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select 
                value={formData.country} 
                onValueChange={(value) => handleSelectChange("country", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morocco">Morocco</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Spain">Spain</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
              <Button onClick={nextStep} className="bg-morocco-blue hover:bg-morocco-lightBlue">
                Next: Investment Profile
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-morocco-blue">Investment Profile</h2>
            
            <div className="space-y-2">
              <Label htmlFor="employmentStatus">Employment Status</Label>
              <Select 
                value={formData.employmentStatus || "select"} 
                onValueChange={(value) => handleSelectChange("employmentStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Employment Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select" disabled>Select Employment Status</SelectItem>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="self_employed">Self-Employed</SelectItem>
                  <SelectItem value="business_owner">Business Owner</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="annualIncome">Annual Income (MAD)</Label>
              <Select 
                value={formData.annualIncome || "select"} 
                onValueChange={(value) => handleSelectChange("annualIncome", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Annual Income Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select" disabled>Select Annual Income Range</SelectItem>
                  <SelectItem value="under_100k">Under 100,000</SelectItem>
                  <SelectItem value="100k_300k">100,000 - 300,000</SelectItem>
                  <SelectItem value="300k_500k">300,000 - 500,000</SelectItem>
                  <SelectItem value="500k_1m">500,000 - 1,000,000</SelectItem>
                  <SelectItem value="above_1m">Above 1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sourceOfFunds">Source of Funds</Label>
              <Select 
                value={formData.sourceOfFunds || "select"} 
                onValueChange={(value) => handleSelectChange("sourceOfFunds", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Source of Funds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select" disabled>Select Source of Funds</SelectItem>
                  <SelectItem value="salary">Salary/Employment</SelectItem>
                  <SelectItem value="business">Business Income</SelectItem>
                  <SelectItem value="investments">Investment Returns</SelectItem>
                  <SelectItem value="inheritance">Inheritance</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investmentGoals">Investment Goals</Label>
              <Select 
                value={formData.investmentGoals || "select"} 
                onValueChange={(value) => handleSelectChange("investmentGoals", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Investment Goals" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select" disabled>Select Investment Goals</SelectItem>
                  <SelectItem value="capital_growth">Capital Growth</SelectItem>
                  <SelectItem value="regular_income">Regular Income</SelectItem>
                  <SelectItem value="portfolio_diversification">Portfolio Diversification</SelectItem>
                  <SelectItem value="retirement">Retirement Planning</SelectItem>
                  <SelectItem value="wealth_preservation">Wealth Preservation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investmentExperience">Investment Experience</Label>
              <Select 
                value={formData.investmentExperience || "select"} 
                onValueChange={(value) => handleSelectChange("investmentExperience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select" disabled>Select Experience Level</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="limited">Limited (1-2 years)</SelectItem>
                  <SelectItem value="moderate">Moderate (3-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
              <Button onClick={nextStep} className="bg-morocco-blue hover:bg-morocco-lightBlue">
                Next: Document Upload
              </Button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-morocco-blue">Document Verification</h2>
            <p className="text-sm text-gray-600">Please upload clear, color scans or photos of the following documents:</p>
            
            <div className="space-y-2 border rounded-md p-4 bg-gray-50">
              <Label htmlFor="idDocument" className="block font-medium mb-2">
                Government-Issued ID Document
              </Label>
              <p className="text-sm text-gray-500 mb-2">
                Upload a scan of your passport, national ID card, or driver's license (front and back).
              </p>
              <Input
                id="idDocument"
                type="file"
                accept="image/*, application/pdf"
                className="cursor-pointer"
              />
            </div>
            
            <div className="space-y-2 border rounded-md p-4 bg-gray-50">
              <Label htmlFor="proofOfAddress" className="block font-medium mb-2">
                Proof of Address
              </Label>
              <p className="text-sm text-gray-500 mb-2">
                Upload a recent utility bill, bank statement, or official correspondence showing your name and address (no older than 3 months).
              </p>
              <Input
                id="proofOfAddress"
                type="file"
                accept="image/*, application/pdf"
                className="cursor-pointer"
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
              <Button onClick={nextStep} className="bg-morocco-blue hover:bg-morocco-lightBlue">
                Next: Declarations
              </Button>
            </div>
          </div>
        );
      
      case 5:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-morocco-blue">Declarations & Submission</h2>
            
            <div className="space-y-4 border rounded-md p-4 bg-gray-50">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="isPEP"
                  checked={formData.isPEP}
                  onCheckedChange={(checked) => handleCheckboxChange("isPEP", !!checked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isPEP"
                    className="text-sm text-gray-700 leading-tight"
                  >
                    I am a Politically Exposed Person (PEP) or related to a PEP.
                  </label>
                  <p className="text-xs text-gray-500">
                    A PEP is an individual who is or has been entrusted with prominent public functions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="isSanctioned"
                  checked={formData.isSanctioned}
                  onCheckedChange={(checked) => handleCheckboxChange("isSanctioned", !!checked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isSanctioned"
                    className="text-sm text-gray-700 leading-tight"
                  >
                    I am subject to sanctions or other legal restrictions.
                  </label>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="isCompliant"
                  checked={formData.isCompliant}
                  onCheckedChange={(checked) => handleCheckboxChange("isCompliant", !!checked)}
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isCompliant"
                    className="text-sm text-gray-700 leading-tight"
                  >
                    I hereby declare that all information provided in this form and the accompanying documents is accurate, complete, and true to the best of my knowledge.
                  </label>
                  <p className="text-xs text-gray-500">
                    I understand that providing false information may result in my account being rejected or closed, and may have legal consequences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="additionalComments">Additional Comments (Optional)</Label>
              <Textarea
                id="additionalComments"
                name="additionalComments"
                placeholder="Any additional information you'd like us to know..."
                rows={3}
              />
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800 mt-6">
              <p className="font-medium">What happens next?</p>
              <ol className="mt-2 ml-4 list-decimal space-y-1">
                <li>Our compliance team will review your application within 1-3 business days.</li>
                <li>You may be contacted for additional verification if needed.</li>
                <li>Once verified, you'll receive full access to all investment features.</li>
              </ol>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
              <Button
                type="submit"
                className="bg-morocco-blue hover:bg-morocco-lightBlue"
                disabled={isLoading || !formData.isCompliant}
              >
                {isLoading ? "Submitting..." : "Submit KYC Application"}
              </Button>
            </div>
          </form>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="overflow-hidden bg-gray-200 rounded-full h-2">
          <div
            className="bg-morocco-blue h-2 rounded-full transition-all"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <div className={step >= 1 ? "text-morocco-blue font-medium" : ""}>Personal</div>
          <div className={step >= 2 ? "text-morocco-blue font-medium" : ""}>Address</div>
          <div className={step >= 3 ? "text-morocco-blue font-medium" : ""}>Profile</div>
          <div className={step >= 4 ? "text-morocco-blue font-medium" : ""}>Documents</div>
          <div className={step >= 5 ? "text-morocco-blue font-medium" : ""}>Submit</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        {renderStep()}
      </div>
    </div>
  );
};

export default KYCForm;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import KYCForm from "@/components/KYC/KYCForm";
import { Button } from "@/components/ui/button";

const KYC = () => {
  // Set document title
  useEffect(() => {
    document.title = "KYC Verification | Moroccan Real Estate Rise";
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* KYC Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-morocco-blue mb-4">KYC Verification</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To comply with regulations and ensure the security of our platform, we need to verify your identity. Please complete the form below with accurate information.
          </p>
        </div>
        
        <KYCForm />
      </div>
    </Layout>
  );
};

export default KYC;

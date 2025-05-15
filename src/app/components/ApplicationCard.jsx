"use client";
import LoanForm from "@/app/components/LoanForm";

const ApplicationCard = () => {
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("fullName", values.fullName);

    values.documents.forEach((file, index) => {
      formData.append("documents", file);
    });

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <>
      <LoanForm onSubmit={handleSubmit} />
      <div className="mt-10 text-center text-sm text-[#718096] italic">
        <p>🔒 256-bit SSL encryption · GDPR compliant</p>
      </div>
    </>
  );
};

export default ApplicationCard;

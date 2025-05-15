import LoanForm from '../components/LoanForm';
import { submitApplication } from '../utils/api';

export default function Home() {
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append('application', JSON.stringify(values));
      values.documents.forEach(file => formData.append('documents', file));

      const response = await submitApplication(formData);
      window.location.href = `/status/${response.applicationId}`;
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Loan Application
        </h1>
        <LoanForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
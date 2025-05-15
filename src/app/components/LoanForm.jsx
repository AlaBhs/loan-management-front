"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import DocumentUploader from "./DocumentUploader";

const colors = {
  primary: "#2A2D4C",
  secondary: "#4A90E2",
  accent: "#4ECDC4",
  background: "#F8F9FF",
  text: "#2D3748",
  lightText: "#718096",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  documents: Yup.array().min(1, "At least one document is required"),
});

export default function LoanForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      documents: [],
    },
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-2xl">
      <div className="space-y-10 bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-[#f0f4ff]">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4ECDC4] to-[#4A90E2]"></div>

        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-base font-semibold text-[#2A2D4C] mb-1 ml-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            {...formik.getFieldProps("fullName")}
            className="block w-full rounded-xl border border-[#E2E8F0] 
              focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/40 
              p-4 text-[#2D3748] bg-[#F8F9FF] transition-all
              placeholder-[#A0AEC0] hover:border-[#4ECDC4]/50"
            placeholder="Johnathan Doe"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="mt-2 text-sm text-[#E53E3E] font-medium">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        {/* Document Upload */}
        <div className="space-y-2">
          <DocumentUploader
            onFilesSelected={(files) =>
              formik.setFieldValue("documents", files)
            }
          />

          {/* Display uploaded document names */}
          {formik.values.documents.length > 0 && (
            <ul className="mt-2 list-disc list-inside text-sm text-[#2D3748]">
              {formik.values.documents.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}

          {formik.touched.documents && formik.errors.documents && (
            <p className="mt-2 text-sm text-[#E53E3E] font-medium">
              {formik.errors.documents}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#4ECDC4] hover:bg-[#3DA89F] text-white 
              font-semibold py-4 px-6 rounded-xl transition-all 
              duration-200 ease-in-out shadow-lg hover:shadow-xl
              focus:outline-none focus:ring-4 focus:ring-[#4ECDC4]/30 focus:ring-offset-2
              mt-6 text-lg"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
  );
}

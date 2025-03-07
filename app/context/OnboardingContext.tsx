"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure for form data
interface OnboardingData {
  firstName: string;
  lastName: string;
  location: string;
  title: string;
  company: string;
  email: string;
  phone: string;
}

// Define the context type, including step tracking
interface OnboardingContextType {
  step: number;
  setStep: (step: number) => void;
  data: OnboardingData;
  updateData: (newData: Partial<OnboardingData>) => void;
}

// Create the context with a default undefined value
const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

// Onboarding Provider Component
export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(1); // Step tracking
  const [data, setData] = useState<OnboardingData>({
    firstName: "",
    lastName: "",
    location: "",
    title: "",
    company: "",
    email: "",
    phone: "",
  });

  // Function to update form data while preserving previous values
  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <OnboardingContext.Provider value={{ step, setStep, data, updateData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

// Custom hook to use onboarding context
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};

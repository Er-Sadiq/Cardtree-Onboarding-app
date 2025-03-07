"use client";
import { useOnboarding } from "../context/OnboardingContext";

const steps = [
  { id: 1, label: "About" },
  { id: 2, label: "Contact Info" },
  { id: 3, label: "Template + AI" },
];

const ProgressBar = () => {
  const { step } = useOnboarding();

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 py-2">
      {steps.map((s, index) => (
        <div key={s.id} className="flex items-center">
         
          <div className="flex flex-col items-center">
            <div
              className={`h-6 w-6 md:h-5 md:w-5 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                step >= s.id ? "bg-cyan-400 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              {s.id}
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-700">{s.label}</p>
          </div>
       
          {index < steps.length - 1 && (
            <i className="ri-arrow-right-s-line text-xl  mb-5 md:text-2xl text-gray-500 mx-2 md:mx-4"></i>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

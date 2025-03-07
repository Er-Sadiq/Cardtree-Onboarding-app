"use client";
import "remixicon/fonts/remixicon.css";

import ProgressBar from "@/app/components/ProgressBar";
import Image from "next/image";

interface TemplateCardProps {
  title: string;
  description: string;
  templateNumber: number;
  onSelect: (template: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, templateNumber, onSelect }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-base text-gray-700 font-light">Template {templateNumber} of 5</p>

      <div className="h-[163px] w-[277px] bg-gray-200 rounded-2xl mt-2 px-5 py-1 border flex justify-center items-center overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full h-8 bg-white rounded-2xl border shadow-lg"></div>
          <div className="flex flex-row gap-2 my-1">
            <div className="w-1/2 h-8 bg-white rounded-2xl border shadow-lg"></div>
            <div className="w-1/2 h-8 bg-white rounded-2xl border shadow-lg"></div>
          </div>
          <div className="w-1/2 h-full bg-white rounded-2xl border shadow-lg"></div>
          <div className="flex gap-2">
            <div className="w-4 h-full bg-white rounded-2xl border shadow-lg"></div>
            <div className="w-4 h-full bg-white rounded-2xl border shadow-lg"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 my-5">
        <button className="bg-black text-white px-4 py-2 rounded-2xl" onClick={() => onSelect(title)}>
          Use Template
        </button>
        <button className="bg-white text-black flex flex-row gap-2 px-4 py-2 rounded-2xl border">
          <i className="ri-eye-fill"></i> Preview
        </button>
      </div>

      <ul className="flex flex-col gap-2 text-blue-500">
        <li className="flex items-center gap-2"><i className="ri-user-3-fill"></i> About You</li>
        <li className="flex items-center gap-2"><i className="ri-chat-4-fill"></i> Contact Section</li>
        <li className="flex items-center gap-2"><i className="ri-building-fill"></i> About Current Company</li>
        <li className="flex items-center gap-2"><i className="ri-link"></i> Content - Link & File</li>
        <li className="flex items-center gap-2"><i className="ri-image-fill"></i> Gallery - Video, Image & GIF</li>
      </ul>
    </div>
  );
};

export default function Step3() {
  const handleTemplateSelection = (template: string) => {
    console.log(`User selected template: ${template}`);
  };

  return (
    <div className="flex flex-col items-center px-8">
      <Image
        src="https://framerusercontent.com/images/DCz0sPymnf89vSkArXPqS5Ii04k.svg?scale-down-to=512"
        alt="Logo"
        width={180}
        height={160}
        className="object-contain h-14 mr-auto my-8"
      />
      <h1 className="text-3xl font-bold mb-8">Choose a Template</h1>

      <div className="flex flex-row gap-8 justify-between w-1/2 my-5">
        <TemplateCard title="Full Story" description="Template 1 of 5" templateNumber={1} onSelect={handleTemplateSelection} />
        <TemplateCard title="Big Picture" description="Template 2 of 5" templateNumber={2} onSelect={handleTemplateSelection} />
      </div>
    </div>
  );
}
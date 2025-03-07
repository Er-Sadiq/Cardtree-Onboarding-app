"use client";

import Image from "next/image";
import ProgressBar from "@/app/components/ProgressBar";
import { useOnboarding } from "../../context/OnboardingContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  phone?: string;
}

export default function Step2() {
  const { data, updateData } = useOnboarding();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: data,
  });

  const onSubmit = (formData: FormData) => {
    updateData(formData);
    setTimeout(() => router.push("/onboarding/step3"), 0); // Small delay to avoid mismatch
  };
  
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-full md:w-1/2 h-screen flex flex-col shadow-xl rounded-r-4xl bg-white px-10 md:px-8 py-4 md:py-2 md:relative">
        <img
          src="https://framerusercontent.com/images/DCz0sPymnf89vSkArXPqS5Ii04k.svg?scale-down-to=512"
          alt="Logo"
          className="object-contain h-14 mr-auto mb-6"
        />
  
        <ProgressBar />

        
       
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-32 my-5">
        <div className="flex flex-col mt-4 mb-8">
          <h1 className="text-xl font-bold">How can your audience connect with you?</h1>
          <p className="font-light text-sm">You can customize the details later.</p>
        </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="block font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600 transition duration-300 w-full mt-4"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 min-h-screen justify-center items-center bg-gray-100 rounded-l-4xl md:ml-auto">
        <Image
          src="/Right.png"
          alt="Right Section Image"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
}
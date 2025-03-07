"use client";

import ProgressBar from "@/app/components/ProgressBar";
import { useOnboarding } from "../../context/OnboardingContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img from "../../../public/Right.png";
import { useForm, SubmitHandler } from "react-hook-form";

import "../../globals.css";

interface FormDataType {
  firstName: string;
  lastName: string;
  title?: string;
  company?: string;
  location?: string;
}

export default function Step1() {
  const { data, updateData } = useOnboarding();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<FormDataType> = (formData) => {
    updateData(formData);
    router.push("/onboarding/step2");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-full md:w-1/2 h-full flex flex-col shadow-xl rounded-r-4xl self-start bg-white px-10 md:px-8 py-2 md:py-2 fixed md:relative left-0 top-0 md:max-w-lg md:max-w-none">
      <img
          src="https://framerusercontent.com/images/DCz0sPymnf89vSkArXPqS5Ii04k.svg?scale-down-to=512"
          alt="Logo"
          className="object-contain h-14 mr-auto mb-6 "
        />
  
        <ProgressBar />
    
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full px-28  overflow-hidden">
          <div>
          <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold">Bio Hero Details</h2>
          <p className="text-gray-600 mb-4 text-sm">We&apos;ll use this info to build your page.</p>
          </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="flex font-medium  ">
                    First Name <p className="text-red-600">*</p>
                  </label>
                  <input
                    id="firstName"
                    placeholder="First name"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full border p-2 rounded"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="flex font-medium">
                    Last Name <p className="text-red-600">*</p>
                  </label>
                  <input
                    id="lastName"
                    placeholder="Last name"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full border p-2 rounded"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="title" className="block font-medium">
                  Title
                </label>
                <input id="title" placeholder="Job title" {...register("title")} className="w-full border p-2 rounded" />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="block font-medium">
                  Company
                </label>
                <input id="company" placeholder="Company name" {...register("company")} className="w-full border p-2 rounded" />
              </div>

              <div className="space-y-1">
                <label htmlFor="location" className="block font-medium">
                  Location
                </label>
                <input id="location" placeholder="City, Country" {...register("location")} className="w-full border p-2 rounded" />
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white w-full my-4 py-2 rounded-3xl hover:bg-blue-600 transition-all">
              Continue
            </button>
          </div>
        </form>
      </div>

      <div className="hidden md:flex w-1/2 min-h-screen justify-center items-center bg-gray-100 md:ml-auto">
        <Image src={img} alt="Right Section Image" className="object-contain max-w-sm md:max-w-2xl" />
      </div>
    </div>
  );
}
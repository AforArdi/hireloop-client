"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Fieldset, TextField, Label, Input, Surface, Description } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log("Sign In Data:", data);
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    })
    if (res) {
      toast.success("Sign in successful! Redirecting...");
    }
    if (error) {
      toast.error(`${error.message}` || "Sign in failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white">
      <Surface className="w-full max-w-md bg-[#0A0A0C] border-white/10 rounded-2xl shadow-xl">
        <Form onSubmit={onSubmit} className="p-8">
          <Fieldset className="w-full">
            <div className="mb-6">
              <Fieldset.Legend className="text-2xl font-bold text-white mb-2">Welcome Back</Fieldset.Legend>
              <Description className="text-gray-400">Sign in to continue to HireLoop.</Description>
            </div>

            <Fieldset.Group className="flex flex-col gap-5">
              <TextField isRequired name="email" type="email">
                <Label className="text-sm font-medium text-gray-300 mb-1">Email Address</Label>
                <Input placeholder="you@example.com" className="bg-[#121215] border-white/10 text-white w-full rounded-lg p-3" />
              </TextField>

              <TextField isRequired name="password" type={isVisible ? "text" : "password"}>
                <Label className="text-sm font-medium text-gray-300 mb-1">Password</Label>
                <div className="relative">
                  <Input placeholder="••••••••" className="bg-[#121215] border-white/10 text-white w-full rounded-lg p-3 pr-10" />
                  <button type="button" onClick={toggleVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white flex items-center justify-center">
                    {isVisible ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </TextField>
            </Fieldset.Group>

            <Fieldset.Actions className="mt-8">
              <Button type="submit" className="w-full bg-[#5B4CFF] hover:bg-[#4b3ceb] text-white font-medium py-3 rounded-xl transition-colors">
                Sign In
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
        <p className="text-center pb-8 text-sm text-gray-400">
          Don't have an account? <Link href="/auth/signup" className="text-[#5B4CFF] hover:underline">Sign up</Link>
        </p>
      </Surface>
    </div>
  );
}
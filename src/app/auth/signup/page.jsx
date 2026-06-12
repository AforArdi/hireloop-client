"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Fieldset, TextField, Label, Input, Surface, Description, Select, ListBox } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash";

export default function SignUpPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log("Sign Up Data:", data);
    const { email, password, name, imageUrl, role } = data;
    const { data: res, error } = await authClient.signUp.email({
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
      image: imageUrl, // User image URL (optional)
      role, // user role
    });
    if (res) {
      toast.success("Sign up successful! Please sign in.");
      router.push("/auth/signin");
    }
    if (error) {
      toast.error(`${error.message}` || "Sign up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white pt-20">
      <Surface className="w-full max-w-md bg-[#0A0A0C] border-white/10 rounded-2xl shadow-xl">
        <Form onSubmit={onSubmit} className="p-8">
          <Fieldset className="w-full">
            <div className="mb-6">
              <Fieldset.Legend className="text-2xl font-bold text-white mb-2">Create an Account</Fieldset.Legend>
              <Description className="text-gray-400">Join HireLoop and find your next role.</Description>
            </div>

            <Fieldset.Group className="flex flex-col gap-5">
              <TextField isRequired name="name" type="text">
                <Label className="text-sm font-medium text-gray-300 mb-1">Full Name</Label>
                <Input placeholder="John Doe" className="bg-[#121215] border-white/10 text-white w-full rounded-lg p-3" />
              </TextField>

              <TextField isRequired name="email" type="email">
                <Label className="text-sm font-medium text-gray-300 mb-1">Email Address</Label>
                <Input placeholder="you@example.com" className="bg-[#121215] border-white/10 text-white w-full rounded-lg p-3" />
              </TextField>

              <TextField name="imageUrl" type="url">
                <Label className="text-sm font-medium text-gray-300 mb-1">Profile Image URL (Optional)</Label>
                <Input placeholder="https://example.com/avatar.jpg" className="bg-[#121215] border-white/10 text-white w-full rounded-lg p-3" />
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

              <Select name="role" defaultSelectedKey="seeker" className="flex flex-col">
                <Label className="text-sm font-medium text-gray-300 mb-1">Role</Label>
                <Select.Trigger className="bg-[#121215] border border-white/10 text-white w-full rounded-lg p-3 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#5B4CFF]/50 transition-shadow">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-[#1A1A1E] border border-white/10 text-white rounded-lg p-1 shadow-xl min-w-[var(--trigger-width)]">
                  <ListBox className="flex flex-col gap-1 outline-none">
                    <ListBox.Item id="seeker" textValue="Seeker" className="p-2 hover:bg-[#2A2A30] focus:bg-[#2A2A30] rounded-md cursor-pointer flex flex-col outline-none">
                      <Label className="font-medium text-sm text-white cursor-pointer">Seeker</Label>
                      <Description className="text-xs text-gray-400">Looking for a job</Description>
                    </ListBox.Item>
                    <ListBox.Item id="recruiter" textValue="Recruiter" className="p-2 hover:bg-[#2A2A30] focus:bg-[#2A2A30] rounded-md cursor-pointer flex flex-col outline-none">
                      <Label className="font-medium text-sm text-white cursor-pointer">Recruiter</Label>
                      <Description className="text-xs text-gray-400">Hiring candidates</Description>
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </Fieldset.Group>

            <Fieldset.Actions className="mt-8">
              <Button type="submit" className="w-full bg-[#5B4CFF] hover:bg-[#4b3ceb] text-white font-medium py-3 rounded-xl transition-colors">
                Sign Up
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
        <p className="text-center pb-8 text-sm text-gray-400">
          Already have an account? <Link href="/auth/signin" className="text-[#5B4CFF] hover:underline">Sign in</Link>
        </p>
      </Surface>
    </div>
  );
}
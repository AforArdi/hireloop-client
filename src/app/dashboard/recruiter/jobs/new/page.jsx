"use client";

import { Form, Fieldset, TextField, Select, ListBox, Button, Switch, Label, Input } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createJob } from "@/lib/actions/jobs";

// Form Helpers based on HeroUI / React Aria Anatomy
const FormInput = ({ name, label, placeholder, type = "text", isRequired = true, className = "" }) => (
    <TextField isRequired={isRequired} name={name} type={type} className={`flex flex-col gap-1.5 w-full ${className}`}>
        <Label className="text-sm font-medium text-gray-300">{label}</Label>
        <Input placeholder={placeholder} className="bg-[#18181B] border border-white/10 text-white w-full rounded-md px-3 h-[42px] focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 text-sm" />
    </TextField>
);

const FormSelect = ({ name, label, placeholder, options, onChange }) => (
    <Select name={name} className="flex flex-col gap-1.5 w-full" isRequired onChange={onChange}>
        <Label className="text-sm font-medium text-gray-300">{label}</Label>
        <Select.Trigger className="bg-[#18181B] border border-white/10 text-white w-full rounded-md px-3 flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-white/30 transition-all h-[42px] data-[placeholder]:text-gray-600 text-sm">
            <Select.Value placeholder={placeholder} />
            <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="bg-[#202024] border border-white/10 text-white rounded-lg p-1 shadow-2xl min-w-[var(--trigger-width)] z-50">
            <ListBox className="flex flex-col gap-1 outline-none">
                {options.map(opt => (
                    <ListBox.Item key={opt.id} id={opt.id} textValue={opt.label} className="p-2 hover:bg-[#303036] focus:bg-[#303036] rounded-md cursor-pointer flex flex-col outline-none">
                        <Label className="font-medium text-sm text-white cursor-pointer">{opt.label}</Label>
                    </ListBox.Item>
                ))}
            </ListBox>
        </Select.Popover>
    </Select>
);

// We'll use a normal textarea for simplicity to match standard HeroUI input styling
const FormTextarea = ({ name, label, placeholder, isRequired = true }) => (
    <TextField isRequired={isRequired} name={name} className="flex flex-col gap-1.5 w-full">
        <Label className="text-sm font-medium text-gray-300">{label}</Label>
        <textarea
            name={name}
            placeholder={placeholder}
            required={isRequired}
            className="bg-[#18181B] border border-white/10 text-white w-full rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all min-h-[120px] resize-y placeholder:text-gray-600 text-sm"
        />
    </TextField>
);

const AddJob = () => {
    const router = useRouter();
    const [isRemote, setIsRemote] = useState(false);

    // Dummy logic for company limits
    const company = {
        name: "TechFlow Inc.",
        status: "approved",
        activeJobs: 2,
        jobLimit: 10 // Growth plan
    };

    const canPost = company.status === "approved" && company.activeJobs < company.jobLimit;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!canPost) {
            toast.error("Company not approved or job limit reached.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Cast expected boolean values
        data.isRemote = isRemote;
        data.status = true; // Set active status as a boolean

        if (isRemote) {
            data.location = "Remote";
        }

        console.log("Job Data to Save:", data);

        toast.promise(
            new Promise(resolve => setTimeout(resolve, 1200)),
            {
                loading: 'Publishing job posting...',
                success: 'Job published successfully!',
                error: 'Failed to post job.',
            }
        ).then(() => {
            router.push('/dashboard/recruiter/jobs');
        });
        // console.log('Data to save', data);
        const res = await createJob(data);
        if (res?.insertedId) {
            e.target.reset();
            setIsRemote(false);
        } else {
            toast.error('Failed to post job.');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white tracking-tight mb-1.5">Post a Job</h1>
                    <p className="text-sm text-gray-400">Create a new job posting to find the best talent.</p>
                </div>
            </div>

            <Form onSubmit={onSubmit} className="flex flex-col gap-10">
                {/* Auto-filled Company Box */}
                <div className="bg-[#18181B] border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <p className="text-[13px] text-gray-400 mb-1">Posting on behalf of</p>
                        <p className="text-base font-medium text-white">{company.name}</p>
                    </div>
                    <div className="sm:text-right">
                        <p className="text-[13px] text-gray-400 mb-1">Plan Usage (Growth)</p>
                        <p className={`text-sm font-medium ${company.activeJobs >= company.jobLimit ? 'text-red-400' : 'text-emerald-400'}`}>
                            {company.activeJobs} of {company.jobLimit} Active Jobs
                        </p>
                    </div>
                </div>

                {!canPost && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
                        You cannot post a new job at this time. Please check your company approval status or upgrade your plan.
                    </div>
                )}

                {/* Job Info Section */}
                <Fieldset className="w-full flex flex-col gap-6">
                    <Fieldset.Legend className="text-lg font-medium text-white mb-2 pb-4 border-b border-white/10 w-full">Job Info</Fieldset.Legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <FormInput name="title" label="Job Title" placeholder="e.g. Senior Product Designer" />

                        <FormSelect
                            name="category"
                            label="Job Category"
                            placeholder="Select category"
                            options={[
                                { id: "engineering", label: "Engineering" },
                                { id: "design", label: "Design" },
                                { id: "marketing", label: "Marketing" },
                                { id: "sales", label: "Sales" },
                                { id: "product", label: "Product Management" },
                                { id: "hr", label: "Human Resources" },
                            ]}
                        />

                        <FormSelect
                            name="type"
                            label="Job Type"
                            placeholder="Select type"
                            options={[
                                { id: "full-time", label: "Full-time" },
                                { id: "part-time", label: "Part-time" },
                                { id: "contract", label: "Contract" },
                                { id: "internship", label: "Internship" },
                            ]}
                        />

                        <FormInput name="deadline" label="Application Deadline" type="date" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
                        <FormInput name="salaryMin" label="Min Salary" placeholder="e.g. 80,000" type="number" />
                        <FormInput name="salaryMax" label="Max Salary" placeholder="e.g. 120,000" type="number" />
                        <FormSelect
                            name="currency"
                            label="Currency"
                            placeholder="Select currency"
                            options={[
                                { id: "usd", label: "USD ($)" },
                                { id: "eur", label: "EUR (€)" },
                                { id: "gbp", label: "GBP (£)" },
                                { id: "cad", label: "CAD ($)" },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 w-full mt-2">
                        <div className="flex flex-col gap-3 w-full md:w-1/2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-300">Location</span>
                                <Switch
                                    isSelected={isRemote}
                                    onChange={(e) => setIsRemote(e?.target?.checked ?? e)}
                                    name="isRemoteToggle"
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <Switch.Control>
                                        <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Content>
                                        <Label className="text-sm text-gray-300 cursor-pointer">Fully Remote</Label>
                                    </Switch.Content>
                                </Switch>
                            </div>
                            {!isRemote && (
                                <TextField isRequired={true} name="location" aria-label="Location" className="flex flex-col w-full">
                                    <Input placeholder="e.g. San Francisco, CA" className="bg-[#18181B] border border-white/10 text-white w-full rounded-md px-3 h-[42px] focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 text-sm" />
                                </TextField>
                            )}
                        </div>
                    </div>
                </Fieldset>

                {/* Job Description Section */}
                <Fieldset className="w-full flex flex-col gap-6">
                    <Fieldset.Legend className="text-lg font-medium text-white mb-2 pb-4 border-b border-white/10 w-full">Job Description</Fieldset.Legend>

                    <FormTextarea
                        name="responsibilities"
                        label="Responsibilities"
                        placeholder="Detail the day-to-day tasks and responsibilities for this role..."
                    />

                    <FormTextarea
                        name="requirements"
                        label="Requirements"
                        placeholder="List the required skills, experience, and qualifications..."
                    />

                    <FormTextarea
                        name="benefits"
                        label="Benefits (Optional)"
                        placeholder="What perks and benefits does your company offer?..."
                        isRequired={false}
                    />
                </Fieldset>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 mt-4 pt-6 border-t border-white/10">
                    <Button
                        type="button"
                        onPress={() => router.back()}
                        className="bg-transparent border border-white/10 text-white hover:bg-[#202024] font-medium px-5 py-2 rounded-md transition-colors text-sm"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        isDisabled={!canPost}
                        className="bg-white text-black hover:bg-gray-200 font-medium px-5 py-2 rounded-md transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Publish Job
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddJob;
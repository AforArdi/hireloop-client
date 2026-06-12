"use client";

import { Modal, Button, TextField, Input, Select, ListBox, Label } from "@heroui/react";
import { useState } from "react";
import { FileArrowUp } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import Image from "next/image";
import { createCompany, handleImagebbUpload } from "@/lib/actions/companies";

const AddCompanyModal = ({ recruiter }) => {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const toastId = toast.loading("Registering company...");
        try {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            // Set default status pending admin approval
            data.status = "Pending";
            data.recruiterId = recruiter.id;

            // Upload image to ImageBB
            if (imageFile) {
                const imgData = new FormData();
                imgData.append("image", imageFile);
                const uploadRes = await handleImagebbUpload(imgData);
                if (uploadRes?.data?.url) {
                    data.logoUrl = uploadRes.data.url;
                }
            }

            // Save to Database
            const dbRes = await createCompany(data);

            if (dbRes?.acknowledged) {
                toast.success("Company registered successfully!", { id: toastId });
                // Refresh the page to show the new company
                window.location.reload();
            } else {
                throw new Error("Failed to save to database");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to register company.", { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal>
            <Button className="bg-white text-black font-medium px-6 py-2.5 rounded-md hover:bg-gray-200 transition-colors text-sm">
                Register your company
            </Button>
            <Modal.Backdrop className="bg-black/60 backdrop-blur-sm z-50">
                <Modal.Container>
                    <Modal.Dialog className="bg-[#18181B] border border-white/10 rounded-xl w-full max-w-2xl text-white shadow-2xl p-0 overflow-hidden">
                        <Modal.CloseTrigger className="absolute top-5 right-5 text-gray-400 hover:text-white z-50 transition-colors" />
                        <Modal.Header className="p-6 border-b border-white/10">
                            <Modal.Heading className="text-xl font-semibold tracking-tight">Register New Company</Modal.Heading>
                            <p className="text-sm text-gray-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <form id="add-company-form" onSubmit={onSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Company Name */}
                                    <TextField isRequired name="name" className="flex flex-col gap-1.5 w-full">
                                        <Label className="text-sm font-medium text-gray-300">Company Name</Label>
                                        <Input placeholder="e.g. Acme Corp" className="bg-[#202024] border border-white/10 text-white w-full rounded-md px-3 h-[42px] focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 text-sm" />
                                    </TextField>

                                    {/* Industry */}
                                    <Select name="industry" className="flex flex-col gap-1.5 w-full" isRequired>
                                        <Label className="text-sm font-medium text-gray-300">Industry / Category</Label>
                                        <Select.Trigger className="bg-[#202024] border border-white/10 text-white w-full rounded-md px-3 flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-white/30 transition-all h-[42px] data-[placeholder]:text-gray-600 text-sm">
                                            <Select.Value placeholder="Select industry" />
                                        </Select.Trigger>
                                        <Select.Popover className="bg-[#2A2A30] border border-white/10 text-white rounded-lg p-1 shadow-2xl min-w-[var(--trigger-width)] z-50">
                                            <ListBox className="flex flex-col gap-1 outline-none">
                                                {["Technology", "Healthcare", "Finance", "Education", "Retail"].map(opt => (
                                                    <ListBox.Item key={opt} id={opt} textValue={opt} className="px-3 py-2 text-sm rounded-md hover:bg-white/10 cursor-pointer outline-none transition-colors data-[selected=true]:bg-white/20">
                                                        {opt}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    {/* Website URL */}
                                    <TextField isRequired name="website" className="flex flex-col gap-1.5 w-full">
                                        <Label className="text-sm font-medium text-gray-300">Website URL</Label>
                                        <div className="flex h-[42px] rounded-md overflow-hidden border border-white/10 bg-[#202024] focus-within:ring-1 focus-within:ring-white/30 transition-all">
                                            <div className="flex items-center justify-center px-3 bg-[#2A2A30] text-gray-400 text-sm border-r border-white/10">
                                                https://
                                            </div>
                                            <Input placeholder="www.company.com" className="bg-transparent text-white w-full px-3 focus:outline-none placeholder:text-gray-600 text-sm" />
                                        </div>
                                    </TextField>

                                    {/* Location */}
                                    <TextField isRequired name="location" className="flex flex-col gap-1.5 w-full">
                                        <Label className="text-sm font-medium text-gray-300">Location</Label>
                                        <Input placeholder="City, Country" className="bg-[#202024] border border-white/10 text-white w-full rounded-md px-3 h-[42px] focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 text-sm" />
                                    </TextField>

                                    {/* Employee Count */}
                                    <Select name="employeeCount" className="flex flex-col gap-1.5 w-full" isRequired>
                                        <Label className="text-sm font-medium text-gray-300">Employee Count Range</Label>
                                        <Select.Trigger className="bg-[#202024] border border-white/10 text-white w-full rounded-md px-3 flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-white/30 transition-all h-[42px] data-[placeholder]:text-gray-600 text-sm">
                                            <Select.Value placeholder="Select range" />
                                        </Select.Trigger>
                                        <Select.Popover className="bg-[#2A2A30] border border-white/10 text-white rounded-lg p-1 shadow-2xl min-w-[var(--trigger-width)] z-50">
                                            <ListBox className="flex flex-col gap-1 outline-none">
                                                {["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"].map(opt => (
                                                    <ListBox.Item key={opt} id={opt} textValue={opt} className="px-3 py-2 text-sm rounded-md hover:bg-white/10 cursor-pointer outline-none transition-colors data-[selected=true]:bg-white/20">
                                                        {opt}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    {/* Company Logo */}
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <Label className="text-sm font-medium text-gray-300">Company Logo</Label>
                                        <div className="flex items-center gap-4">
                                            <label className="flex items-center justify-center w-[52px] h-[52px] bg-[#202024] border border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/5 transition-colors overflow-hidden group">
                                                <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleFileChange} />
                                                {imagePreview ? (
                                                    <Image unoptimized src={imagePreview} width={52} height={52} alt="Preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <FileArrowUp className="text-gray-400 group-hover:text-white transition-colors" />
                                                )}
                                            </label>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-white">Upload image</span>
                                                <span className="text-xs text-gray-500">PNG, JPG up to 5MB</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brief Description */}
                                    <TextField isRequired name="description" className="flex flex-col gap-1.5 w-full md:col-span-2">
                                        <Label className="text-sm font-medium text-gray-300">Brief Description</Label>
                                        <textarea
                                            placeholder="Tell us about your company's mission and culture..."
                                            className="bg-[#202024] border border-white/10 text-white w-full rounded-md p-3 min-h-[100px] resize-y focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 text-sm"
                                        />
                                    </TextField>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer className="p-6 border-t border-white/10 flex items-center justify-end gap-3 bg-[#121215] rounded-b-xl">
                            <Button slot="close" type="button" className="bg-[#202024] text-white border border-white/10 px-5 py-2 font-medium rounded-md hover:bg-white/10 transition-colors text-sm">
                                Cancel
                            </Button>
                            <Button type="submit" form="add-company-form" isDisabled={isSubmitting} className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                Register Company
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddCompanyModal;
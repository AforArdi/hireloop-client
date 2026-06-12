'use server'

import { serverMutation, serverQuery } from "../core/server";

export const createCompany = async (newCompanyData) => {
    return serverMutation('companies', newCompanyData)
}

export const handleImagebbUpload = async (formData) => {
    try {
        const apiKey = process.env.IMAGE_BB_API;
        if (!apiKey) {
            throw new Error("IMAGE_BB_API key is not configured.");
        }

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            throw new Error(`ImageBB API error: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
};
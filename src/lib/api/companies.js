import { serverFetch } from "../core/server";

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`my/companies?recruiterId=${recruiterId}`)
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs = async (companyId, status) => {
    let url = `${baseUrl}/api/jobs?companyId=${companyId}`;
    if (status !== undefined && status !== "") {
        url += `&status=${status}`;
    }
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.json();
};
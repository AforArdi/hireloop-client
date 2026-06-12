"use client";

import { authClient } from "@/lib/auth-client"
import DashboardStats from "@/components/dashboard/DashboardStats";
import { File, Persons, Thunderbolt, Check } from "@gravity-ui/icons";

const RecruiterHomePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return <div className="p-8 text-gray-400">Loading dashboard...</div>;
    }

    const user = session?.user;

    const dummyStats = [
        { icon: File, title: "Total Job Posts", value: "48" },
        { icon: Persons, title: "Total Applicants", value: "1,284" },
        { icon: Thunderbolt, title: "Active Jobs", value: "18" },
        { icon: Check, title: "Jobs Closed", value: "32" },
    ];

    return (
        <div className="p-8 w-full max-w-7xl mx-auto flex flex-col gap-8">
            <div>
                <h1 className="text-[28px] font-semibold text-white tracking-tight">
                    Welcome back, {user?.name || 'Alex Sterling'}
                </h1>
            </div>

            <DashboardStats stats={dummyStats} />
        </div>
    );
};

export default RecruiterHomePage;
import AddCompanyModal from "@/components/recruiter/addCompanyModal";
import { Briefcase, House, Globe, LocationArrow, Person, Pencil } from "@gravity-ui/icons";
import { Chip, Button } from "@heroui/react";

const RecruiterCompanyProfile = ({ recruiter, recruiterCompany }) => {
    const companyData = recruiterCompany?.length > 0 ? recruiterCompany[0] : null;

    return (
        <div className="w-full h-full flex flex-col p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-semibold text-white">My Company</h1>
            </div>

            {!companyData ? (
                <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center mt-20">
                    {/* Illustration placeholder */}
                    <div className="relative mb-8">
                        <div className="w-48 h-48 bg-[#18181B] border border-white/5 rounded-[32px] flex items-center justify-center relative shadow-2xl">
                            <div className="w-24 h-5 bg-white/5 rounded absolute top-10 left-8"></div>
                            <div className="w-32 h-3 bg-white/5 rounded absolute top-20 left-8"></div>
                            <div className="w-28 h-3 bg-white/5 rounded absolute top-28 left-8"></div>
                            <div className="w-16 h-12 bg-white/5 rounded-xl absolute bottom-8 right-8"></div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-[6px] border-[#0A0A0C]">
                            <Briefcase className="text-black size-4" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">Company not registered yet</h2>
                    <p className="text-sm text-gray-400 mb-8 leading-relaxed px-4">
                        Set up your business profile to start posting high-performance job listings and manage your talent loop.
                    </p>

                    <div className="flex items-center gap-4">
                        <AddCompanyModal recruiter={recruiter} />
                        <button className="bg-transparent text-white border border-white/10 font-medium px-6 py-2.5 rounded-md hover:bg-white/5 transition-colors text-sm">
                            View FAQ
                        </button>
                    </div>

                    <p className="text-[11px] text-gray-500 mt-16 font-medium">
                        Need specialized assistance? Contact our enterprise support team.
                    </p>
                </div>
            ) : (
                <div className="w-full max-w-4xl">
                    {/* Header Card */}
                    <div className="relative bg-[#121215] border border-white/5 rounded-2xl overflow-hidden shadow-2xl mb-6">
                        {/* Banner */}
                        <div className="h-32 w-full bg-gradient-to-r from-[#202024] to-[#1a1a1e] relative"></div>

                        {/* Profile Info */}
                        <div className="px-8 pb-8">
                            <div className="flex justify-between items-end -mt-12 mb-4">
                                {/* Logo */}
                                <div className="w-24 h-24 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-hidden relative shadow-xl z-10 flex items-center justify-center shrink-0">
                                    {companyData.logoUrl ? (
                                        <img src={companyData.logoUrl} alt={companyData.name} className="object-cover w-full h-full" />
                                    ) : (
                                        <House className="size-10 text-gray-500" />
                                    )}
                                </div>

                                {/* Edit Button */}
                                <Button size="sm" className="bg-[#202024] text-white border border-white/10 hover:bg-white/10 rounded-md font-medium px-4" startContent={<Pencil className="size-4" />}>
                                    Edit Profile
                                </Button>
                            </div>

                            <div className="flex flex-col gap-1.5 mt-2">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-semibold text-white tracking-tight">{companyData.name}</h2>
                                    <Chip
                                        size="sm"
                                        className={`${companyData.status === "Approved" ? "bg-emerald-500/10 text-emerald-500" : companyData.status === "Pending" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"} border-none font-medium text-[10px] uppercase tracking-wider px-2`}
                                    >
                                        {companyData.status || "Pending"}
                                    </Chip>
                                </div>
                                <p className="text-gray-400 text-sm">{companyData.industry}</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-[#121215] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <LocationArrow className="size-5 text-gray-400" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">Location</p>
                                <p className="text-sm text-white truncate">{companyData.location}</p>
                            </div>
                        </div>

                        <div className="bg-[#121215] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Globe className="size-5 text-gray-400" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">Website</p>
                                <a href={companyData.website.startsWith('http') ? companyData.website : `https://${companyData.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors truncate block">
                                    {companyData.website}
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#121215] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Person className="size-5 text-gray-400" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">Company Size</p>
                                <p className="text-sm text-white truncate">{companyData.employeeCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruiterCompanyProfile;
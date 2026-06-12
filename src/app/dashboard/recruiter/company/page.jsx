import AddCompanyModal from "@/components/recruiter/addCompanyModal";
import { Briefcase } from "@gravity-ui/icons";

const RecruiterCompanyPage = () => {
    return (
        <div className="w-full h-full flex flex-col p-6 md:p-8">
            <div className="flex items-center justify-between mb-auto">
                <h1 className="text-xl font-semibold text-white">My Company</h1>
            </div>

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
                    <AddCompanyModal />
                    <button className="bg-transparent text-white border border-white/10 font-medium px-6 py-2.5 rounded-md hover:bg-white/5 transition-colors text-sm">
                        View FAQ
                    </button>
                </div>

                <p className="text-[11px] text-gray-500 mt-16 font-medium">
                    Need specialized assistance? Contact our enterprise support team.
                </p>
            </div>
        </div>
    );
};

export default RecruiterCompanyPage;
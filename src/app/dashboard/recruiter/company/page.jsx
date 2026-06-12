import { getUserSession } from "@/lib/core/session";
import RecruiterCompanyProfile from "./RecruiterCompanyProfile";
import { getRecruiterCompany } from "@/lib/api/companies";

const CompanyPage = async () => {
    const user = await getUserSession();
    const company = await getRecruiterCompany(user?.id);
    // console.log(company);

    return (
        <div>
            <RecruiterCompanyProfile recruiter={user} recruiterCompany={company} />
        </div>
    );
};

export default CompanyPage;
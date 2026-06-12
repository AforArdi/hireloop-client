import { getUserSession } from "@/lib/core/session";
import RecruiterCompanyProfile from "./RecruiterCompanyProfile";

const CompanyPage = async () => {
    const user = await getUserSession();
    // console.log(user);

    return (
        <div>
            <RecruiterCompanyProfile recruiter={user} />
        </div>
    );
};

export default CompanyPage;
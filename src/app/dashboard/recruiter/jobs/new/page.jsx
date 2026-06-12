import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import PostJobForm from "./PostJobForm";

const PostJobPage = async () => {
    const companies = await getLoggedInRecruiterCompany();
    const company = companies?.length > 0 ? companies[0] : null;

    return (
        <div>
            <PostJobForm company={company} />
        </div>
    );
};

export default PostJobPage;
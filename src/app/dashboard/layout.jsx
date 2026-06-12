import DashboardSideBar from "../../components/dashboard/DashboardSideBar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-[#050505] text-white">
            <DashboardSideBar />
            <div className="flex-1 overflow-x-hidden">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
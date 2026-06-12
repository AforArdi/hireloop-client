import { Card } from "@heroui/react";

const StatCard = ({ icon: Icon, title, value }) => {
    return (
        <Card className="bg-[#121215] border border-white/10 shadow-none">
            <Card.Content className="p-5 flex flex-col gap-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400 font-medium">{title}</span>
                    <span className="text-[28px] font-bold text-white tracking-tight">{value}</span>
                </div>
            </Card.Content>
        </Card>
    );
};

export default StatCard;
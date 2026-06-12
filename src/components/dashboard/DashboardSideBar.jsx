"use client";

import { Drawer, Button, Avatar, Chip } from "@heroui/react";
import { Bars, Magnifier, Bell, Envelope, Person, Gear, House, LayoutTabs, Briefcase, LayoutList } from "@gravity-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: LayoutTabs, label: "Dashboard", href: "/dashboard/recruiter" },
    { icon: House, label: "My Company", href: "/dashboard/recruiter/company" },
    { icon: Briefcase, label: "Manage Jobs", href: "/dashboard/recruiter/jobs" },
    { icon: LayoutList, label: "Applications", href: "/dashboard/recruiter/applications" },
    { icon: Gear, label: "Settings", href: "/dashboard/recruiter/settings" },
];

const SidebarContent = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full w-full p-6">

            <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-white leading-tight">Alex Sterling</span>
                        <span className="text-xs text-gray-400">Recruiter</span>
                    </div>
                </div>
                <div className="flex w-fit">
                    <Chip size="sm" className="bg-white/10 text-[10px] text-gray-300 border-none font-medium px-2 rounded-md tracking-wide">PREMIUM ACCOUNT</Chip>
                </div>
            </div>

            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors relative ${isActive ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon className="size-5" />
                            {item.label}
                            {isActive && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-white rounded-l-full" />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default function DashboardSideBar() {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block h-screen sticky top-0 bg-[#0A0A0C] border-r border-white/10 w-64 z-10 shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile Drawer Toggle */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Drawer>
                    <Button isIconOnly variant="flat" className="bg-[#0A0A0C] text-white border border-white/10 shadow-lg">
                        <Bars />
                    </Button>
                    <Drawer.Backdrop>
                        <Drawer.Content placement="left" className="bg-[#0A0A0C] text-white m-0 rounded-none w-64 max-w-[80vw]">
                            <Drawer.Dialog className="p-0 m-0 overflow-y-auto">
                                <Drawer.CloseTrigger className="absolute top-4 right-4 z-50 text-white" />
                                <Drawer.Body className="p-0 m-0">
                                    <SidebarContent />
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </>
    );
}
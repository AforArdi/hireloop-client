"use client";

import { useState, useEffect } from "react";
import { Table, Chip, Button } from "@heroui/react";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterAllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // TODO need to add dynamic company id later
                const companyId = 123;
                const data = await getCompanyJobs(companyId);
                if (Array.isArray(data)) {
                    setJobs(data);
                } else {
                    setJobs([]);
                }
            } catch (error) {
                console.error("Failed to fetch jobs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const formatString = (str) => {
        if (!str) return "";
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    };

    return (
        <div className="w-full p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-white tracking-tight mb-1.5">Manage All Jobs</h1>
                <p className="text-sm text-gray-400">View, update, and manage your current job postings.</p>
            </div>

            {isLoading ? (
                <div className="text-white">Loading jobs...</div>
            ) : jobs.length === 0 ? (
                <div className="text-gray-400">No jobs found. Start by posting a new job!</div>
            ) : (
                <Table className="bg-[#18181B] border border-white/10 rounded-xl overflow-hidden w-full text-left">
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Jobs Table" className="w-full">
                            <Table.Header className="bg-[#202024] border-b border-white/10 text-gray-400 text-sm font-medium">
                                <Table.Column isRowHeader className="py-4 px-6 font-medium">Job Title</Table.Column>
                                <Table.Column className="py-4 px-6 font-medium">Type / Category</Table.Column>
                                <Table.Column className="py-4 px-6 font-medium">Location</Table.Column>
                                <Table.Column className="py-4 px-6 font-medium">Status</Table.Column>
                                <Table.Column className="py-4 px-6 font-medium">Actions</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {jobs.map((job) => (
                                    <Table.Row key={job._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <Table.Cell className="py-4 px-6">
                                            <div className="font-medium text-white">{job.title}</div>
                                        </Table.Cell>
                                        <Table.Cell className="py-4 px-6">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="font-medium text-white">{formatString(job.type)}</span>
                                                <span className="text-xs text-gray-400 capitalize">{job.category}</span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="py-4 px-6 text-gray-300">
                                            {job.location}
                                        </Table.Cell>
                                        <Table.Cell className="py-4 px-6">
                                            <Chip
                                                size="sm"
                                                className={job.status ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-gray-500/10 text-gray-500 border border-gray-500/20"}
                                            >
                                                {job.status ? "Active" : "Inactive"}
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <Button isIconOnly variant="light" size="sm" className="text-gray-400 hover:text-white min-w-8 w-8 h-8">
                                                    <Eye width={16} height={16} />
                                                </Button>
                                                <Button isIconOnly variant="light" size="sm" className="text-gray-400 hover:text-white min-w-8 w-8 h-8">
                                                    <Pencil width={16} height={16} />
                                                </Button>
                                                <Button isIconOnly variant="light" size="sm" className="text-red-400/80 hover:text-red-400 min-w-8 w-8 h-8">
                                                    <TrashBin width={16} height={16} />
                                                </Button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            )}
        </div>
    );
};

export default RecruiterAllJobs;
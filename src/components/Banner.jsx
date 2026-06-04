import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative w-full bg-[#050505] text-white pt-20 pb-24 overflow-hidden flex flex-col items-center">

            {/* Top Text Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider mb-8 shadow-sm backdrop-blur-sm">
                    <span className="text-orange-400">💼</span> 50,000+ NEW JOBS THIS MONTH
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Find Your Dream Job Today
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row w-full max-w-3xl border border-white/10 rounded-2xl bg-[#0F0F12] p-2 mb-8">
                    <div className="flex items-center flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-white/10">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Job title, skill or company" className="w-full bg-transparent text-white outline-none placeholder-gray-500" />
                    </div>
                    <div className="flex items-center flex-1 px-4 py-2">
                        <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input type="text" placeholder="Location or Remote" className="w-full bg-transparent text-white outline-none placeholder-gray-500" />
                    </div>
                    <button className="bg-[#5B4CFF] hover:bg-[#4b3ceb] transition-colors p-4 rounded-xl flex items-center justify-center mt-2 md:mt-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Trending Tags */}
                <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400">
                    <span>Trending Position</span>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">Product Designer</span>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">AI Engineering</span>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">Dev-ops Engineer</span>
                </div>
            </div>

            {/* Globe & Stats Section */}
            <div className="relative w-full max-w-6xl mx-auto mt-24 px-6 flex flex-col items-center">
                {/* Globe Image - Positioned Absolutely Behind Content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[60%] w-[150%] sm:w-[120%] md:w-250 -z-10 flex justify-center pointer-events-none">
                    <Image
                        src="/images/globe.png"
                        alt="World Globe Background"
                        width={1200}
                        height={1200}
                        priority
                        className="w-full h-auto object-contain opacity-90 drop-shadow-[0_0_100px_rgba(91,76,255,0.2)]"
                    />
                </div>

                <h2 className="text-3xl md:text-4xl font-medium text-center mb-16 max-w-2xl">
                    Assisting over <span className="font-semibold text-white">15,000 job seekers</span> find their dream positions.
                </h2>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">

                    {/* Card 1 */}
                    <div className="bg-[#0A0A0C]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 transition-transform">
                        <svg className="w-6 h-6 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">50K</p>
                            <p className="text-sm text-gray-400">Active Jobs</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0A0A0C]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 transition-transform">
                        <svg className="w-6 h-6 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">12K</p>
                            <p className="text-sm text-gray-400">Companies</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0A0A0C]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 transition-transform">
                        <svg className="w-6 h-6 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z M10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">2M</p>
                            <p className="text-sm text-gray-400">Job Seekers</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0A0A0C]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 transition-transform">
                        <svg className="w-6 h-6 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <div>
                            <p className="text-4xl font-bold text-white mb-1">97%</p>
                            <p className="text-sm text-gray-400">Satisfaction Rate</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
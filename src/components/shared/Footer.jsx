import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer 
      className="bg-[#050505] text-white pt-24 pb-8 border-t border-white/5 relative bg-no-repeat bg-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <img src="/images/logo.png" alt="HireLoop" className="h-10 mb-6" />
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5B4CFF] font-medium mb-2">Product</h3>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Job discovery</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Worker AI</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Companies</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Salary data</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5B4CFF] font-medium mb-2">Navigations</h3>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Help center</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Career library</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5B4CFF] font-medium mb-2">Resources</h3>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Brand Guideline</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Newsroom</Link>
          </div>
        </div>

        {/* Bottom Section - Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5B4CFF] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#5B4CFF] flex items-center justify-center text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5B4CFF] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-gray-500">
            <p>Copyright 2024 — Programming Hero</p>
            <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms & Policy</Link>
              <span>-</span>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Guideline</Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
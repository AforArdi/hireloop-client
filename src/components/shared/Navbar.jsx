"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  const user = session?.user;

  const handleSignOut = async()=>{
    await authClient.signOut();
  }

  // console.log(user);

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/images/logo.png" alt="HireLoop" className="h-8 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link href="/jobs" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
              Company
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/signin" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Sign In
          </Link>
          <Link href="/signup">
            <Button className="bg-[#5B4CFF] text-white font-medium px-6 py-2 rounded-xl hover:bg-[#4b3ceb] transition-all">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 md:hidden bg-[#0a0a0a]">
          <ul className="flex flex-col gap-2 p-4">
            <li><Link href="/jobs" className="block py-2 text-white">Browse Jobs</Link></li>
            <li><Link href="#" className="block py-2 text-white">Company</Link></li>
            <li><Link href="#" className="block py-2 text-white">Pricing</Link></li>
            <li className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <Link href="/signin" className="block py-2 text-white text-center">Sign In</Link>
              <Button className="w-full bg-[#5B4CFF] text-white rounded-xl">Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
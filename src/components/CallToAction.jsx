import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-32 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Your next role is <br /> already looking for you
        </h2>
        
        <p className="text-gray-400 mb-10">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/signup">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Create a free account
            </button>
          </Link>
          <Link href="#pricing">
            <button className="bg-[#0A0A0C] border border-white/10 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto">
              View pricing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
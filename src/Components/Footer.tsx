const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-8 bg-base-100">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between mb-10 md:mb-16">
        
        {/* === Brand Block === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-xs">
          
          <a className="flex items-center justify-center md:justify-start cursor-pointer text-2xl mb-4">
            <div className="w-10 h-10 rounded bg_brand_gradient flex items-center justify-center text-white font-bold text-lg mr-2">
              DS
            </div>
            <span className="font-bold text-[#0F172A]">
              Dev<span className="text_brand_gradient">Stack</span>
            </span>
          </a>
          
          <p className="text-[#64748B] text-sm mb-6 max-w-sm md:max-w-full">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          
          {/* Social Links  */}
          <div className="flex items-center justify-center md:justify-start gap-3 w-full border-t border-b border-base-200 md:border-none py-4 md:py-0">
            <a href="#" className="text-sm font-medium text-[#64748B] hover:text-pink-500 transition-colors">
              GitHub
            </a>
            <span className="text-[#64748B] text-xs md:hidden">•</span>
            <a href="#" className="text-sm font-medium text-[#64748B] hover:text-pink-500 transition-colors">
              Twitter
            </a>
            <span className="text-[#64748B] text-xs md:hidden">•</span>
            <a href="#" className="text-sm font-medium text-[#64748B] hover:text-pink-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* === Link Groups === */}
        <div className="hidden md:flex gap-12 md:gap-24 flex-wrap justify-center md:justify-start mt-6 md:mt-0 text-center md:text-left">
          
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-[#0F172A] uppercase text-sm mb-1">Product</h6>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Home</a>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Technologies</a>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Projects</a>
          </div> 
          
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-[#0F172A] uppercase text-sm mb-1">Company</h6>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">About</a>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Contact</a>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Careers</a>
          </div> 
          
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-[#0F172A] uppercase text-sm mb-1">Legal</h6>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Privacy Policy</a>
            <a href="#" className="text-sm text-[#64748B] hover:text-pink-500">Terms of Service</a>
          </div>

        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-base-200 text-center">
        <p className="text-xs text-[#64748B]">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="text-xs text-[#64748B] hover:text-pink-500">Privacy</a>
          <a href="#" className="text-xs text-[#64748B] hover:text-pink-500">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


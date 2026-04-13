import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { AmenxSparkle } from "../ui/amenx-sparkle";

export default function FooterNavigation() {
  const navigationLinks = [
    { id: "01", label: "Education", href: "#education" },
    { id: "02", label: "Skills", href: "#skills" },
    { id: "03", label: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    {
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/Ammu108",
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aman-kumar-5464242b8/",
    },
    {
      icon: IconBrandTwitter,
      label: "Twitter",
      href: "https://x.com/AmenX_108",
    },
  ];

  return (
    <div
      id="contact"
      className="text-white flex flex-col items-center justify-center px-4 py-8 md:py-12"
    >
      <div className="max-w-7xl w-full">
        {/* Logo/Title */}
        <div className="text-center sm:mb-20 md:mb-24">
          <AmenxSparkle />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* Navigation Section */}
          <div className="flex flex-col">
            <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              Navigation
            </p>
            <div className="space-y-4 sm:space-y-5">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center gap-3 sm:gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm">
                    {link.id}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col">
            <p className="text-purple-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8 flex items-center gap-2">
              <span className="text-purple-400">✱</span>
              Socials
            </p>
            <div className="space-y-4 sm:space-y-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Status Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="border border-cyan-500/30 rounded-lg p-5 sm:p-6 md:p-8 bg-slate-800/30 backdrop-blur-sm space-y-4 sm:space-y-5">
              {/* Location */}
              <div className="flex items-center justify-between border-slate-700/50 pt-4 sm:pt-5">
                <span className="text-gray-400 text-xs sm:text-sm font-mono">
                  Location:
                </span>
                <span className="text-white text-sm sm:text-base font-mono font-semibold">
                  Remote / Worldwide
                </span>
              </div>

              {/* System Status */}
              <div className="flex items-center justify-between border-t border-slate-700/50 pt-4 sm:pt-5">
                <span className="text-gray-400 text-xs sm:text-sm font-mono">
                  System Status:
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm sm:text-base font-mono font-semibold">
                    Optimal
                  </span>
                </div>
              </div>

              {/* Email Link */}
              <a
                href="mailto:kumaramenx108@gmail.com"
                className="text-[#00CECE] text-md font-medium sm:text-lg cursor-pointer hover:text-cyan-500 font-mono border-t border-slate-700/50 pt-4 sm:pt-5 flex items-center gap-2 transition-colors duration-200"
              >
                <span>🔗</span>
                <span>kumaramenx108@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

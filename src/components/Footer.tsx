import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Zhicheng Li. Built with Next.js &
            Framer Motion.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Designed with ♥ in Gainesville, FL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

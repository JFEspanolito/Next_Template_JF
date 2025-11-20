import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Footer = () => {
  const year = new Date().getFullYear();
  const supportEmail = config?.resend?.supportEmail || null;

  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* Brand */}
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src="/icon.webp"
                alt={`${config.appName} logo`}
                priority
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            {config.appDescription && (
              <p className="mt-3 text-sm text-base-content/80">
                {config.appDescription}
              </p>
            )}

            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {year} — All rights reserved
            </p>
          </div>

          {/* Columns */}
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            {/* Links */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {supportEmail && (
                  <a
                    href={`mailto:${supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link>
                <Link href="/blog" className="link link-hover">
                  Blog
                </Link>
                <Link href="/affiliates" className="link link-hover">
                  Affiliates
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
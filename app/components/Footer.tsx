import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div>
      <div>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="flex items-center gap-2 mx-auto w-max">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          <a
            href="mailto:gheerey12@gmail.com?subject=Hello&body=Hi%20there"
            className="hover:underline"
          >
            gheerey12@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Gurkirt Heerey. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link href="https://github.com/gurkirtheerey">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gheerey/">LinkedIn</Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="/gurkirt_heerey_resume.pdf"
              download="Gurkirt-Heerey-Resume.pdf"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link href="/proof-of-consent">Proof of Consent</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

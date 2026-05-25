import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  compact?: boolean;
  footer?: boolean;
  onClick?: () => void;
};

export function BrandLogo({ compact = false, footer = false, onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center transition duration-300 hover:drop-shadow-[0_0_18px_rgba(200,155,60,0.38)] ${
        footer ? "max-w-[250px]" : compact ? "max-w-[150px] sm:max-w-[168px]" : "max-w-[220px] sm:max-w-[250px]"
      }`}
      aria-label={`${siteConfig.name} homepage`}
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={720}
        height={220}
        priority={!footer}
        sizes={footer ? "250px" : "(max-width: 640px) 196px, 250px"}
        className="h-auto w-full transition duration-300 group-hover:scale-[1.015]"
      />
    </Link>
  );
}

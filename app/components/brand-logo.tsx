import type { SimpleIcon } from "simple-icons";

type BrandLogoProps = {
  icon: SimpleIcon;
};

export function BrandLogo({ icon }: BrandLogoProps) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      style={{ color: `#${icon.hex}` }}
    >
      <title>{icon.title}</title>
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

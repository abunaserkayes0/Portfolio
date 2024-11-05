import Link from "next/link";
import { cva } from "class-variance-authority";

const buttonStyles = cva("button", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white rounded hover:bg-blue-400",
      outline:
        "outline outline-1 outline-blue-500 rounded text-blue-500 hover:bg-blue-400 hover:text-white",
      pill: "rounded-full outline-1 outline-blue-500 hover:bg-blue-100 hover:text-black hover:font-semibold hover:transition ease-in",
      primary: "bg-blue-600 text-white",
      secondary: "bg-lime-600 text-white",
      tertiary: "bg-gray-600 text-white",
      quaternary: "bg-green-600 text-white",
      quinary: "bg-purple-600 text-white",
      senary: "bg-pink-600 text-white",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
      wide: "px-5 py-1.5",
    },
    padding: {
      sm: "px-3",
      md: "px-4",
      lg: "px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function Button({
  className,
  variant,
  size,
  padding,
  children,
  href,
  onClick,
}) {
  const buttonElement = (
    <button
      onClick={onClick}
      className={buttonStyles({ variant, size, padding, className })}
    >
      {children}
    </button>
  );
  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
}

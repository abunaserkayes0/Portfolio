import Link from "next/link";
import { cva } from "class-variance-authority";

const buttonStyles = cva("button", {
  variants: {
    variant: {
      default: "bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors",
      outline:
        "outline outline-1 outline-blue-500 dark:outline-blue-400 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors",
      pill: "rounded-full outline-1 outline-blue-500 dark:outline-blue-400 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300",
      primary: "bg-blue-600 hover:bg-blue-500 text-white transition-colors",
      secondary: "bg-lime-600 hover:bg-lime-500 text-white transition-colors",
      tertiary: "bg-gray-600 hover:bg-gray-500 text-white transition-colors",
      quaternary: "bg-green-600 hover:bg-green-500 text-white transition-colors",
      quinary: "bg-purple-600 hover:bg-purple-500 text-white transition-colors",
      senary: "bg-pink-600 hover:bg-pink-500 text-white transition-colors",
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

import { ButtonProps } from "@/types";

export default function Button({
  className,
  variant,
  size,
  padding,
  children,
  href,
  onClick,
}: ButtonProps) {
  const combinedClassName = buttonStyles({ variant, size, padding, className });

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

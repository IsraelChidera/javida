import Link from "next/link";

const variants = {
  primary: "bg-navy-900 text-ivory hover:bg-navy-700 shadow-lg shadow-navy-900/20",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-600/25",
  outline: "border border-current text-navy-900 hover:bg-navy-900 hover:text-ivory",
  ghost: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-navy-900",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

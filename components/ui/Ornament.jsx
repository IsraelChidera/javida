// Decorative gold flourish used as a section divider.
export default function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold-500 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-current sm:w-20" />
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <path d="M14 1c2 3.5 5 5.5 13 6-8 .5-11 2.5-13 6-2-3.5-5-5.5-13-6 8-.5 11-2.5 13-6Z" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-current sm:w-20" />
    </div>
  );
}

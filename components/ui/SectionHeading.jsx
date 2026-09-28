import Ornament from "./Ornament";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, script, children, light = false, id }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        id={id}
        className={`mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl ${light ? "text-ivory" : "text-navy-900"}`}
      >
        {title}
        {script && <span className="mt-1 block font-script text-5xl text-gold-500 sm:text-6xl">{script}</span>}
      </h2>
      <Ornament className="mt-6" />
      {children && (
        <p className={`mt-6 text-base leading-relaxed ${light ? "text-ivory/70" : "text-muted"}`}>{children}</p>
      )}
    </Reveal>
  );
}

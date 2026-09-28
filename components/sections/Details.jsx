import { FaCalendarDay, FaClock, FaLocationDot, FaPalette, FaPhone } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { mapsLink, wedding } from "@/lib/wedding";

function Card({ icon: Icon, label, children, delay }) {
  return (
    <Reveal
      delay={delay}
      className="group rounded-3xl border border-gold-500/20 bg-white/70 p-6 text-center sm:p-8 shadow-sm shadow-navy-900/5 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-lg text-gold-400 transition-transform duration-500 group-hover:scale-110">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="eyebrow mt-6">{label}</h3>
      <div className="mt-3 font-serif text-2xl leading-snug text-navy-900">{children}</div>
    </Reveal>
  );
}

export default function Details() {
  const { venue, contact, colours } = wedding;

  return (
    <section id="details" aria-labelledby="details-title" className="paper py-24 sm:py-32">
      <Container>
        <SectionHeading id="details-title" eyebrow="Save the date" title="The Celebration" script="details">
          We would be honoured to share this joyful day with you. Here is everything you need to know.
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={FaCalendarDay} label="Date" delay={0}>
            <time dateTime={wedding.date}>{wedding.dateLabel}</time>
          </Card>
          <Card icon={FaClock} label="Time" delay={100}>
            {wedding.timeLabel} <span className="block text-base text-muted">Please arrive a little early</span>
          </Card>
          <Card icon={FaPalette} label="Colours of the day" delay={200}>
            <ul className="flex items-center justify-center gap-5">
              {colours.map((c) => (
                <li key={c.name} className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full ring-2 ring-white shadow" style={{ background: c.hex }} aria-hidden="true" />
                  {c.name}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Reveal className="mt-5 grid overflow-hidden rounded-3xl bg-navy-900 text-ivory shadow-xl shadow-navy-900/20 lg:grid-cols-[1.3fr_1fr]">
          <div className="p-8 sm:p-12">
            <p className="eyebrow flex items-center gap-2 !text-gold-400">
              <FaLocationDot aria-hidden="true" /> The venue
            </p>
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{venue.name}</h3>
            <address className="mt-3 not-italic leading-relaxed text-ivory/70">
              {venue.street},<br />
              {venue.city}, {venue.region}.
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapsLink} variant="gold">Open in Google Maps</Button>
              <Button href="/get-directions" variant="ghost">Step-by-step directions</Button>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 border-t border-ivory/10 bg-navy-950/40 p-8 sm:p-12 lg:border-l lg:border-t-0">
            <p className="eyebrow flex items-center gap-2 !text-gold-400">
              <FaPhone aria-hidden="true" /> Enquiries
            </p>
            <a href={`tel:${contact.phoneIntl}`} className="mt-2 font-serif text-3xl text-ivory transition-colors hover:text-gold-400">
              {contact.phone}
            </a>
            <p className="text-sm text-ivory/60">Call us for anything you need on the day.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center bg-navy-950 px-5 text-center text-ivory">
      <div>
        <p className="font-script text-7xl text-gold-400">Oops</p>
        <h1 className="mt-4 font-serif text-3xl">This page wandered off the aisle.</h1>
        <Button href="/" variant="gold" className="mt-8">Back to the celebration</Button>
      </div>
    </main>
  );
}

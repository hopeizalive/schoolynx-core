import Link from "next/link";

export const CTA = () => (
  <section
    id="contact"
    className="w-full bg-[#1a2d52] px-5 py-12 text-center text-white sm:py-16 lg:py-[4.25rem]"
  >
    <div className="mx-auto flex max-w-3xl flex-col items-center">
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
        Get Started for Free Today
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
        Join millions who say Schoolynx delivers 99% Customer Support
        Satisfaction.
      </p>
      <Link
        href="/live-demo"
        className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#f4433b] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d52]"
      >
        Schedule a Demo
      </Link>
    </div>
  </section>
);

export default CTA;

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Signature Cut & Style",
    description:
      "Tailored precision cuts finished with a blowout or diffuse style that suits your face shape and lifestyle.",
    length: "60 min session",
    price: "$85",
  },
  {
    title: "Luxury Color Gloss",
    description:
      "High-shine glaze that revives tone, seals in moisture, and keeps hair looking luminous for weeks.",
    length: "75 min session",
    price: "$110",
  },
  {
    title: "Clipper Fade Refresh",
    description:
      "Clean fades and sharp detailing blended to perfection for a head-turning silhouette.",
    length: "45 min session",
    price: "$65",
  },
  {
    title: "Revive Treatment Ritual",
    description:
      "Bond-building mask with scalp massage and infrared therapy to restore strength and softness.",
    length: "40 min session",
    price: "$70",
  },
];

const stylists = [
  {
    name: "Jade Bennett",
    role: "Creative Director",
    bio: "Award-winning stylist known for modern shaping and effortless texture.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Mason Rivers",
    role: "Master Barber",
    bio: "Specializes in precision fades, beard design, and long hair scissor work.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Isla Navarro",
    role: "Color Expert",
    bio: "Balayage and lived-in blonding artist focused on healthy, dimensional color.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  },
];

const testimonials = [
  {
    name: "Sofia M.",
    result: "“The best cut I've had in years. The grow-out was effortless.”",
    detail:
      "Jade mapped out a cut that brings out my natural texture. The salon vibe is immaculate—warm, modern, and relaxing.",
  },
  {
    name: "Luca R.",
    result: "“Fades so clean they look sculpted.”",
    detail:
      "Mason listens and delivers exactly what you ask for, then elevates it. The precision and attention to detail are unmatched.",
  },
  {
    name: "Emily K.",
    result: "“My color has never looked this glossy.”",
    detail:
      "Isla constantly fine-tunes my blonding and keeps my hair feeling strong. I love the custom treatment program.",
  },
];

const pricing = [
  {
    name: "Express Grooming",
    price: "$45",
    items: ["Classic clipper cut", "Hot towel finish", "Style consultation"],
  },
  {
    name: "Studio Experience",
    price: "$120",
    description: "Our signature session for transformative results.",
    items: [
      "Custom cut & styling lesson",
      "Bond-building treatment",
      "Take-home styling plan",
    ],
    highlight: true,
  },
  {
    name: "Color Collective",
    price: "$195",
    items: [
      "Advanced balayage technique",
      "Glossing & toning finish",
      "Strength & shine treatment",
    ],
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    alt: "Precision bob haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    alt: "Clipper fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    alt: "Soft wave styling",
  },
  {
    src: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=600&q=80",
    alt: "Modern shag haircut",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#f59e0b1a,_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-slate-950 to-slate-950" />
        </div>
        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-400/40">
              LC
            </span>
            <div>
              <p className="text-lg font-semibold uppercase tracking-widest">
                LuxeCuts Studio
              </p>
              <p className="text-xs text-white/60">
                Tailored cuts & color, every detail considered.
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <Link href="#team" className="transition hover:text-white">
              Stylists
            </Link>
            <Link href="#experience" className="transition hover:text-white">
              Experience
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
          <Link
            href="#booking"
            className="relative hidden rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/50 md:inline-flex"
          >
            Book Now
          </Link>
          <Link
            href="#booking"
            className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white md:hidden"
          >
            Book
          </Link>
        </nav>

        <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:pb-24 md:pt-20 xl:pt-24">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur">
              Elevated Hair Artistry
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Modern cuts, effortless color, tailor-made for how you live.
            </h1>
            <p className="max-w-xl text-lg text-white/70 md:text-xl">
              Step into a studio built for customization. From contouring cuts
              to tone-perfect color, our stylists build looks that stay sharp,
              grow out beautifully, and highlight your individuality.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/50"
              >
                Reserve Signature Session
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                Explore Services
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-white">+420</p>
                <p className="text-sm uppercase tracking-widest text-white/60">
                  Loyal Guests
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-white">12</p>
                <p className="text-sm uppercase tracking-widest text-white/60">
                  Signature Techniques
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-white">5⭐</p>
                <p className="text-sm uppercase tracking-widest text-white/60">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-3xl bg-amber-400/30 blur-3xl md:-inset-6" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?auto=format&fit=crop&w=1200&q=80"
                alt="Hair stylist performing a precision cut"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Studio Atmosphere
                </p>
                <p className="mt-2 text-base font-semibold">
                  Private suites, curated playlists, and organic hair care
                  rituals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="relative z-10 space-y-24 bg-slate-950 pb-24 pt-16">
        <section id="services" className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Services
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
                Curated sessions designed to sculpt, color, and revive every
                hair type.
              </h2>
            </div>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              Book a consultation
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/70">
                    {service.length}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <span className="rounded-full bg-amber-400/20 px-4 py-1 text-sm font-semibold text-amber-200">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,230,138,0.25),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(248,250,252,0.1),_transparent_50%)]" />
            <div className="relative grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                  The LuxeCuts Method
                </p>
                <h2 className="text-4xl font-semibold">
                  A precision-first process that protects hair health.
                </h2>
                <p className="text-base text-white/70">
                  Every appointment starts with an in-depth consultation and
                  scalp analysis. Our stylists blend technique with intuition—so
                  your look stays polished long after you leave the chair.
                </p>
              </div>
              <div className="grid gap-6 text-sm text-white/70 md:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="font-semibold text-white">Tailored Blueprint</p>
                  <p className="mt-2">
                    Face-framing, texture plan, lifestyle styling—all mapped out
                    before scissors touch hair.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="font-semibold text-white">Clean Beauty</p>
                  <p className="mt-2">
                    Ammonia-free color, vegan styling lines, and aromatherapy
                    treatments for sensitive scalps.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="font-semibold text-white">Education</p>
                  <p className="mt-2">
                    Hands-on styling lessons with product prescriptions and
                    blowout techniques to recreate the finish.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="font-semibold text-white">Aftercare</p>
                  <p className="mt-2">
                    Custom maintenance plans with between-visit glossing and
                    hydration boosts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              Memberships & Sessions
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Transparent pricing with flexible upgrades.
            </h2>
            <p className="mt-3 text-base text-white/70">
              Every session includes an aromatherapy scalp detox and finishing
              style. Enhance with glossing, extensions, or treatment boosts at
              checkout.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 ${
                  tier.highlight ? "md:-translate-y-2 md:scale-[1.02]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">{tier.name}</p>
                  <span className="text-xl font-semibold text-amber-200">
                    {tier.price}
                  </span>
                </div>
                {tier.description && (
                  <p className="mt-3 text-sm text-white/70">{tier.description}</p>
                )}
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-xs font-semibold text-amber-200">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#booking"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                >
                  Reserve
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Artists
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                Meet the stylists shaping tomorrow&apos;s looks.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-white/70">
              LuxeCuts stylists train quarterly in Los Angeles, London, and
              Tokyo to stay ahead of the latest cutting and coloring movements.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stylists.map((stylist) => (
              <div
                key={stylist.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={stylist.image}
                    alt={`${stylist.name} portrait`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-2 p-6">
                  <p className="text-xl font-semibold text-white">{stylist.name}</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    {stylist.role}
                  </p>
                  <p className="text-sm text-white/70">{stylist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Testimonials
              </p>
              <h2 className="text-4xl font-semibold">
                What our guests say after stepping out of the chair.
              </h2>
              <p className="text-base text-white/70">
                From red carpet to everyday confidence, we create hair that
                becomes your signature. 92% of guests rebook before leaving the
                studio.
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
                >
                  <p className="text-lg font-semibold text-white">
                    {testimonial.result}
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    {testimonial.detail}
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 via-transparent to-transparent" />
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1200&q=80"
                    alt="Salon interior"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-10 p-10 md:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                  Gallery
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  A studio designed for comfort, creativity, and calm.
                </h2>
                <p className="text-base text-white/70">
                  From private cutting suites and spa-grade wash lounges to the
                  curated soundscape, every element is designed to slow down
                  time. Complimentary refreshments, device chargers, and curated
                  magazines complete the experience.
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {gallery.map((item) => (
                    <div
                      key={item.src}
                      className="relative h-36 w-48 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-amber-300/20 via-white/5 to-transparent px-6 py-16 shadow-2xl shadow-black/40 md:px-16"
        >
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Booking
              </p>
              <h2 className="text-4xl font-semibold">
                Ready to transform your hair?
              </h2>
              <p className="text-base text-white/70">
                Reserve a complimentary consultation or dive straight into our
                signature services. Prefer to speak with someone? Call us at{" "}
                <a href="tel:3475550132" className="text-amber-200">
                  (347) 555-0132
                </a>{" "}
                and our concierge will tailor the perfect session.
              </p>

              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-xs font-semibold text-amber-200">
                    01
                  </span>
                  <div>
                    <p className="font-semibold text-white">Choose service</p>
                    <p>
                      Select your preferred session and add-ons; our team will
                      confirm within minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-xs font-semibold text-amber-200">
                    02
                  </span>
                  <div>
                    <p className="font-semibold text-white">Add preferences</p>
                    <p>
                      Note inspiration photos, fragrance sensitivities, or past
                      color history so we can prepare.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-xs font-semibold text-amber-200">
                    03
                  </span>
                  <div>
                    <p className="font-semibold text-white">Arrive & enjoy</p>
                    <p>
                      Sip on curated beverages, relax under ambient lighting,
                      and leave with a styling plan in hand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="First & last name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200 focus:bg-white/[0.15]"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200 focus:bg-white/[0.15]"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Preferred stylist
                </label>
                <select className="mt-2 w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200 focus:bg-white/[0.15]">
                  <option className="bg-slate-900 text-white">Any</option>
                  {stylists.map((stylist) => (
                    <option key={stylist.name} className="bg-slate-900 text-white">
                      {stylist.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Service focus
                </label>
                <textarea
                  placeholder="Tell us about your hair goals..."
                  rows={3}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200 focus:bg-white/[0.15]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/50"
              >
                Submit Request
              </button>
              <p className="text-xs text-white/50">
                Our concierge responds within 2 business hours. Need something
                sooner? Call or text{" "}
                <a href="tel:3475550132" className="text-amber-200">
                  (347) 555-0132
                </a>
                .
              </p>
            </form>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl space-y-10 px-6 text-white/80"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Visit
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                LuxeCuts Studio — Williamsburg, Brooklyn
              </h2>
            </div>
            <Link
              href="https://maps.google.com/?q=169+Wythe+Ave,+Brooklyn,+NY"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white"
            >
              Open in Maps
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="LuxeCuts Studio Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.770128430391!2d-73.96187592372981!3d40.718077838724016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bfa2d969f63%3A0x7d567c90e1c13c4d!2sWythe%20Ave%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                loading="lazy"
                className="h-[320px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Hours
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex justify-between">
                    <span>Tue – Fri</span>
                    <span>10:00 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sat</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sun – Mon</span>
                    <span>By appointment</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Contact
                </p>
                <p className="mt-3">
                  Phone:{" "}
                  <a href="tel:3475550132" className="text-amber-200">
                    (347) 555-0132
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@luxecuts.studio" className="text-amber-200">
                    hello@luxecuts.studio
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Policies
                </p>
                <p className="mt-3">
                  24-hour cancellation courtesy, gender-neutral pricing, and
                  complimentary maintenance fringe trims between visits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-400/40">
              LC
            </span>
            <div>
              <p className="text-sm font-semibold text-white">LuxeCuts Studio</p>
              <p>Williamsburg · Brooklyn · Est. 2014</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <Link href="#team" className="transition hover:text-white">
              Team
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Visit
            </Link>
            <Link href="#booking" className="transition hover:text-white">
              Book
            </Link>
          </div>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} LuxeCuts Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

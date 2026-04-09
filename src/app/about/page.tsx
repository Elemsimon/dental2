"use client";

import { useCallback, useRef, useState } from 'react';
import { Ambulance, ChevronLeft, ChevronRight, ChevronsLeftRight, Minus, Plus, Shield, Star, Target, UserCheck, X } from 'lucide-react'
import Image from 'next/image'



interface StatBlockProps {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface SliderItem {
  id: number;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}


type ReasonType = "Routine Checkup" | "New Patient Visit" | "Specific Concern";

interface FormState {
  name: string;
  email: string;
  location: string;
  medicalRecord: string;
  date: string;
  time: string;
  reason: ReasonType;
}

const StatBlock = ({ value, label }: StatBlockProps) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
    <span style={{ color: "#4f39f6", fontSize: "2.5rem", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{value}</span>
    <span style={{ color: "#555574", fontSize: "1rem", lineHeight: 1.4, paddingTop: 4, maxWidth: 500 }}>{label}</span>
  </div>
);


/* Data */

const howItWorks: FAQItem[] = [
  {
    id: 1,
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "We offer a full range of dental services including general dentistry, cosmetic procedures, orthodontics, and emergency care.",
  },
  {
    id: 3,
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting your dentist every six months for routine checkups and cleanings to maintain optimal oral health.",
  },
];

const whyChooseFeatures: FeatureItem[] = [
  {
    icon: "icon-why-choose-1.svg",
    title: "Emergency Services",
    description:
      "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "icon-why-choose-2.svg",
    title: "Positive Patient Reviews",
    description:
      "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "icon-why-choose-3.svg",
    title: "Experienced Professionals",
    description:
      "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Dr. Smith and the team were amazing! From the moment I walked in, I felt at ease. The care and attention to detail were outstanding. My smile has never looked better! I've always been nervous about visiting the dentist but the staff here made me feel so comfortable. They explained everything clearly and made sure I was okay throughout the procedure The best dental experience I've ever had! The hygienists are gentle.",
    name: "Dianne Russell",
    role: "Co. Founder",
    avatar:
      "/author-1.jpg",
  },
  {
    id: 2,
    quote:
      "The clinic exceeded every expectation I had. From the reception staff to the dental team, everyone was professional and warm. I came in for a routine cleaning and left feeling like I had a brand new smile.",
    name: "Marcus Johnson",
    role: "Patient",
    avatar:
      "/author-1.jpg",
  },
  {
    id: 3,
    quote:
      "I've visited many dental clinics over the years but this one stands out. The technology they use is state-of-the-art and the team truly cares about your comfort.",
    name: "Sarah Chen",
    role: "Marketing Director",
    avatar:
      "/author-1.jpg",
  },
];

const sliders: SliderItem[] = [
  {
    id: 1,
    beforeSrc:
      "/transformation-img-1.jpg",
    afterSrc:
      "/transformation-img-2.jpg",
    beforeAlt: "Before teeth whitening",
    afterAlt: "After teeth whitening",
  },
  {
    id: 2,
    beforeSrc:
      "/transformation-img-3.jpg",
    afterSrc:
      "/transformation-img-4.jpg",
    beforeAlt: "Before braces",
    afterAlt: "After braces",
  },
];

const faqs2: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a full range of dental services including general dentistry, cosmetic procedures, orthodontics, implants, and emergency care for patients of all ages.",
  },
  {
    id: 2,
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting your dentist every six months for routine checkups and professional cleanings to maintain optimal oral health.",
  },
  {
    id: 3,
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    id: 4,
    question: "What can I expect during my first visit?",
    answer:
      "During your first visit, we'll conduct a comprehensive oral examination, take X-rays if needed, and discuss your dental health goals to create a personalised treatment plan.",
  },
  {
    id: 5,
    question: "Do you offer emergency dental care?",
    answer:
      "Yes, we provide 24/7 emergency dental care. If you're experiencing a dental emergency, please call us immediately and we'll arrange an urgent appointment.",
  },
];

const workingHours = [
  { day: "Monday To Friday", hours: "8am – 7pm" },
  { day: "Saturday", hours: "9am – 4pm" },
  { day: "Sunday", hours: "Closed" },
];

const reasons: ReasonType[] = [
  "Routine Checkup",
  "New Patient Visit",
  "Specific Concern",
];


const cards: ValueCard[] = [
  {
    icon: "/icon-mission.svg",
    title: "Our Mission",
    description:
      "Our mission is to provide compassionate, high-quality dental care, promoting healthy smiles through personalized treatments and patient.",
  },
  {
    icon: "/icon-vision.svg",
    title: "Our Vision",
    description:
      "Our vision is to provide compassionate, high-quality dental care, promoting healthy smiles through personalized treatments and patient.",
  },
  {
    icon: "/icon-value.svg",
    title: "Our Value",
    description:
      "Our value is to provide compassionate, high-quality dental care, promoting healthy smiles through personalized treatments and patient.",
  },
];




const Page = () => {
  const [openId, setOpenId] = useState<number | null>(3);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  /* Transformation Section */
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<number[]>(sliders.map(() => 50));
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const updatePosition = useCallback((clientX: number, index: number) => {
    const container = containerRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    const newPositions = [...positions];
    newPositions[index] = (x / rect.width) * 110;

    setPositions(newPositions);
  }, [positions]);

  const onMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setDraggingIndex(index);
    updatePosition(e.clientX, index);
  };

  const onMouseMove = (e: React.MouseEvent, index: number) => {
    if (draggingIndex === index) {
      updatePosition(e.clientX, index);
    }
  };

  const onMouseUp = () => setDraggingIndex(null);

  const onTouchMove = (e: React.TouchEvent, index: number) => {
    updatePosition(e.touches[0].clientX, index);
  };

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    location: "",
    medicalRecord: "",
    date: "",
    time: "",
    reason: "Routine Checkup",
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative footer overflow-hidden bg-linear-to-b from-[#0a0e2e] to-[#080c28]font-inter">   
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-20 sm:py-40 flex justify-center items-center">
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            About Us
          </h1>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
    <section className="min-h-screen bg-white flex items-center justify-center px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: IMAGES */}
        <div className="relative">
          <div
            className="relative w-full overflow-hidden aspect-5/6
            mask-[url('/about-bg-shape.svg')] mask-no-repeat mask-center mask-contain
            [-webkit-mask-image:url('/about-bg-shape.svg')]
            [-webkit-mask-repeat:no-repeat]
            [-webkit-mask-position:center]
            [-webkit-mask-size:contain]"
          >
            <Image src="/about-image.jpg" alt="Dentist treating room" fill className="object-cover" />
          </div>

          <div className="absolute bottom-4 sm:bottom-7 -right-2 w-[120px] h-[130px] md:w-[225px] md:h-[250px] lg:w-[200px] lg:h-[213px] rounded-[30px] overflow-hidden bg-white backdrop-blur-[6px] flex flex-col items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <Image src="/about-counter-bg.jpg" alt="Dentist treating patient" fill className="object-cover" />
            <div className="absolute bg-black/50 inset-0"/>
            <div className="relative z-1 text-center">
              <p className="text-white font-extrabold text-[2.2rem] sm:text-[2.8rem] leading-none m-0">25+</p>
              <p className="text-[rgba(255,255,255,0.85)] text-[0.85rem] sm:text-[0.95rem] mt-2.5 leading-[1.4]">
                experience in<br />medical services
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-2 mb-[18px]">    
            <div className="relative">
              <Image src="/sub-heading.svg" alt="About us" width={18} height={18} className="object-cover" />
            </div>
            <span className="text-[#4f46e5] font-bold text-sm tracking-widest uppercase">About Us</span>
          </div>

          <h2 className="text-black font-bold text-[2rem] sm:text-[3rem] leading-[1.18] tracking-[-0.02em] m-0 mb-[22px]">
            Commitment to your <br className="hidden sm:block" /> smile&apos;s health and beauty
          </h2>

          <p className="text-gray-600 text-[1rem] leading-[1.7] m-0 mb-3">
            The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
          </p>

          <div className="border-b border-indigo-600/10 my-8 sm:my-10" />

          <div className="flex flex-wrap gap-8 sm:gap-12">
            <StatBlock value="98%" label="Invisalign Treatment Complete" />
            <StatBlock value="100%" label="Patient Satisfaction Rate" />
          </div>

          <div className="border-t border-indigo-600/10 my-8 sm:my-10" />

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="flex items-center gap-2.5 font-semibold text-white text-[0.95rem] sm:text-[1rem] px-6 sm:px-[30px] py-3 sm:py-[14px] rounded-full shadow-[0_6px_24px_rgba(79,70,229,0.35)] transition-colors border-none bg-indigo-600 hover:bg-indigo-500">
              More About
              <Plus size={18} />
            </button>

            <div className="flex items-center gap-3.5">
              <div className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden border-2 border-gray-200">
                <Image src="/about-founder.jpg" alt="Founder" fill className="object-cover" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-[0.95rem] m-0">Dianne Russell</p>
                <p className="text-gray-400 text-[0.85rem] m-0 mt-0.5">Co Founder</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* MISSON, VISSION and VALUE */}
    <section className="bg-white font-inter relative">

      {/* DARK BAND */}
      <div className="relative overflow-hidden bg-[#080c2e] pt-14 sm:pt-24 pb-64 sm:pb-80">

        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] bg-size-[22px_22px]" />

        <div className="max-w-7xl mx-auto flex items-start justify-between relative z-10">

          {/* TEXT */}
          <div className="max-w-[780px]">

            <div className="flex items-center gap-2 mb-4">
              <Image src="/sub-heading.svg" alt="mission" width={18} height={18} className="object-cover" />
              <span className="text-indigo-500 font-bold text-[0.75rem] tracking-[0.14em] uppercase">
                Committed To Excellence
              </span>
            </div>

            <h2 className="text-white font-extrabold text-[2.6rem] leading-[1.18] tracking-[-0.02em]">
              Our vision for the future and mission to
              <br />
              serve with integrity and compassion
            </h2>

          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2.5 bg-[#5b52e8] hover:bg-indigo-700 text-white font-semibold text-[0.95rem] px-7 py-[14px] rounded-full shadow-[0_6px_24px_rgba(91,82,232,0.4)] transition whitespace-nowrap self-center shrink-0">
            Contact Now
            <Plus size={16} />
          </button>

        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto pb-[80px] grid grid-cols-3 gap-8 -mt-[200px] relative z-20">

        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-4xl overflow-hidden flex flex-col items-center shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
          >
            {/* TOP */}
            <div className="w-full bg-white flex flex-col items-center px-8 pt-[44px] pb-[28px] gap-5">
              <Image src={card.icon} alt="mission" width={80} height={80} className="object-cover" />
              <h3 className="text-[#0f1240] font-bold text-xl">
                {card.title}
              </h3>
            </div>

            <div className="border-t border-indigo-600/5 w-80" />

            {/* BOTTOM */}
            <div className="px-16 py-9 text-center">
              <p className="text-gray-500 text-base leading-[1.7]">
                {card.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>

    {/* ─── HOW IT WORKS ─── */}
    <section className="bg-white py-16 sm:py-20 px-5 sm:px-8 lg:px-16 min-h-screen flex items-center font-inter">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT IMAGE COLLAGE */}
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative h-[200px] sm:h-[280px] lg:h-[320px] rounded-3xl overflow-hidden">
            <Image src="/how-work-img-1.jpg" alt="Dentist with patient" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] sm:h-[280px] lg:h-[320px] rounded-3xl overflow-hidden">
            <Image src="/how-work-img-2.jpg" alt="Dental procedure" fill className="object-cover" />
          </div>
          <div className="relative col-span-2 h-[200px] sm:h-[260px] lg:h-[300px] rounded-3xl overflow-hidden">
            <Image src="/how-work-img-3.jpg" alt="Doctor consulting patient" fill className="object-cover" />
          </div>

          <div className="absolute left-1/2 top-[calc(50%-35px)] md:top-[240px] lg:top-[280px] -translate-x-1/2 bg-white rounded-full px-4 sm:px-6 py-3 sm:py-5 shadow-xl flex items-center gap-2 z-10">
            <Image src="/expert-doctor-image.png" alt="Doctors" width={140} height={36} className="object-contain" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-[0.12em]">How It Work</span>
          </div>

          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f1240] mb-7 sm:mb-9">
            Understanding the patient journey
          </h2>

          <div>
            {howItWorks.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className={`border-b border-gray-200 ${isOpen ? "pb-5" : ""}`}>
                  <button onClick={() => toggle(item.id)} className="w-full flex items-center gap-4 sm:gap-5 py-4 sm:py-5 text-left">
                    <span className="font-bold text-[#0f1240] text-sm min-w-[20px]">{item.id}.</span>
                    <span className="font-bold text-[#0f1240] text-[1.1rem] sm:text-[1.3rem] flex-1">{item.question}</span>
                    <span className="text-[#0f1240]">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
                  </button>
                  {isOpen && (
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed pl-8 sm:pl-10">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* ─── WHY CHOOSE US ─── */}
    <section className="relative overflow-hidden flex items-center pt-12 sm:pt-15 pb-10 lg:pb-0 px-5 sm:px-8 lg:px-16 bg-linear-to-br from-[#0d1240] via-[#080c2e] to-[#06091e] font-inter">
      
      <div className="absolute inset-0 -bottom-1 right-1 opacity-100 w-full h-full pointer-events-none whychooseus" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-10 md:gap-0">

        {/* LEFT COLUMN */}
        <div className="md:pr-10">
          <div className="flex items-center gap-2 mb-5">
            <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
            <span className="text-white font-bold text-sm uppercase tracking-[0.14em]">Why Choose Us</span>
          </div>

          <h2 className="text-white font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.14] tracking-[-0.02em] mb-6">
            Excellence results you can trust
          </h2>

          <p className="text-[#8b93b8] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
            Accurate diagnosis of dental diseases ensures effective treatment
            plans, helping to maintain oral health and prevent further complications.
          </p>

          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-white text-sm sm:text-base transition bg-indigo-700 hover:bg-indigo-600 shadow-[0_8px_28px_rgba(91,82,232,0.45)]">
            Contact Us
            <Plus size={17} />
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center items-end w-full aspect-3/4 order-first md:order-0 max-h-[400px] lg:max-h-none">
          <Image src="/why-choose-image.png" alt="Doctor" fill className="object-contain" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:pl-12">
          {whyChooseFeatures.map((item, i) => (
            <div
              key={i}
              className={`flex gap-4 sm:gap-5 items-start ${
                i !== whyChooseFeatures.length - 1 ? "pb-6 sm:pb-7 mb-6 sm:mb-7 border-b border-white/10" : ""
              }`}
            >
              <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-[14px] bg-indigo-500 border border-indigo-500/50 flex items-center justify-center shrink-0">
                 <Image src={item.icon} width={38} height={38} alt="why choose use icon" />
              </div>
              <div>
                <p className="text-white font-bold text-base sm:text-lg mb-1">{item.title}</p>
                <p className="text-white text-sm sm:text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── TRANSFORMATION ─── */}
    <section className="bg-white px-5 sm:px-8 lg:px-[60px] pt-[40px] sm:pt-[60px] pb-[60px] sm:pb-[80px] min-h-screen flex flex-col font-inter">
      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
              <span className="text-indigo-600 font-bold text-sm tracking-[0.13em] uppercase">See The Transformation</span>
            </div>
            <h2 className="text-[#0f1240] font-bold text-[1.8rem] sm:text-[2.4rem] lg:text-[2.9rem] leading-[1.18] tracking-[-0.02em] max-w-[850px]">
              Stunning results that showcase the life changing impact
            </h2>
          </div>

          <button className="inline-flex items-center gap-3 bg-indigo-500 hover:bg-[#1a2060] text-white font-semibold text-[0.9rem] sm:text-[0.95rem] px-6 sm:px-7 py-3 sm:py-[14px] rounded-full shadow-[0_4px_20px_rgba(15,18,64,0.25)] transition whitespace-nowrap">
            Contact Now
            <X size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {sliders.map((item, index) => {
            const position = positions[index];
            return (
              <div
                key={item.id}
                ref={(el) => {containerRefs.current[index] = el}}
                onMouseMove={(e) => onMouseMove(e, index)}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                className={`relative w-full aspect-4/3 overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] select-none ${
                  draggingIndex === index ? "cursor-grabbing" : "cursor-col-resize"
                }`}
              >
                <img src={item.afterSrc} alt={item.afterAlt} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
                  <img src={item.beforeSrc} alt={item.beforeAlt} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 bottom-0 w-[2px] bg-white/80 pointer-events-none" style={{ left: `${position}%`, transform: "translateX(-50%)" }} />
                <div
                  onMouseDown={(e) => onMouseDown(e, index)}
                  onTouchMove={(e) => onTouchMove(e, index)}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.25)] cursor-grab z-10"
                  style={{ left: `${position}%` }}
                >
                  <ChevronsLeftRight size={16} className="text-indigo-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ─── TESTIMONIAL HEADER ─── */}
    <section className="relative whychooseus overflow-hidden bg-[#080c2e] pt-14 sm:pt-16 pb-64 sm:pb-80 px-5 sm:px-8 lg:px-16 min-h-[340px] flex items-center font-inter">
      <div className="absolute inset-0 opacity-100 w-full h-full pointer-events-none testimonial" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10">
        <div className="w-full sm:w-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
            <span className="text-indigo-500 font-bold text-sm tracking-[0.14em] uppercase">Testimonial</span>
          </div>
          <h2 className="text-white font-extrabold text-[1.8rem] sm:text-[2.4rem] lg:text-[2.9rem] leading-[1.16] tracking-[-0.02em]">
            Real stories of exceptional care and
            transformative smiles
          </h2>
        </div>

        <button className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base whitespace-nowrap shadow-[0_8px_30px_rgba(91,82,232,0.45)] transition bg-indigo-700 hover:bg-indigo-600">
          Contact Us Now
          <Plus size={18} />
        </button>
      </div>
    </section>

    {/* ─── TESTIMONIAL CARDS ─── */}
    <section className="bg-[#f0f2fb] -mt-44 sm:-mt-56 pb-12 flex items-center justify-center font-inter px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-3 sm:p-6 max-w-7xl w-full shadow-lg overflow-hidden z-30">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 p-6 sm:p-10 lg:p-14">
                <div className="text-indigo-500 text-4xl sm:text-5xl mb-4 sm:mb-6">
                  <Image src="icon-quote.svg" width={38} height={38} alt="why choose use icon" />
                </div>
                <p className="text-[#1e2a4a] text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-10">{t.quote}</p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <Image src={t.avatar} width={60} height={60} alt="patient" className="rounded-full object-cover w-14 h-14 sm:w-[70px] sm:h-[70px]" />
                    <div>
                      <p className="font-bold text-[#0f1240] text-lg sm:text-xl">{t.name}</p>
                      <p className="text-gray-400 text-base sm:text-xl">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={prev} className="w-11 h-11 sm:w-12 sm:h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center text-white">
                      <ChevronLeft />
                    </button>
                    <button onClick={next} className="w-11 h-11 sm:w-12 sm:h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center text-white">
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    <section className="bg-[#f0f2fb] py-16 sm:py-20 px-5 sm:px-8 lg:px-16 min-h-screen flex items-center font-inter">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
            <span className="text-indigo-600 font-bold text-sm tracking-[0.13em] uppercase">FAQs</span>
          </div>

          <h2 className="text-[#0f1240] font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.18] tracking-[-0.02em] mb-5">
            Everything you need to know about dental care
          </h2>

          <p className="text-gray-500 text-[0.93rem] leading-[1.65] mb-8 sm:mb-11">
            Find quick answers to common questions about our dental services,
            procedures, and patient care in our FAQ section.
          </p>

          <div className="bg-white rounded-[20px] p-6 sm:p-7 flex items-center gap-6 sm:gap-10 shadow-[0_2px_16px_rgba(0,0,0,0.05)] max-w-[380px]">
            <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <Image src="/icon-faqs-cta-box.svg" width={60} height={60} alt="faq" />
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[0.85rem] mb-1">We always take care of your smile</p>
              <p className="text-[#0f1240] font-extrabold text-[1rem] sm:text-[1.1rem] mb-1">24/7 Emergency</p>
              <p className="text-gray-400 text-[0.88rem]">659-989-698565</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 sm:gap-7">
          {faqs2.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-400 ${
                  isOpen ? "bg-indigo-600 p-5 sm:p-6" : "bg-white px-5 sm:px-6 py-4 sm:py-5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-sm sm:text-base leading-[1.4] ${isOpen ? "text-white" : "text-[#0f1240]"}`}>
                    {item.question}
                  </span>
                  <span className={`ml-4 shrink-0 ${isOpen ? "text-white" : "text-[#0f1240]"}`}>
                    {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-3 text-[0.92rem] leading-[1.65] text-white/90">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>

    {/* ─── BOOK APPOINTMENT ─── */}
    <section className="bg-[#f0f2fb] px-5 sm:px-8 lg:px-[60px] pt-12 sm:pt-16 pb-16 sm:pb-20 min-h-screen font-inter">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-12 sm:mb-20 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/sub-heading.svg" alt="" width={18} height={18} className="object-cover" />
              <span className="text-indigo-600 font-bold text-sm tracking-[0.13em] uppercase">Book Your Appointment</span>
            </div>
            <h2 className="text-[#0f1240] font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.18] tracking-[-0.02em]">
              Book your dental visit online with primecare
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base leading-[1.72] md:pt-9">
            Ready to take the next step towards a healthier smile? Use our easy
            online booking system to schedule your dental appointment. Simply
            select a convenient date and time, provide some basic information,
            and we&apos;ll handle the rest.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 sm:gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="bg-[#0f1240] rounded-3xl px-6 sm:px-8 py-7 sm:py-8">
              <p className="text-white font-bold text-[1.1rem] sm:text-[1.15rem] mb-5">Working Hours</p>
              <div className="h-px bg-white/10 mb-5 sm:mb-6" />
              <div className="flex flex-col gap-4 sm:gap-5">
                {workingHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-white text-sm sm:text-[0.95rem]">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[20px] px-5 sm:px-6 py-8 sm:py-10 flex items-center gap-6 sm:gap-10 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <Image src="/icon-faqs-cta-box.svg" width={60} height={60} alt="faq" />
              </div>
            </div>
              <div>
                <p className="text-gray-400 text-sm sm:text-base mb-1">We always take care of your smile</p>
                <p className="text-[#0f1240] font-extrabold text-[1.2rem] sm:text-[1.4rem] mb-1">24/7 Emergency</p>
                <p className="text-gray-400 text-sm sm:text-base">659-989-698565</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl px-6 sm:px-9 py-8 sm:py-10 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <p className="text-gray-500 text-sm sm:text-base leading-[1.65] mb-6 sm:mb-8">
              Fill out the form below to request your dental appointment. We&apos;ll
              confirm your time and send you a reminder.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text" placeholder="Enter Your Name" value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
                <input
                  type="email" placeholder="Enter Your Email" value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text" placeholder="Enter Your Location" value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
                <input
                  type="text" placeholder="Medical Record No." value={form.medicalRecord}
                  onChange={(e) => handleChange("medicalRecord", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="date" value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
                <input
                  type="time" value={form.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 text-[#0f1240] text-sm sm:text-base outline-none focus:border-indigo-500"
                />
              </div>

              {/* Reason */}
              <div className="mt-2">
                <p className="text-[#0f1240] font-bold text-[1.15rem] sm:text-[1.3rem] mb-3">Reason For Visit</p>
                <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
                  {reasons.map((r) => (
                    <label
                      key={r}
                      className={`flex items-center gap-2 cursor-pointer text-sm sm:text-base ${
                        form.reason === r ? "text-indigo-600 font-medium" : "text-gray-700"
                      }`}
                    >
                      <input
                        type="radio" name="reason" value={r}
                        checked={form.reason === r}
                        onChange={() => handleChange("reason", r)}
                        className="accent-indigo-600 w-4 h-4 cursor-pointer"
                      />
                      {r}
                    </label>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-3 text-white font-semibold text-[0.95rem] sm:text-[1rem] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full mt-2 w-fit transition shadow-[0_6px_24px_rgba(91,82,232,0.38)] bg-indigo-700 hover:bg-[#5b52e8]">
                Book Appointment
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Page
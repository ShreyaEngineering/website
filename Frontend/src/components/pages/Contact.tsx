import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

interface TeamMember {
  name: string;
  post: string;
  phone: string;
  whatsapp: string;
  email: string;
  experience: string;
  specialty: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Er. Murari Sharma",
    post: "Proprietor",
    phone: "+91 88263 55698",
    whatsapp: "918826355698",
    email: "shreyaengineeringworkshop0@gmail.com",
    experience: "6+ years",
    specialty:
      "Precision machining, plant solutions and industrial parts repair",
    image: "./images/proprietor.png",
  },
  {
    name: "Kailash Mistri",
    post: "Manager",
    phone: "+91 99319 74169",
    whatsapp: "919931974169",
    email: "shreyaengineeringworkshop0@gmail.com",
    experience: "40+ years",
    specialty: "Workshop operations, fabrication and industrial maintenance",
    image: "./images/manager.png",
  },
];

const avatarFallback = (name: string): string => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'>
    <rect width='100%' height='100%' fill='#EDEEEA'/>
    <text x='50%' y='53%' font-size='108' text-anchor='middle' fill='#B5721E' font-family='monospace'>${initials}</text>
  </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#EDEEEA] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1C2126_1px,transparent_1px),linear-gradient(90deg,#1C2126_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-block border border-[#1C2126]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5721E]">
            Get in touch
          </span>

          <h2 className="mt-5 font-[Oswald,_sans-serif] text-3xl font-bold uppercase tracking-tight text-[#1C2126] md:text-5xl">
            Contact us
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#4A4F55]">
            Connect directly with our team for quotations, urgent
            machine-part requirements, fabrication work, and industrial
            repair services.
          </p>
        </div>

        {/* Team roster — wide horizontal rows */}
        <div className="border border-[#1C2126]/15 bg-[#F7F6F1]">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col gap-6 p-6 sm:flex-row sm:items-center md:p-8 ${
                index !== 0 ? "border-t border-[#1C2126]/15" : ""
              }`}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.post}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = avatarFallback(member.name);
                }}
                className="h-28 w-28 shrink-0 border border-[#1C2126]/15 object-cover object-top sm:h-32 sm:w-32"
              />

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-[#1C2126]">
                    {member.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#B5721E]">
                    {member.post}
                  </span>
                </div>

                <p className="mt-2 text-sm text-[#4A4F55]">
                  {member.specialty}
                </p>

                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[#8A8A8E]">
                  {member.experience} experience
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-stretch">
                
                <a  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-1.5 border border-[#1C2126]/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[#1C2126] transition-colors hover:border-[#B5721E] hover:text-[#B5721E]"
                >
                  <FiPhone size={13} />
                  Call
                </a>
                
                 <a href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-[#1C2126]/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[#1C2126] transition-colors hover:border-[#B5721E] hover:text-[#B5721E]"
                >
                  <FiMessageCircle size={13} />
                  WhatsApp
                </a>
                
                 <a href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center gap-1.5 border border-[#1C2126]/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[#1C2126] transition-colors hover:border-[#B5721E] hover:text-[#B5721E]"
                >
                  <FiMail size={13} />
                  Email
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Workshop info band — full width, split into facts + map */}
        <div className="mt-8 grid gap-px overflow-hidden border border-[#1C2126]/15 bg-[#1C2126]/15 md:grid-cols-2">
          <div className="bg-[#F7F6F1] p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B5721E]">
              Workshop details
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div className="col-span-2 flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-[#B5721E]" />
                <span className="text-[#4A4F55]">
                  Sariswa Bazar, West Champaran, Bihar
                </span>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#8A8A8E]">
                  Hours
                </p>
                <p className="mt-1 text-[#4A4F55]">Mon - Sat, 9 AM - 8 PM</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#8A8A8E]">
                  Response
                </p>
                <p className="mt-1 text-[#4A4F55]">Same-day callback</p>
              </div>

              <div className="col-span-2">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#8A8A8E]">
                  Services
                </p>
                <p className="mt-1 text-[#4A4F55]">
                  Machining, fabrication, welding and industrial repairs
                </p>
              </div>
            </div>
          </div>

          <iframe
            className="h-full min-h-[280px] w-full grayscale-[20%]"
            src="https://www.google.com/maps?q=26.8725033,84.6320933&output=embed"
            title="Shreya Engineering Works location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
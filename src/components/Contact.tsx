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
    experience: "6+ Years",
    specialty:
      "Precision Machining, Plant Solutions & Industrial Parts Repair",
    image: "../../public/images/proprietor.png",
  },
  {
    name: "Kailash Mistri",
    post: "Manager",
    phone: "+91 99319 74169",
    whatsapp: "919931974169",
    email: "shreyaengineeringworkshop0@gmail.com",
    experience: "40+ Years",
    specialty:
      "Workshop Operations, Fabrication & Industrial Maintenance",
    image: "../../public//images/manager.png",
  },
];

const avatarFallback = (
  name: string,
  tone = "#3a495f"
): string => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${tone}'/>
        <stop offset='100%' stop-color='#1f2937'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text
      x='50%'
      y='53%'
      font-size='108'
      text-anchor='middle'
      fill='#dbeafe'
      font-family='Arial,sans-serif'
    >
      ${initials}
    </text>
  </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium mb-4">
          Get In Touch
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto">
          Connect directly with our team for quotations,
          urgent machine-part requirements, fabrication
          work, and industrial repair services.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.post}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = avatarFallback(
                    member.name,
                    index === 0
                      ? "#334155"
                      : "#3f3f46"
                  );
                }}
                className="w-full h-80 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-cyan-300 text-sm uppercase tracking-wider mt-1">
                  {member.post}
                </p>

                <div className="mt-4 space-y-2 text-slate-300">
                  <p>
                    Experience: {member.experience}
                  </p>

                  <p>
                    Specialty: {member.specialty}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 transition"
                  >
                    <FiPhone />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 hover:bg-green-500/30 transition"
                  >
                    <FiMessageCircle />
                    WhatsApp
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition"
                  >
                    <FiMail />
                    Email
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Workshop Details
          </h3>

          <div className="space-y-4 text-slate-300">
            <div className="flex gap-3">
              <FiMapPin className="text-red-400 mt-1" />
              <span>
                Sariswa Bazar, West Champaran, Bihar
              </span>
            </div>

            <p>
              Working Hours:
              <br />
              Mon - Sat: 9:00 AM – 8:00 PM
            </p>

            <p>
              Services:
              <br />
              Machining, Fabrication,
              Welding & Industrial Repairs
            </p>

            <p>
              Response Time:
              <br />
              Same-day callback for urgent work
            </p>
          </div>

          <iframe
            className="mt-6 rounded-xl w-full h-64 border border-white/10"
            src="https://www.google.com/maps?q=26.8725033,84.6320933&output=embed"
            title="Shreya Engineering Works location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </section>
  );
};

export default Contact;
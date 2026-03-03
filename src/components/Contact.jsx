const teamMembers = [
  {
    name: "Er. Murari Sharma",
    post: "Proprietor",
    phone: "+91 88263 55698",
    whatsapp: "918826355698",
    email: "shreyaengineeringworkshop0@gmail.com",
    experience: "6+ Years",
    specialty: "Precision Machining & Plant Solutions, parts reparing",
    image: "/images/proprietor.png",
  },
  {
    name: "Kailash Mistri",
    post: "Manager",
    phone: "+91 99319 74169",
    whatsapp: "91 9931974169",
    email: "shreyaengineeringworkshop0@gmail.com",
    experience: "40+ Years",
    specialty: "Operations, Fabrication ",
    image: "/images/manager.png",
  },
];

function avatarFallback(name, tone = "#3a495f") {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${tone}'/>
        <stop offset='100%' stop-color='#1f2937'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='53%' font-size='108' text-anchor='middle' fill='#dbeafe' font-family='Arial, sans-serif'>${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
        Connect directly with our core team for quotations, urgent machine-part requirements, and repair support.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.post}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = avatarFallback(member.name, index === 0 ? "#334155" : "#3f3f46");
                }}
                className="w-full h-80 object-cover object-top"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.14em]">{member.post}</p>

                <div className="space-y-2 text-slate-200/90">
                  <p>
                    Phone:{" "}
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="text-cyan-200 hover:text-cyan-100">
                      {member.phone}
                    </a>
                  </p>
                  <p>
                    WhatsApp:{" "}
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-200 hover:text-cyan-100"
                    >
                      Message Now
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href={`mailto:${member.email}`} className="text-cyan-200 hover:text-cyan-100">
                      {member.email}
                    </a>
                  </p>
                  <p>Experience: {member.experience}</p>
                  <p>Specialty: {member.specialty}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-5">
          <h3 className="text-xl font-semibold">Workshop Details</h3>
          <p className="text-slate-300">Location: Sariswa Bazar, W.Champaran</p>
          <p className="text-slate-300">Working Hours: Mon-Sat, 9:00 AM - 8:00 PM</p>
          <p className="text-slate-300">Services: Machining, Fabrication, Welding, Repairs</p>
          <p className="text-slate-300">Response Time: Same-day callback for urgent work</p>

          <iframe
            className="rounded-xl w-full h-64 border border-white/10"
            src="https://www.google.com/maps?q=26.8725033,84.6320933&output=embed"
            title="Shreya Engineering Works location map"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          />
        </aside>
      </div>
    </section>
  );
};

export default Contact;

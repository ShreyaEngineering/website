import CountUp from "react-countup";

export default function Counters() {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-5xl text-cyan-400">
            <CountUp end={500} duration={4} />+
          </h3>
          <p>Projects Completed</p>
        </div>
        <div>
          <h3 className="text-5xl text-cyan-400">
            <CountUp end={15} duration={4} />+
          </h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3 className="text-5xl text-cyan-400">
            <CountUp end={300} duration={4} />+
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
}
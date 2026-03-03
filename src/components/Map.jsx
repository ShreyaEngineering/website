export default function Map() {
  return (
    <section className="h-[400px]">
      <iframe
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Bairiya&output=embed"
      ></iframe>
    </section>
  );
}
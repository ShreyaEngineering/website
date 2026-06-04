const Map = () => {
  return (
    <section
      id="location"
      className="h-[400px] border-t border-white/10"
    >
      <iframe
        title="Shreya Engineering Works Location"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Bairiya&output=embed"
      />
    </section>
  );
};

export default Map;
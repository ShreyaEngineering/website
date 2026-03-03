const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(90,152,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(90,152,255,0.09)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div className="absolute w-[560px] h-[560px] bg-cyan-500/20 blur-[170px] rounded-full top-[-180px] left-[-160px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full bottom-[-180px] right-[-180px] animate-pulse" />
    </div>
  );
};

export default BackgroundEffects;

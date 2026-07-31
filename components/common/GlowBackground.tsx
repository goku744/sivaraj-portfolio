export default function GlowBackground() {
  return (
    <>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[160px]" />
    </>
  );
}
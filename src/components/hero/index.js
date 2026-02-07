export default function HeroVideo() {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

      </section>
    );
  }
  
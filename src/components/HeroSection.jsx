const HeroSection = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/822b776a-8a32-4465-b1d3-3eccc4023966-MuV9k2biToI5CoL6qc6cRXYanKKYoP.png"
          alt="Adarsh Sharma - Designer and Coder"
          className="w-full h-full object-cover object-center"
        />
        {/* Very subtle overlay for better contrast without hiding details */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Border above image for spacing */}
      <div className="absolute top-16 left-0 right-0 h-px bg-white/20"></div>

      {/* Content Overlay - Positioned to not interfere with the portrait */}
      <div className="absolute inset-0 flex items-end justify-center pb-32">
        <div className="text-center relative z-10">{/* Main tagline positioned below the portrait */}</div>
      </div>

      {/* Bottom Name Strip */}

      {/* Decorative floating elements - positioned to not interfere */}
      <div className="absolute bottom-20 right-8 text-white/30 text-sm font-mono animate-pulse hidden lg:block">
        <div>const creative = true;</div>
        <div>{"{ innovation, passion }"}</div>
        <div>import Dreams from 'reality'</div>
      </div>
    </section>
  )
}

export default HeroSection

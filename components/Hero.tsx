// components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            🏆 5x Speed Queen Excellence Award Winner
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Customized Laundry Rooms<br />
            <span className="text-yellow-400">Since 1997</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Family-owned commercial laundry equipment specialists serving multi-family properties across NYC's five boroughs, Westchester, and Long Island.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>Same-Day Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>Family-Owned & Operated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span>27+ Years Experience</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors text-center border border-white/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
// components/Testimonials.tsx
export default function Testimonials() {
    const testimonials = [
      {
        quote: "TediMatts transformed our laundry room from a revenue drain to a resident amenity. Service calls dropped 95% after the Speed Queen installation.",
        author: "Michael Chen",
        title: "Property Manager",
        company: "Astoria Gardens Co-op",
        rating: 5
      },
      {
        quote: "Family-owned makes all the difference. When we call, Teddy Jr. answers. Same-day service isn't just a promise—it's their standard.",
        author: "Sarah Rodriguez",
        title: "Board President",
        company: "Upper West Side Condos",
        rating: 5
      },
      {
        quote: "Our laundry revenue increased 40% in the first year. The consultation was free, the recommendations were spot-on, and the installation was flawless.",
        author: "David Kim",
        title: "Facilities Director",
        company: "Brooklyn Multi-Family Properties",
        rating: 5
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Property Managers Across NYC
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See why co-op boards and property managers choose TediMatts for their laundry operations.
            </p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
  
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
  
                {/* Author Info */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Join hundreds of satisfied property managers in NYC
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    );
  }
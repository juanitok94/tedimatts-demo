// app/portfolio/page.tsx
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      buildingName: "75-Unit Co-op",
      location: "Astoria, Queens",
      description: "Complete laundry room modernization with new Speed Queen equipment, resulting in 95% reduction in service calls and 40% revenue increase."
    },
    {
      id: 2,
      buildingName: "120-Unit High-Rise",
      location: "Upper West Side, Manhattan",
      description: "Full-scale renovation including equipment upgrade, room redesign, and implementation of card payment system for enhanced resident convenience."
    },
    {
      id: 3,
      buildingName: "90-Unit Apartment Complex",
      location: "Brooklyn Heights, Brooklyn",
      description: "Energy-efficient equipment installation with smart monitoring technology, reducing operational costs while improving tenant satisfaction."
    },
    {
      id: 4,
      buildingName: "150-Unit Luxury Building",
      location: "Midtown East, Manhattan",
      description: "Premium laundry solution featuring high-capacity washers, mobile app integration, and 24/7 maintenance support for seamless operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Transforming laundry rooms across NYC for over 28 years
          </p>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Placeholder Image */}
                <div className="bg-gray-300 aspect-[4/3] w-full"></div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.buildingName}
                  </h3>
                  <p className="text-blue-900 font-semibold mb-3">
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Project: 75-Unit Astoria Co-op
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="bg-gray-300 aspect-[4/3] w-full rounded-lg"></div>
            
            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* The Challenge */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This 75-unit co-op in Astoria was experiencing frequent equipment breakdowns, 
                  high maintenance costs, and declining resident satisfaction. The outdated 
                  laundry equipment was unreliable, leading to constant service calls and 
                  frustrated tenants. The building management needed a comprehensive solution 
                  that would reduce operational headaches while increasing revenue potential.
                </p>
              </div>

              {/* The Solution */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Solution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  TediMatts conducted a thorough assessment and installed a complete suite of 
                  new Speed Queen commercial washers and dryers. We redesigned the laundry room 
                  layout for optimal efficiency, implemented a modern card payment system, and 
                  established a proactive maintenance program. Our team provided comprehensive 
                  training for building staff and residents.
                </p>
              </div>

              {/* The Results */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  The Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                    <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
                    <p className="text-gray-700 font-semibold">Reduction in service calls</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                    <div className="text-3xl font-bold text-blue-900 mb-2">40%</div>
                    <p className="text-gray-700 font-semibold">Revenue increase</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                    <div className="text-3xl font-bold text-blue-900 mb-2">85%</div>
                    <p className="text-gray-700 font-semibold">Tenant satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
                <p className="text-gray-700 italic mb-4 text-lg">
                  "The transformation has been incredible. We went from constant complaints 
                  and emergency repairs to a laundry room that runs smoothly day after day. 
                  The revenue increase was a welcome bonus, but the peace of mind is priceless."
                </p>
                <p className="text-gray-900 font-semibold">
                  — Maria Rodriguez, Property Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">Buildings Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">28</div>
              <p className="text-xl text-blue-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-xl text-blue-100">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Laundry Room?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free consultation and see what's possible
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
          >
            Schedule Free Site Survey
          </Link>
        </div>
      </section>
    </div>
  );
}


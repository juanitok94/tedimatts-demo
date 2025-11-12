// components/Services.tsx
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🏢',
      title: 'Equipment Installation',
      description: 'Professional installation of Speed Queen commercial washers and dryers customized for your property.',
      link: '/services#installation'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Repair',
      description: 'Same-day emergency service and preventive maintenance to keep your laundry room running smoothly.',
      link: '/services#maintenance'
    },
    {
      icon: '💰',
      title: 'Revenue Optimization',
      description: 'Maximize your laundry room income with data-driven pricing strategies and equipment upgrades.',
      link: '/services#revenue'
    },
    {
      icon: '📊',
      title: 'Facility Assessment',
      description: 'Free consultation and space planning to design the optimal laundry solution for your building.',
      link: '/services#assessment'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Laundry Room Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From installation to ongoing maintenance, we handle every aspect of your commercial laundry operation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-400 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
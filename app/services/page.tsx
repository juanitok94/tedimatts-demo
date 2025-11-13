// app/services/page.tsx
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'installation',
      icon: '🏢',
      title: 'Equipment Installation',
      description: 'Professional installation of commercial laundry equipment customized for your property.',
      details: [
        'Speed Queen commercial washers and dryers',
        'Custom room design and layout optimization',
        'Electrical and plumbing coordination',
        'Equipment configuration and programming',
        'Resident training and documentation',
        'Post-installation follow-up and support'
      ],
      benefits: [
        'Maximize space efficiency in your laundry room',
        'Reduce energy and water consumption',
        'Minimize future maintenance issues',
        'Increase resident satisfaction'
      ]
    },
    {
      id: 'maintenance',
      icon: '🔧',
      title: 'Maintenance & Repair',
      description: 'Same-day emergency service and preventive maintenance to keep your laundry room running smoothly.',
      details: [
        'Same-day emergency service across NYC',
        'Preventive maintenance programs',
        'Parts inventory and rapid replacement',
        '24/7 emergency hotline',
        'Detailed service documentation',
        'Warranty support and management'
      ],
      benefits: [
        'Reduce downtime and resident complaints',
        'Extend equipment lifespan',
        'Lower long-term operating costs',
        'Direct access to our team—no call centers'
      ]
    },
    {
      id: 'revenue',
      icon: '💰',
      title: 'Revenue Optimization',
      description: 'Maximize your laundry room income with data-driven pricing strategies and equipment upgrades.',
      details: [
        'Revenue analysis and benchmarking',
        'Pricing strategy recommendations',
        'Equipment upgrade ROI projections',
        'Competitive market analysis',
        'Usage pattern evaluation',
        'Technology integration (card systems, apps)'
      ],
      benefits: [
        'Increase laundry revenue by 30-40%',
        'Data-driven decision making',
        'Competitive pricing strategies',
        'Modern payment options for residents'
      ]
    },
    {
      id: 'assessment',
      icon: '📊',
      title: 'Facility Assessment',
      description: 'Free consultation and space planning to design the optimal laundry solution for your building.',
      details: [
        'Complimentary on-site evaluation',
        'Space planning and optimization',
        'Equipment capacity recommendations',
        'Budget planning and financing options',
        'Timeline and project management',
        'Regulatory compliance review'
      ],
      benefits: [
        'No-obligation professional assessment',
        'Tailored solutions for your property',
        'Clear project roadmap and costs',
        'Avoid costly mistakes and oversizing'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Commercial Laundry Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From initial consultation to ongoing maintenance, TediMatts provides end-to-end laundry room solutions for multi-family properties across NYC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
              >
                Schedule Free Assessment
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors text-center border border-white/30"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Icon & Title */}
                <div className="lg:w-1/3">
                  <div className="text-7xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Details & Benefits */}
                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                    {/* What's Included */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-2 mb-8">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Benefits */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-yellow-400 mt-1">★</span>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Laundry Room?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation consultation from NYC's trusted laundry equipment specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a 
              href="tel:+1234567890" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border border-white/30"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About TediMatts
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Family-Owned Excellence Since 1997
          </p>
        </div>
      </section>

      {/* Family Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in 1997 by <strong>Teddy Mottola Sr.</strong>, TediMatts began as a small, family-run operation focused on one simple promise: deliver dependable commercial laundry equipment and service to New York City's multi-family buildings. Over 28 years later, that promise still guides everything we do.
            </p>
            
            <p>
              As the company grew, so did the family involvement. Today, TediMatts is proudly led by the founder's sons—<strong>Teddy Mottola Jr.</strong> (VP) and <strong>Matt Mottola</strong>—who carry forward the values they learned growing up in the business: honesty, reliability, and treating every building like a long-term relationship, not a one-time transaction.
            </p>
            
            <p>
              With deep roots across all five boroughs, Westchester, and Nassau County, we specialize in serving NYC multi-family properties with the personal attention only a family business can provide. Our commitment is simple: show up, solve problems, and stand behind every machine we install.
            </p>
          </div>

          {/* Why Family-Owned Matters Subsection */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Family-Owned Matters
            </h3>
            <p className="text-gray-700 mb-4">
              In an industry rapidly consolidating—where competitors like Hercules were acquired by WASH in 2019—TediMatts is one of the last truly <strong>family-owned</strong> commercial laundry partners in the region. That means no corporate layers, no revolving personnel, and no 1-800 numbers.
            </p>
            <p className="text-gray-700">
              You work directly with the same family that has been answering phones since 1997. The benefit is continuity: long-standing relationships, real accountability, and service decisions made by people who genuinely know your building.
            </p>
          </div>
        </div>
      </section>

      {/* Speed Queen Excellence Awards Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Award-Winning Service
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-900 font-semibold mb-8">
              Speed Queen Excellence Awards
            </h3>
          </div>

          {/* Award Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {[2015, 2016, 2017, 2018, 2019].map((year) => (
              <div
                key={year}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg md:text-xl shadow-lg"
              >
                {year}
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Five consecutive years of excellence recognized by Speed Queen, the industry's leading commercial laundry equipment manufacturer. This award recognizes outstanding service, customer satisfaction, and commitment to excellence in the commercial laundry industry.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Timeline Milestones
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-900 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1997 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  1997
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">TediMatts Founded</h3>
                  <p className="text-gray-700">
                    TediMatts founded by <strong>Teddy Mottola Sr.</strong> with a mission to modernize laundry rooms for NYC multi-family buildings.
                  </p>
                </div>
              </div>

              {/* 2015-2019 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  2015-19
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Speed Queen Excellence Awards</h3>
                  <p className="text-gray-700">
                    Earned <strong>five consecutive Speed Queen Excellence Awards</strong>.
                  </p>
                </div>
              </div>

              {/* 2020s */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  2020s
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expanded Operations</h3>
                  <p className="text-gray-700">
                    Expanded operations across all NYC boroughs, Westchester, and Nassau County; reached <strong>500+ buildings served</strong>.
                  </p>
                </div>
              </div>

              {/* Present */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  Now
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Present Day</h3>
                  <p className="text-gray-700">
                    <strong>28 years in business</strong>, still family-owned, providing route laundry services backed by personal accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TediMatts Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose TediMatts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Family-Owned Service */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">👨‍👩‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Family-Owned Service</h3>
              <p className="text-gray-700">
                Work directly with ownership—no corporate turnover, no call centers. We build relationships with property managers and boards that last decades.
              </p>
            </div>

            {/* Local Expertise */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Local Expertise</h3>
              <p className="text-gray-700">
                Nearly three decades specializing in NYC multi-family buildings. We understand the layouts, the logistics, the tenants, and the expectations.
              </p>
            </div>

            {/* Award-Winning Performance */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Award-Winning Performance</h3>
              <p className="text-gray-700">
                Five consecutive <strong>Speed Queen Excellence Awards (2015–2019)</strong> recognizing superior service quality, machine reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teddy Mottola Sr.</h3>
              <p className="text-gray-600 mb-2">Founder</p>
              <p className="text-sm text-gray-600">Established TediMatts in 1997</p>
            </div>

            {/* Teddy Jr. */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teddy Mottola Jr.</h3>
              <p className="text-gray-600 mb-2">Vice President</p>
              <p className="text-sm text-gray-600">Continuing the family legacy</p>
            </div>

            {/* Matt */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Matt Mottola</h3>
              <p className="text-gray-600 mb-2">Co-Owner</p>
              <p className="text-sm text-gray-600">Leading operations and service</p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
            The Mottola family brings decades of combined experience in commercial laundry equipment, ensuring that every project receives the personal attention and expertise that has made TediMatts a trusted name in NYC.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Certifications & Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-semibold mb-2">Speed Queen Certified</h3>
              <p className="text-sm text-blue-100">Authorized dealer and service provider</p>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-blue-100">Fully licensed in New York State</p>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-semibold mb-2">Industry Member</h3>
              <p className="text-sm text-blue-100">Active member of industry associations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience the TediMatts Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Family-owned service with award-winning results
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}


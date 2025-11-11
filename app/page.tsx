// app/page.tsx
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* More sections will go here */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">
          More content coming soon: Services Grid, Testimonials, FAQ Preview...
        </p>
      </div>
    </>
  );
}
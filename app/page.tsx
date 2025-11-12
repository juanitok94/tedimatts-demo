// app/page.tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQPreview from '@/components/FAQPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <FAQPreview />
    </>
  );
}
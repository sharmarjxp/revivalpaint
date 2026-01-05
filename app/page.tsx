'use client';

import { TopBar } from './mainpage-sections/TopBar';
import { Navbar } from './mainpage-sections/Navbar';
import { Hero } from './mainpage-sections/Hero';
import { Services } from './mainpage-sections/Services';
import { Transform } from './mainpage-sections/Transform';
import { RecentWork } from './mainpage-sections/RecentWork';
import { Stats } from './mainpage-sections/Stats';
import { WhyUs } from './mainpage-sections/WhyUs';
import { Testimonials } from './mainpage-sections/Testimonials';
import { PromiseSection } from './mainpage-sections/PromiseSection';
import { FAQ } from './mainpage-sections/FAQ';
import { Blog } from './mainpage-sections/Blog';
import { MapSection } from './mainpage-sections/MapSection';
import { ContactSection } from './mainpage-sections/ContactSection';
import { Footer } from './mainpage-sections/Footer';
import { FloatingButtons } from './mainpage-sections/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-text-dark selection:bg-accent selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Transform />
      <Services />
      <RecentWork />
      <Stats />
      <Testimonials />
      <WhyUs />
      <PromiseSection />
      <FAQ />
      <Blog />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

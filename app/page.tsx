import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
// import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import Software from "@/components/Software";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full">
      <main className="flex flex-col gap-[32px] items-stretch w-full">
        
        <Navigation />
        <Hero />
        <Review />
        {/* <Testimonials /> */}
        <Packages />
        <Software />
        <Contact />
        <Footer />

      </main>
      
    </div>
  );
}

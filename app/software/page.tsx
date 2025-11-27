import Navigation from "@/components/Navigation";
import Software from "@/components/Software";
import Footer from "@/components/Footer";

export default function SoftwarePage() {
  return (
    <div className="font-sans min-h-screen w-full">
      <main className="flex flex-col gap-[32px] items-stretch w-full">
        <Navigation />
        <Software />
        <Footer />
      </main>
    </div>
  );
}


import Image from "next/image";
import Hero from "@/app/Component/Hero";
import Nav from "./Component/Navbar";
import About from "./Component/About";
import ProjectsSection from "./Component/Project";
import Email from "./Component/Email";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto px-4 py-6"> {/* Adjusted for better padding */}
      <div className="container mx-auto">
        <Navbar />
        
        <div className="mt-16 mx-auto px-6 md:px-12 py-8"> {/* Added more spacing */}
          <Hero />
        </div>
        
        <div className="mt-16 mx-auto px-6 md:px-12 py-8"> {/* Added space between sections */}
          <About />
        </div>

        <div className="mt-16 mx-auto px-6 md:px-12 py-8"> {/* Consistent spacing between sections */}
          <ProjectsSection />
        </div>

        <div className="mt-16 mx-auto px-6 md:px-12 py-8"> {/* Consistent spacing between sections */}
            <Email />
        </div>
        


        <Footer />
      </div>
    </main>
  );
}


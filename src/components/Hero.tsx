import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Left side - Visual scene area (fixed width) */}
      <div className="w-1/3 xl:w-2/5 relative">
      <img 
    src="/mylamp.png" 
    alt="Hero Visual" 
    className="object-contain mx-auto rounded-lg shadow-lg"
  />
        {/* This space is reserved for the DeskLamp component */}
      </div>
      
      {/* Right side - Content area */}
      <div className="flex-1 flex items-center justify-center lg:justify-start">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8 max-w-4xl text-center lg:text-left">
            {/* Main heading with gradient text */}
            <div className="space-y-4">
              <h1 className="text-8xl font-ribeye text-white">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  ISAR KAUR
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Building digital experiences through{" "}
                <span className="text-primary font-medium">code</span> and{" "}
                <span className="text-accent font-medium">creativity</span>
              </p>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              BCA Student at Christ University passionate about blending technology with design
              to create meaningful digital solutions and engaging user experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-smooth font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
             <a
  href="/Isar_Kaur_Bal_Resume.pdf"
  download
  className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6 text-lg rounded-md"
>
  <Download className="mr-2 h-5 w-5" />
  Get Resume
</a>

            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;
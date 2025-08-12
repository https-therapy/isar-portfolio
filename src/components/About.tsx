import { Card } from "@/components/ui/card";
import { Code, Palette, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technology Enthusiast",
      description: "Passionate about exploring new technologies and building innovative solutions"
    },
    {
      icon: Palette,
      title: "Creative Designer",
      description: "Enjoy blending aesthetics with functionality in every project I create"
    },
    {
      icon: Users,
      title: "Collaborative Leader",
      description: "Love working with teams and leading initiatives that make a real impact"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Hello! I'm Isar, a BCA student with a passion for innovation.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's in Computer Applications at Christ University, 
                  Bangalore, I'm someone who enjoys blending <strong className="text-foreground">technology and creativity</strong> to 
                  build meaningful digital experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether I'm developing applications during my studies, contributing to open-source projects, 
                  or designing user interfaces, I'm naturally proactive when learning something new. 
                  I have a keen interest in <strong className="text-foreground">problem-solving</strong> and am always excited by 
                  challenges that push me to think outside the box.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of <strong className="text-foreground">collaboration</strong> and enjoy working with 
                  diverse teams to bring ideas to life. My goal is to create technology solutions 
                  that are not just functional, but also intuitive and engaging.
                </p>
              </div>
              
              {/* Languages */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Languages I speak:</h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Hindi', 'Punjabi', 'French (A1)'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - Highlight cards */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 glass-card hover:glow-primary transition-smooth group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-bounce">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
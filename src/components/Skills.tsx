import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Database, Smartphone, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "text-blue-400",
      skills: ["Node.js", "Angular", "React", ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      color: "text-green-400",
      skills: ["MongoDB", "Firebase", "Git", "VS Code", "Google Workspace", "Microsoft 365", "Notion", "Procreate"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-purple-400",
      skills: ["Android Development", "Java", "Firebase Integration", "Chatbot Development"]
    },
    {
      title: "Design & Creative",
      icon: Palette,
      color: "text-accent",
      skills: ["Digital Art", "Game Character Design", "UI/UX Design", "Creative Content", "Visual Design"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-orange-400",
      skills: ["Leadership", "Communication", "Creativity", "Collaboration", "Problem Solving", "Product Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, creative abilities, and collaborative strengths
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 glass-card hover:glow-primary transition-smooth group"
              >
                <div className="space-y-4">
                  {/* Category header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-bounce">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Additional info */}
          <div className="mt-16 text-center">
            <Card className="p-8 glass-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about staying current with emerging technologies and continuously expanding my skill set. 
                Currently exploring areas like machine learning, cloud computing, and advanced mobile development frameworks. 
                I believe in the power of combining technical expertise with creative thinking to solve real-world problems.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
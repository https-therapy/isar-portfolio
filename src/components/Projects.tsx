import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Palette, Code, Users, Smartphone, Image } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      title: "Digital Art Internship Projects",
      description: "Designed game characters and assets demonstrating creativity and detail orientation. Created user engagement materials and game storytelling elements that enhanced player experience.",
      tags: ["Character Design", "Digital Art", "Game Assets", "UI/UX"],
      icon: Palette,
      type: "Design & Creative",
      period: "2024",
      images: [
  
  { url: "/galleryimages/character-2.jpeg", caption: "Game Asset Creation" },
  { url: "/galleryimages/character-3.jpeg", caption: "UI/UX Design Elements" },
  { url: "/galleryimages/character-1.jpeg", caption: "Character Design Concepts" },
  { url: "/galleryimages/character-4.jpeg", caption: "Digital Art Portfolio" },
  { url: "/galleryimages/character-5.jpeg", caption: "Creative Process Documentation" },
  { url: "/galleryimages/character-6.jpeg", caption: "sword" }
      ]
    },
    {
      title: "Employee Management System",
      description: "Contributed to a comprehensive web application with iOS money management app development, analytics tracking and bug resolution. Gained hands-on experience in full-stack development.",
      tags: ["Full-Stack", "iOS Development", "Analytics", "Bug Tracking"],
      icon: Code,
      type: "Web Development",
      period: "May - June 2024",
      images: [
        { url: "/galleryimages/Picture4.jpeg", caption: "Game Asset Creation" },
  { url: "/galleryimages/Picture3.jpeg", caption: "UI/UX Design Elements" },
  { url: "/galleryimages/Picture6.jpeg", caption: "Character Design Concepts" },
  { url: "/galleryimages/Picture5.jpeg", caption: "Digital Art Portfolio" },
  { url: "/galleryimages/Picture1.jpeg", caption: "Creative Process Documentation" }
  
      ]
    },
    {
      title: "Home Service Website",
      description: "Built a complete service platform with full-stack integration including HTML, CSS, MongoDB integration. Features responsive design and efficient data management.",
      tags: ["HTML", "CSS", "MongoDB", "Full-Stack", "Responsive Design"],
      icon: Code,
      type: "Web Development",
      period: "2023",
     
    },
    {
      title: "Foodlink Donation App",
      description: "Collaborated with German students on a food donation Android app for social impact. Focused on reducing food waste while helping communities in need.",
      tags: ["Android", "Social Impact", "International Collaboration", "Java"],
      icon: Users,
      type: "Mobile & Social",
      period: "2025",
      images: [
       { url: "/galleryimages/fl_ss.jpeg", caption: "Game Asset Creation" },
  { url: "/galleryimages/fl_me.jpeg", caption: "UI/UX Design Elements" },
  { url: "/galleryimages/fl_q.jpeg", caption: "Character Design Concepts" },
  { url: "/galleryimages/fl_idea.jpeg", caption: "Digital Art Portfolio" },
  { url: "/galleryimages/foodlink.jpeg", caption: "Creative Process Documentation" }
      ]
    },
    {
      title: "Blood Donation App",
      description: "Developed an Android application using Firebase and chatbot integration. Created an intuitive platform connecting blood donors with those in need.",
      tags: ["Android", "Firebase", "Chatbot", "Healthcare"],
      icon: Smartphone,
      type: "Mobile Development",
      period: "2024",
      images: [
        { url: "/galleryimages/bb1.jpeg", caption: "Game Asset Creation" },
  { url: "/galleryimages/bb2.jpeg", caption: "UI/UX Design Elements" },
  { url: "/galleryimages/blood.jpeg", caption: "Character Design Concepts" },
      ]
    },
    {
      title: "Campus Tour in VR",
      description: "Led immersive campus tour experiences and VH campus initiatives. Combined leadership skills with creative event planning and student engagement.",
      tags: ["Leadership", "Event Planning", "Student Engagement", "Public Speaking"],
      icon: Users,
      type: "AR-VR",
      period: "2025",
      images: [
        { url: "/galleryimages/vrcampus.jpeg", caption: "Game Asset Creation" },
  { url: "/galleryimages/vr1.jpeg", caption: "UI/UX Design Elements" },
  { url: "/galleryimages/vr2.jpeg", caption: "Character Design Concepts" },
  { url: "/galleryimages/vr3.jpeg", caption: "Digital Art Portfolio" },
  { url: "/galleryimages/vr4.jpeg", caption: "Creative Process Documentation" }
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "Design & Creative": return "text-accent";
      case "Web Development": return "text-primary";
      case "Mobile Development": return "text-green-400";
      case "Mobile & Social": return "text-purple-400";
      case "Leadership & Events": return "text-orange-400";
      default: return "text-primary";
    }
  };

  const getCardGlow = (type: string) => {
    switch (type) {
      case "Design & Creative": return "hover:glow-accent";
      case "Web Development": return "hover:glow-primary";
      default: return "hover:glow-primary";
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my journey through technology, creativity, and collaboration
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-6 glass-card ${getCardGlow(project.type)} transition-smooth group cursor-pointer`}
              >
                <div className="space-y-4">
                  {/* Project header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-secondary group-hover:scale-110 transition-bounce`}>
                      <project.icon className={`h-6 w-6 ${getIconColor(project.type)}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.period}
                    </Badge>
                  </div>
                  
                  {/* Project content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {project.type}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                     {/* Tags */}
                     <div className="flex flex-wrap gap-2">
                       {project.tags.map((tag, tagIndex) => (
                         <Badge 
                           key={tagIndex} 
                           variant="outline" 
                           className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                         >
                           {tag}
                         </Badge>
                       ))}
                     </div>
                     
                     {/* View Gallery Button */}
                     {project.images && project.images.length > 0 && (
  <Button
    variant="outline"
    size="sm"
    onClick={() => setSelectedProject(project)}
    className="w-full mt-3 group border-primary/30 hover:border-primary/50 
              hover:bg-primary/10 transition-all duration-300"
  >
    <Image className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
    View Gallery
  </Button>
)}

                   </div>
                 </div>
              </Card>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or collaborate on something exciting?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-primary transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || { title: "", images: [] }}
      />
    </section>
  );
};

export default Projects;
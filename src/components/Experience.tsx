import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Digital Art Intern",
      company: "Fireship Studios",
      period: "2024",
      location: "Remote",
      type: "Internship",
      description: "Designed game characters and assets demonstrating creativity and detail orientation in user engagement and game storytelling.",
      highlights: [
        "Created detailed game character designs",
        "Developed visual assets for user engagement",
        "Contributed to game storytelling through visual elements",
        "Collaborated with development team on creative direction"
      ],
      skills: ["Digital Art", "Character Design", "Game Assets", "Creative Direction"]
    },
    {
      title: "Summer Intern",
      company: "WMS Technologies",
      period: "May - June 2024",
      location: "Bangalore",
      type: "Internship",
      description: "Contributed to an Employee Management Web App and iOS money management app development and analytics tracking with bug resolution.",
      highlights: [
        "Developed features for Employee Management System",
        "Worked on iOS money management application",
        "Worked majorly with the testing team",
        "Resolved bugs and improved application performance"
      ],
      skills: ["iOS Testing", "Analytics", "Debugging"]
    },
    {
      title: "Web Development Project",
      company: "Personal Project",
      period: "2024",
      location: "Academic",
      type: "Project",
      description: "Built a comprehensive home service website with full-stack integration including MongoDB database management.",
      highlights: [
        "Designed responsive user interface",
        "Implemented full-stack architecture",
        "Integrated MongoDB for data management",
        "Ensured cross-browser compatibility"
      ],
      skills: ["HTML", "CSS", "MongoDB", "Full-Stack", "Database Design"]
    }
  ];

  const leadership = [
    {
      role: "Sub-Head, Media & Design",
      organization: "University Events",
      achievement: "Led poster and logo creation for university events, managing creative design initiatives"
    },
    {
      role: "Magazine Head, School of Science",
      organization: "Christ University",
      achievement: "Oversees content creation, editing, and publication highlighting student achievements."},
    {
      role: "International Collaboration",
      organization: "Foodlink App Project",
      achievement: "Collaborated with German students on food donation Android app, demonstrating cross-cultural teamwork"
    },
    {
      role: "VR campus tour",
      organization: "GameQuest & University Activities",
      achievement: "Collaborated with a team to create a VR campus tour for my university's Central Campus"
    }
  ];

  const certifications = [
    "Product Management & Agile: AI Programs | IIT Patna (Ongoing)",
    "HR Analytics | IIT Roorkee | NPTEL (Score: 87%)",
    "Kotlin for Android | Infosys Springboard",
    "French A1 | Indian Institute of Foreign Languages",
    "India Gateway Program | Christ University-THWS Germany | App creation"
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-primary";
      case "Project": return "bg-accent";
      default: return "bg-secondary";
    }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">


              My journey through internships, projects, and leadership roles
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 glass-card hover:glow-primary transition-smooth">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left column - Basic info */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                        <p className="text-lg text-foreground font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge className={`${getTypeColor(exp.type)} text-white`}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Middle column - Description and highlights */}
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership & Extracurricular */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Leadership & Extracurricular</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <Card key={index} className="p-6 glass-card hover:glow-accent transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{item.role}</h4>
                      <p className="text-sm text-accent font-medium">{item.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.achievement}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Achievements</h3>
            <Card className="p-6 glass-card">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
            <div className="flex space-x-6 overflow-x-auto py-4 px-2 max-w-full scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary">
            <Card className="p-8 glass-card hover:glow-primary transition-smooth max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg inline-block">
                  <Building className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-primary">10th Grade</h4>
                  <p className="text-lg text-foreground font-medium">Rukmini Devi Public School, New Delhi </p>
                  <p className="text-muted-foreground">2020–2021 </p>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Passed Grade 10 board exams with a 92.6% score, demonstrating academic excellence early on.
                </p>
              </div>
            </Card>
            <Card className="p-8 glass-card hover:glow-primary transition-smooth max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg inline-block">
                  <Building className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-primary">12th Grade</h4>
                  <p className="text-lg text-foreground font-medium">Vidya Devi Jindal School, Haryana</p>
                  <p className="text-muted-foreground">2022–2023</p>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Completed Pre-University Course, securing 85% in Grade 12 with strong academic performance.
                </p>
              </div>
            </Card>
            <Card className="p-8 glass-card hover:glow-primary transition-smooth max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg inline-block">
                  <Building className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-primary">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-lg text-foreground font-medium">Christ University, Bangalore</p>
                  <p className="text-muted-foreground">Present</p>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Currently pursuing a Bachelor of Computer Applications with a focus on software development and Product Management skills.
                </p>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
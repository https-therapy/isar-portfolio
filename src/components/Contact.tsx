import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "isarbal02@gmail.com",
      href: "mailto:isarbal02@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/isar-kaur-b140742bb/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "Portfolio",
      value: "View my work",
      href: "#", // Replace with actual portfolio link
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
      color: "text-green-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Isar,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoLink = `mailto:isarbal02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate, discuss opportunities, or just say hello? I'd love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column - Contact info and CTA */}
            <div className="space-y-8">
              <Card className="p-8 glass-card">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to discuss new opportunities, collaborative projects, 
                  or innovative ideas. Whether you're looking for a passionate developer, 
                  a creative collaborator, or just want to chat about technology and design, 
                  I'm here to connect!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-bounce">
                        <contact.icon className={`h-5 w-5 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-smooth font-medium"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-primary hover:glow-primary transition-smooth flex-1"
                    onClick={() => window.location.href = 'mailto:isarbal02@gmail.com'}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex-1"
                    onClick={() => window.open('https://www.linkedin.com/in/isar-kaur-b140742bb/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column - Contact form */}
            {/* Right column - Image instead of contact form */}
                  <Card className="p-8 glass-card flex items-center justify-center">
                   <img 
                     src="devgirlme.png" 
                        alt="Contact illustration" 
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                  </Card>

                
                
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="p-8 glass-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently open to internship opportunities, collaborative projects, 
                and freelance work. Let's build something amazing together!
              </p>
            
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
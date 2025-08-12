import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8">
        
          
          
          
        
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
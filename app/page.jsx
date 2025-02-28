import Image from "next/image";
import Hero from "@/components/hero"
import { Mail, Phone, MapPin} from "lucide-react";
import { Button } from "@/components/ui/button";
import CursorFollow from "@/components/cursor-follow";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import RevealOnScroll from "@/components/reveal-on-scroll";
import ContactForm from "@/components/contact-form";
import aboutImg from "@/public/about.svg"

export default function Home() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <CursorFollow />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Me" 
            subtitle="Get to know more about my skills and experience"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg">
                <Image
                  src={aboutImg}
                  alt="Developer Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Web Developer with a passion for creating beautiful interfaces</h3>
                <p className="text-muted-foreground mb-6">
                  I'm a full-stack web developer with experience in building modern, responsive websites and applications. I specialize in React, Next.js, and Node.js, with a strong focus on creating intuitive user experiences.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>React / Next.js</li>
                      <li>JavaScript</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion / GSAP</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
                
                {/* <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button> */}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Projects" 
            subtitle="Check out some of my recent work"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <RevealOnScroll>
              <ProjectCard
                title="Tourism & Hospitality"
                description="A full-featured farm and resort website with accommodation details, activity highlights, gallery, and booking functionality"
                image="/drbhoir.png"
                tags={["React", "Tailwind CSS", "Vite", "JavaScript"]}
                liveUrl="https://drbhoirfarmandresort.com"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <ProjectCard
                title="Portfolio Website"
                description="A modern portfolio website for a physiotherapist showcasing their experiences and services offered."
                image="/priyanka.png"
                tags={["React", "Tailwind CSS", "FramerMotion", "JavaScript"]}
                liveUrl="https://priyankanairphysio.netlify.app"
              />
            </RevealOnScroll>
            
            {/* <RevealOnScroll delay={400}>
              <ProjectCard
                title="Task Management App"
                description="A productivity app that helps users organize tasks, set priorities, and track progress."
                image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
                tags={["React", "Redux", "Node.js", "MongoDB"]}
                liveUrl="https://example.com"
                githubUrl="https://github.com"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <ProjectCard
                title="Real Estate Website"
                description="A property listing website with advanced search filters and interactive maps."
                image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                tags={["Next.js", "Mapbox", "Prisma", "PostgreSQL"]}
                liveUrl="https://example.com"
                githubUrl="https://github.com"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <ProjectCard
                title="Weather Dashboard"
                description="A weather application that provides real-time forecasts and historical weather data."
                image="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop"
                tags={["React", "Chart.js", "Weather API"]}
                liveUrl="https://example.com"
                githubUrl="https://github.com"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={600}>
              <ProjectCard
                title="Blog Platform"
                description="A content management system for creating and publishing blog posts with rich text editing."
                image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                tags={["Next.js", "Sanity CMS", "Tailwind CSS"]}
                liveUrl="https://example.com"
                githubUrl="https://github.com"
              />
            </RevealOnScroll> */}
          </div>
          
          {/* <div className="text-center mt-12">
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div> */}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a project in mind? Let's work together!"
          />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <RevealOnScroll>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:nair.sushil621@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        nair.sushil621@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        Mumbai, Maharashtra
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+918976022014" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        +91-8976022014
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-card rounded-lg border border-border/50">
                  <h4 className="font-medium mb-2">Current Status</h4>
                  <p className="text-muted-foreground">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available for freelance projects.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Sushil Nair. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+918976022014" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:nair.sushil621@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
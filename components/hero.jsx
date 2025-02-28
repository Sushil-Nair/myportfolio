"use client"
import Link from "next/link";
import { ArrowDown, Mail, Phone, MapPin} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import RevealOnScroll from "@/components/reveal-on-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

const hero = () => {
    const tiltRef = useRef(null)
    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)

    const mouseMoving = (e) => {
        setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - (tiltRef.current.getBoundingClientRect().width/2))/20)
        setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)

        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    }

    useGSAP(function() {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 1,
            ease: "elastic.Out"
        })
    }, [xVal, yVal]
    );
  return (
      <section onMouseMove={(e) => {mouseMoving(e)}} id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
        <div ref={tiltRef} className="container mx-auto px-4 text-center">
           <RevealOnScroll>
            <p className="text-lg md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I am <span className="text-accent">Sushil Nair</span>
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Web Developer & <br className="md:hidden" />
              UI Designer
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Specializing in{" "}
              <AnimatedText 
                texts={["E-commerce", "Business Websites", "Custom UIs"]} 
                className="text-primary font-medium"
              />
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                <Link href="#projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={600}>
            <div className="flex justify-center space-x-6 mb-12">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                <a href="tel:+918976022014" target="_blank" rel="noopener noreferrer" aria-label="Phone Number">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                <a href="mailto:nair.sushil621@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 text-primary" />
            </Link>
          </div>
      </section>
  )
}

export default hero
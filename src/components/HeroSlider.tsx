import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: true });

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-glow to-primary min-h-[600px]">
      <Carousel
        plugins={[autoplay]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative min-h-[600px] flex items-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-primary-glow mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                        Get Quote
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? "bg-primary-foreground" 
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { 
  IntroSlide,
  Slide1, 
  Slide2, 
  Slide3, 
  Slide4, 
  Slide5, 
  Slide6, 
  Slide7, 
  Slide8 
} from './components/slide-content';

const slides = [
  <IntroSlide key="0" />,
  <Slide1 key="1" />,
  <Slide2 key="2" />,
  <Slide3 key="3" />,
  <Slide4 key="4" />,
  <Slide5 key="5" />,
  <Slide6 key="6" />,
  <Slide7 key="7" />,
  <Slide8 key="8" />
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        nextSlide();
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  // Track fullscreen changes
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (err) {
      // no-op
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-gray-200 p-4 flex items-center justify-between">
        {/* Previous Button */}
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen + Next Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={toggleFullscreen}
            className="flex items-center gap-2"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              <>
                <Minimize className="w-4 h-4" />
                Fullscreen
              </>
            ) : (
              <>
                <Maximize className="w-4 h-4" />
                Fullscreen
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard Navigation Instructions */}
      <div className="absolute bottom-20 left-4 text-xs text-gray-600 bg-white bg-opacity-80 px-2 py-1 rounded">
        Use ← → arrow keys for navigation
      </div>
    </div>
  );
}
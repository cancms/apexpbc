import { useEffect, useState } from "react";

export default function ImageCarousel({ images }: any) {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe handling
  const handleTouchStart = (e: any) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // adjust sensitivity
    if (swipeDistance > minSwipeDistance) {
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg"
    onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img: any, index: number) => (
                <img
                    key={index}
                    src={img.src}
                    alt={`Slide ${index}`}
                    className="w-full flex-shrink-0 object-cover"
                    onClick={() => window.location.href = img.link}
                    draggable="false"
                />
        ))}
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_: any, index: number) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
}

export function PresentationSlide({ children, className = "" }: PresentationSlideProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-start p-16 ${className}`}>
      {children}
    </div>
  );
}
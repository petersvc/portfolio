import { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.classList.add('cursor-none');

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.05;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.05;

      const dx = mouse.current.x - ring.current.x;
      const dy = mouse.current.y - ring.current.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = Math.min(distance / 150, 0.25);

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate(${ring.current.x}px, ${ring.current.y}px)
          translate(-50%, -50%)
          rotate(${angle}deg)
          scale(${1 + scale}, ${1 - scale})
        `;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${mouse.current.x}px, ${mouse.current.y}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('cursor-none');
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50 w-20 h-20 rounded-full border border-neutral-400 opacity-40"
        style={{ left: 0, top: 0, transform: 'translate(-9999px, -9999px)' }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-50 w-2 h-2 bg-white rounded-full"
        style={{ left: 0, top: 0, transform: 'translate(-9999px, -9999px)' }}
      />
    </>
  );
}

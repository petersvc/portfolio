import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { Pyramid } from 'lucide-react';

export default function Header() {
  const [time, setTime] = useState('');
  const page = useLocation().pathname;

  function getPage(page: string) {
    switch (page) {
      case '/':
        return 'HOME';
      default:
        return page;
    }
  }

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const brTime = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo',
      }).format(now);
      setTime(brTime);
    }

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="h-[10vh] grid grid-cols-3 justify-between items-center px-28 pt-12 bg-amber-9000 border-bs border-dashed border-b-neutral-800/50">
        <div className="flex justify-start items-center font-extralight text-xs text-neutral-600 bg-amber-4000">
          <h2 className="text-neutral-500 mr-2"><Pyramid size={14} /></h2>
          <h2>PETER_COSTA</h2>
          <h2 className="ml-2 font-[Roboto] text-neutral-600">{time}</h2>
        </div>
        <div className="flex gap-2 justify-center items-center bg-sky-7000 ">
          <h2 className="font-extralight text-sm text-neutral-300">/{getPage(page)}</h2>
        </div>
        <div className="flex justify-end items-center bg-neutral-7000 h-full">
          <Navigation />
        </div>
      </section>
    </>
  );
}

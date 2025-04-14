import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './navigation/Navigation';

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
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="h-[6vh] grid grid-cols-3 justify-between items-center px-28 bg-amber-9000 border-b border-dashed border-b-neutral-900">
        <h1 className="font-extralight text-xs text-neutral-300 bg-amber-4000">
          PETER_COSTA <span className="ml-2 font-[Roboto] text-neutral-400">{time}</span>
        </h1>
        <div className="flex gap-2 justify-center items-center bg-sky-7000 ">
          {/* <div className="w-5 h-5 bg-transparent rounded-full border border-neutral-500 invisible" />
          <div className="w-5 h-5 bg-neutral-400 rounded-full border border-neutral-400 invisible" /> */}
          <span className="font-extralight text-xs text-neutral-300">
            /{getPage(page)}
          </span>
        </div>
        <div className="flex justify-end items-center bg-neutral-7000 h-full">
          <Navigation />
        </div>
      </section>
    </>
  );
}

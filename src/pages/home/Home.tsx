import { Mouse } from 'lucide-react';
import '../../app.css';

export default function Home() {
  return (
    <>
      <section className="h-full flex px-28 overflow-hidden">
        <div className="absolute grid grid-cols-10 w-[81.2%] h-[72vh] mt-[5vh] bg-amber-9500/10 z-1 divide-x-1 divide-dashed divide-neutral-800/40">
          {[...Array(10).keys()].map((item) => (
            <div key={item} className="h-full w-full flex flex-col justify-center items-center" />
          ))}
          <div className="col-start-6 col-end-7 h-full w-full flex justify-center items-end absolute mt-16">
            <Mouse />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center bg-amber-7000 z-2">
          <div className="w-full flex flex-col text-9xl ml-[-1%] text-neutral-200 font-black font-[Antonio]">
            <div className="flex items-center">
              <span className="scale-[100%] origin-top-left">HI, IM</span>
              <div className="w-48 h-3 bg-neutral-50 ml-10 mt-6"/>
            </div>
            
            <span className="scale-[100%] origin-top-left mt-8">PETER COSTA</span>
          </div>
          <div className="w-full flex flex-col text-md text-neutral-500 mt-16">
            <h2 className="scale-[100%] origin-top-left">FULLSTACK DEVELOPER</h2>
            <h2 className="scale-[100%] origin-top-left mt-1 text-sm">&#91;REACTJS, SPRING BOOT...&#93;</h2>
          </div>
        </div>
        <div className="w-full h-full bg-amber-9000"></div>
      </section>
    </>
  );
}

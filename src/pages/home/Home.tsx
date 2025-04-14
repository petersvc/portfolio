import '../../app.css';

export default function Home() {
  return (
    <>
      <section className="h-full flex px-28 overflow-hidden">
        <div className="absolute grid grid-cols-9 w-[88.5%] h-[88vh] bg-amber-9500 z-1 divide-x-1 divide-dashed divide-neutral-900/80">
          {[...Array(9).keys()].map((item) => (
            <div key={item} className="h-full w-full" />
          ))}
        </div>
        <div className="w-full h-full flex flex-col justify-center bg-amber-7000 z-2">
          <div className="w-full flex flex-col text-9xl ml-[-1%] text-neutral-200 font-black font-[Antonio]">
            <span className="scale-[100%] origin-top-left">HI, IM</span>
            <span className="scale-[100%] origin-top-left mt-8">PETER COSTA</span>
          </div>
          <div className="w-full flex flex-col text-md text-neutral-500 font-light mt-16">
            <span className="scale-[100%] origin-top-left">FULLSTACK DEVELOPER</span>
            <span className="scale-[100%] origin-top-left mt-1 text-sm">REACTJS, SPRING BOOT...</span>
          </div>
        </div>
        <div className="w-full h-full bg-amber-9000"></div>
      </section>
    </>
  );
}

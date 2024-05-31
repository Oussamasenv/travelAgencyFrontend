import EuropeImage from "../assets/europe.jpg"
import './continents.css'
import { useRef } from "react";
import { useEffect } from "react";

export default function Continents() {






           const scrollContainerRef = useRef(null);
      
                   const scrollLeft = () => {
            if (scrollContainerRef.current) {
              const firstChildWidth = scrollContainerRef.current.children[0].offsetWidth;
              scrollContainerRef.current.scrollBy({ left: -firstChildWidth, behavior: 'smooth' });
            }
          };
        
                  const scrollRight = () => {
            if (scrollContainerRef.current) {
              const firstChildWidth = scrollContainerRef.current.children[0].offsetWidth;
              scrollContainerRef.current.scrollBy({ left: firstChildWidth, behavior: 'smooth' });
            }
          };

        

        



    return (
            <div className = "m-10 mt-40 rounded-lg">
              <div className = "flex justify-between ml-8 mr-8 mb-1 mt-2 text-center items-center"><div className="flex flex-col items-start"><p className="uppercase font-semibold text-gray-600 text-xl">pret pour une nouvelle adventure?</p><p className="text-3xl uppercase font-bold">trouver votre prochaine desitination.</p></div><div><button onClick={scrollLeft} className="mr-4">left</button><button onClick={scrollRight}>right</button></div></div>
                  <div ref = {scrollContainerRef} className="hide-scrollbar snap-mandatory snap-x scroll-smooth ml-8 mr-8 mt-4 p-5 flex  overflow-x-auto h-[22rem] space-x-8">

    
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "/login"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>

        
      
    
            </div>
        </div>
    )
}


import EuropeImage from "../assets/europe.jpg"
import Asia from "../assets/asia2.png"
import Africa from "../assets/Africa.webp"
import America from "../assets/america.jpg"
import Australia from "../assets/australia.jpg"
import SouthAmerica from "../assets/SouthA.jpg"

import './continents.css'
import { useRef } from "react";

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
            <div className = "md:m-10 m-2 mt-60  mr-0 md:mt-40 rounded-lg">
              <div className = "flex justify-between ml-8 mr-8 mb-1 mt-2 text-center items-center">
                <div className="flex flex-col items-start text-left pr-6">
                  <p className="uppercase font-semibold text-gray-600 text-xl">pret pour une nouvelle adventure?</p>
                  <p className="text-3xl uppercase font-bold">trouver votre prochaine desitination.</p>
                  </div>
                  <div>
                    <button onClick={scrollLeft} className="mr-4">left</button>
                    <button onClick={scrollRight}>right</button>
                    </div>
                    </div>
                  <div ref = {scrollContainerRef} className="hide-scrollbar font-bold snap-mandatory snap-x scroll-smooth ml-8 mt-4 p-5 flex  overflow-x-auto h-[22rem] space-x-8">

    
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Asia})`}}><p className="text-white text-3xl m-4">ASIA</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${America})`}}><p className="text-white text-3xl m-4">North America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${SouthAmerica})`}}><p className="text-white text-3xl m-4">South America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Africa})`}}><p className="text-white text-3xl m-4">Africa</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Australia})`}}><p className="text-white text-3xl m-4">Australia</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Asia})`}}><p className="text-white text-3xl m-4">ASIA</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${America})`}}><p className="text-white text-3xl m-4">North America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${SouthAmerica})`}}><p className="text-white text-3xl m-4">South America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Africa})`}}><p className="text-white text-3xl m-4">Africa</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Australia})`}}><p className="text-white text-3xl m-4">Australia</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Asia})`}}><p className="text-white text-3xl m-4">ASIA</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${America})`}}><p className="text-white text-3xl m-4">North America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${SouthAmerica})`}}><p className="text-white text-3xl m-4">South America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Africa})`}}><p className="text-white text-3xl m-4">Africa</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Australia})`}}><p className="text-white text-3xl m-4">Australia</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${EuropeImage})`}}><p className="text-white text-3xl m-4">Europe</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Asia})`}}><p className="text-white text-3xl m-4">ASIA</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${America})`}}><p className="text-white text-3xl m-4">North America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${SouthAmerica})`}}><p className="text-white text-3xl m-4">South America</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Africa})`}}><p className="text-white text-3xl m-4">Africa</p></div></a>
                   <a href = "#"><div className="snap-start shrink-0 rounded-lg bg-purple-100 h-72 w-72 bg-cover bg-center flex items-end hover:brightness-[0.9] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" style={{backgroundImage: `url(${Australia})`}}><p className="text-white text-3xl m-4">Australia</p></div></a>

                  

        
      
    
            </div>
        </div>
    )
}


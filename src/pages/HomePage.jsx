import SeaImage from "../assets/sea2.jpeg"
import Search from "../components/Search"
import Continents from "../components/Continents"
import LearnMoreImage from "../assets/bg-group.webp"


export default function HomePage() {


    return (
        <>
        <div className="">
            <div className="">
                <div className="h-110 w-full flex relative justify-center bg-cover bg-center"
                style={{backgroundImage: `url(${SeaImage})`}}>

                <div className="w-full h-full flex place-items-end">
                <div className="text-white mb-36 ml-14">
                <h3 className="text-4xl mb-4">Agence de Voyage</h3>
                <h1 className="text-5xl font-extrabold">LE MONDE SELON VOS ENVIES</h1>
                </div>
            </div>

            <Search />

            </div>
            </div>
            <Continents />

            <div className="w-full h-full flex flex-col items-center mb-[5rem]">

                <div className="w-[91%] h-full bg-black text-white text-center rounded-xl flex overflow-hidden">

                    <div className="w-1/2 h-[24rem]">

                        <img className="h-[24rem]" src={LearnMoreImage} />

                    </div>

                    <div className="w-1/2 items-start flex flex-col space-y-4 text-pretty pl-6 justify-center pr-36">
                        <span className="font-semibold text-3xl">Who we are & what we do</span>
                        <span className="text-left text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae pariatur quisquam rem tempore asperiores repellendus accusantium? Accusamus, laboriosam, tenetur praesentium alias modi vero laudantium voluptate quis numquam officiis optio unde?</span>
                        <button className="text-2xl bg-[#FF62AB] rounded-r-full rounded-l-full p-3">Learn more</button>

                    </div>

                </div>
            </div>

            <div className="flex flex-col w-full h-full mb-20 items-center">
                <div className="h-20 w-[91%] ">

                    <div className=" flex flex-col">
                        <span className="uppercase font-semibold text-2xl text-slate-600">no bons plans</span>
                        <span className="uppercase text-4xl font-bold">decouvrez nos meilleurs voyages orgainses</span>

                    </div>


                    <div className="bg-green-300 flex w-full h-full">
                        <div className="">
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                        <div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                        <div>
                            <div className=""></div>
                            <div className=""></div>

                        </div>

                    </div>
                    
                </div>
            </div>




        </div>


        </>
    )
}


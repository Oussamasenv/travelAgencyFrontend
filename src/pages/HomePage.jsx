import SeaImage from "../assets/sea2.jpeg"
import Search from "../components/Search"
import Continents from "../components/Continents"
import LearnMoreImage from "../assets/bg-group.webp"
import IcelandImg from "../assets/iceland.webp"
import Footer from "../components/Footer"


export default function HomePage() {


    return (
        <>
        <div className="flex flex-col">
            <div className="">
                <div className="h-110 w-full flex relative justify-center bg-cover bg-center"
                style={{backgroundImage: `url(${SeaImage})`}}>

                <div className="w-full h-full flex place-items-end">
                <div className="text-white md:mb-28 md:ml-[3rem] mb-48 p-8">
                <h3 className="lg:text-4xl text-3xl mb-4">Agence de Voyage</h3>
                <h1 className="lg:text-5xl text-4xl font-extrabold">LE MONDE SELON VOS ENVIES</h1>
                </div>
            </div>

            <Search />

            </div>
            </div>

            <Continents />

            <div className="w-full h-full flex flex-col items-center mb-[5rem]">

                <div className="w-[91%] h-full bg-black text-white text-center rounded-xl flex md:flex-row flex-col overflow-hidden">

                    <div className="md:w-1/2 h-[24rem]">

                        <img className="h-[24rem]" src={LearnMoreImage} />

                    </div>

                    <div className="md:w-1/2 items-start flex flex-col space-y-4 text-pretty pl-6 justify-center pr-36">
                        <span className="font-semibold text-3xl">Who we are & what we do</span>
                        <span className="text-left text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae pariatur quisquam rem tempore asperiores repellendus accusantium? Accusamus, laboriosam, tenetur praesentium alias modi vero laudantium voluptate quis numquam officiis optio unde?</span>
                        <button className="text-2xl bg-[#FF62AB] rounded-r-full rounded-l-full p-3">Learn more</button>

                    </div>

                </div>
            </div>

            <div className="flex flex-col w-full h-full items-center ">
                <div className="h-full w-[91%] ">

                    <div className=" flex flex-col">
                        <span className="uppercase font-semibold text-2xl text-slate-600">no bons plans</span>
                        <span className="uppercase text-4xl font-bold">decouvrez nos meilleurs voyages orgainses</span>

                    </div>


                    <div className=" flex md:flex-row flex-col w-full h-full mt-8 space-x-6">

                        <div className="w-[28rem] h-full">

                            <img className="h-[28rem] w-full" src={IcelandImg} alt="img"/>
                            <div className="flex flex-col p-4 space-y-4">
                                <span className="text-3xl font-semibold">Iceland Escape</span>
                                <span className="text-slate-500 leading-1 text-lg">Évadez-vous en Islande lors d'un voyage unique, découvrant ses paysages enchanteurs, ses geysers puissants et ses glaciers de votre escapade nordique.</span>
                                <a className="inline-block w-72 p-2 bg-[#FF62AB] rounded-r-full rounded-l-full text-white text-2xl">10 jours a USD 3,1200</a>
                            </div>

                        </div>

                        <div className="w-[28rem] h-full">

                            <img className="h-[28rem] w-full" src={IcelandImg} alt="img"/>
                            <div className="flex flex-col p-4 space-y-4">
                                <span className="text-3xl font-semibold">Iceland Escape</span>
                                <span className="text-slate-500 leading-1 text-lg">Évadez-vous en Islande lors d'un voyage unique, découvrant ses paysages enchanteurs, ses geysers puissants et ses glaciers de votre escapade nordique.</span>
                                <a className="inline-block w-72 p-2 bg-[#FF62AB] rounded-r-full rounded-l-full text-white text-2xl">10 jours a USD 3,1200</a>
                            </div>

                        </div>

                        <div className="w-[28rem] h-full">

                            <img className="h-[28rem] w-full" src={IcelandImg} alt="img"/>
                            <div className="flex flex-col p-4 space-y-4">
                                <span className="text-3xl font-semibold">Iceland Escape</span>
                                <span className="text-slate-500 leading-1 text-lg">Évadez-vous en Islande lors d'un voyage unique, découvrant ses paysages enchanteurs, ses geysers puissants et ses glaciers de votre escapade nordique.</span>
                                <a className="inline-block w-72 p-2 bg-[#FF62AB] rounded-r-full rounded-l-full text-white text-2xl">10 jours a USD 3,1200</a>
                            </div>

                        </div>


                    </div>
                    
                </div>

            
            </div>


            <Footer />


        </div>


        </>
    )
}



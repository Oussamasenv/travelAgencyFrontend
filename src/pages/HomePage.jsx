import SeaImage from "../assets/sea2.jpeg"
import Search from "../components/Search"
import Continents from "../components/Continents"


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
        </div>


        </>
    )
}


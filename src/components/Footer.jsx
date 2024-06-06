import React from 'react'
import Logo from "../assets/logo2.png"


export default function Footer() {
  return (
    <footer className="flex flex-col mt-20">
                <div className="h-full w-full bg-gradient-to-r from-black from-50% to-90% to-cyan-400 p-14 flex md:flex-row flex-col">

                    <div className="md:w-1/2 flex flex-col pl-4 md:pr-48 space-y-6 items-start">

                                            
                        <span className="text-4xl font-semibold leading-normal text-white">Obtenez de l'aide auprès de véritables experts en voyage</span>
                        <span className="text-lg font-semibold text-slate-300">Our group trips are so much more than your average holiday. Carefully crafted for young, intrepid travellers in their 20s & 30s.</span>

                        <button className="bg-[#FF62AB] text-white text-lg p-4 rounded-l-full rounded-r-full">learn more</button>
                        


                    </div>

                    <div className="md:w-1/2 flex justify-center items-center">


                        <img className="h-[16rem]" src={Logo} />


                    </div>


                </div>
                <div className="w-full h-full flex flex-col">

                <div className="relative">
				<div className="flex p-8 pt-16 pr-36 justify-evenly text-xl">
					<div className="">
						<h6 className="pb-6 font-semibold">Service</h6>
						<ul className="space-y-2">
							<li><a href="#">Voyages Organisé</a></li>
							<li><a href="#">MICE</a></li>
							<li><a href="#">Circuits Maroc</a></li>
							<li><a href="#">Hajj & Omra</a></li>
							<li><a href="#">Croisières</a></li>
						</ul>
					</div>

					<div className="">
						<h6 className="pb-6 font-semibold">Support</h6>
						<ul className="space-y-2">
							<li><a href="#">Nous contacter</a></li>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">Cookies</a></li>
							<li><a href="#">Privacy Policy</a></li>
						</ul>
					</div>
					<div className="">
						<h6 className="pb-6 font-semibold">À propos</h6>
						<ul className="space-y-2">
							<li><a href="#">Dija Tour</a></li>
							<li><a href="#">Notre équipe</a></li>
							<li><a href="#">Nos clients</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>
				<div className="p-6 absolute right-20">
					<ul className="flex space-x-4 text-lg">
						<li><a href="#">Terms & Conditions</a></li>
						<li><a href="#">Cookies</a></li>
						<li><a href="#">Privacy Policy</a></li>
					</ul>
				</div>
			</div>


                    

                </div>
            </footer>
  )
}

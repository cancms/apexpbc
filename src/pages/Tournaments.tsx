import Footer from "@/core/Footer";
import Nav from "@/core/Nav";
import dupr16v2 from "../assets/dupr16-2.jpeg";
import { NavLink } from "react-router-dom";

export default function Tournaments() {
  return (
    <div>
    <div className="bg-[#0A3759]">
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-white text-4xl py-4 pt-4 pb-8 antonFont"
        >
					TOURNAMENTS
				</div>

          <div className="text-white font-bold text-xl pb-8 ">DOMINATION / JULY 23RD-26TH </div>
        <img className="border-4 border-white w-[75%] md:w-[33%]  max-w-full max-h-full" src={dupr16v2} alt="logo"/>
        <div
          className="text-white font-bold text-xl pt-4"
        >
					December 14, 2025
				</div>
        <div
          className="text-white font-bold text-xl"
        >
					Picklers Hub
				</div>
        <NavLink to="/dupr-16"><div className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont'>View Event</div></NavLink>
        <hr className="border-white my-4 w-80 pb-4" />
        <img className="border-4 border-white w-[75%] md:w-[33%]  max-w-full max-h-full" src="https://cdn.pickleballbrackets.com/uploads/Clubs/695ec9af-c824-43ca-a4cb-7fed94761aad/d0e07b26-6259-49aa-9698-47dc44d4eb23_1748709343_Logo.png?width=600&height=600&optimizer=image" alt="logo"/>
        <div
          className="text-white font-bold text-xl pt-4"
        >
					June 28-29, 2025
				</div>
        <div
          className="text-white font-bold text-xl"
        >
					Picklers Hub
				</div>
        <a className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont' onClick={() => window.open("https://pickleballtournaments.com/tournaments/D0E07B26-6259-49AA-9698-47DC44D4EB23")}>View Event</a>
        <hr className="border-white my-4 w-80 pb-4" />
        <img className="border-4 border-white w-[75%] md:w-[33%] max-w-full max-h-full" src="https://cdn.pickleballbrackets.com/uploads/Clubs/695ec9af-c824-43ca-a4cb-7fed94761aad/f61e991a-3d36-43af-ab83-1bfd106c9a8e_1738175918_Logo.png?width=600&height=600&optimizer=image" alt="logo"/>
        
        <div
          className="text-white font-bold text-xl pt-4"
        >
					March 19, 22 & 23, 2025
				</div>
        <div
          className="text-white font-bold text-xl"
        >
					Smash Sports
				</div>
        <a className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont' onClick={() => window.open("https://pickleballtournaments.com/tournaments/march-madness-1")}>View Event</a>
        <hr className="border-white my-4 w-80 pb-4" />
        <img className="border-4 border-white w-[75%] md:w-[33%]  max-w-full max-h-full" src="https://cdn.pickleballbrackets.com/uploads/Clubs/695ec9af-c824-43ca-a4cb-7fed94761aad/c499c77a-688f-444d-8f67-4098eb608cf6_Logo.jpeg?width=600&height=600&optimizer=image" alt="logo"/>
        
        <div
          className="text-white font-bold text-xl pt-4"
        >
					January 25-26, 2025
				</div>
        <div
          className="text-white font-bold text-xl"
        >
					Smash Sports
				</div>
        <a className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont' onClick={() => window.open("https://pickleballtournaments.com/tournaments/c499c77a-688f-444d-8f67-4098eb608cf6")}>View Event</a>
        <hr className="border-white my-4 w-80 pb-4" />

      </div>
    </div>
    <Footer />
    </div>
  );
}

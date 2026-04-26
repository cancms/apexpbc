import Footer from "@/core/Footer";
import Nav from "@/core/Nav";

import dupr16v2 from "../assets/dupr16-2.jpeg";
import apexbear from "../assets/apexbear.png";
import chillguypb from "../assets/chillguypb.png";
import ScrollToTop from "@/core/ScrollToTop";
import { NavLink } from "react-router-dom";

export default function Dupr16() {
  return (
    <div className="bg-[#0A3759]">
      <Nav />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen items-center">
        <img
          src={dupr16v2}
          alt="logo"
          className="w-[100%] md:w-1/2 lg:w-1/3 pb-5"
        />
        <div className="font-bold text-lg px-8 text-center text-white">
          Apex Pickleball Club and Chill Guy Pickleball Club are teaming up for
          a team tournament at Picklers Hub!
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <img
            src={apexbear}
            alt="logo"
            className="w-[30%] md:w-[20%] lg:w-[20%]"
            onClick={() => window.open("https://www.instagram.com/apexpbc")}
          />
          <img
            src={chillguypb}
            alt="logo"
            className="w-[40%] md:w-[20%] lg:w-[20%]"
            onClick={() => window.open("https://www.instagram.com/chillguypb")}
          />
        </div>
		
        <div
          className="bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont"
        >
          <NavLink to="/dupr-16/live-standings" >LIVE STANDINGS </NavLink>
        </div>
        <hr className="border-white my-4 w-80 pb-4" />
        <div className="items-start">
          <div className="px-8 self-start md:w-[66vw] text-white">
            <span className="font-bold">Date:</span> Sunday December 14, 2025
          </div>
          <div className="px-8 self-start text-white">
            <span className="font-bold">Location:</span> Picklers Hub, 455
            Gibraltar Dr, Mississauga, ON L5T 2S9
          </div>
        </div>
        <div className="text-white text-3xl py-4 pb-0 antonFont">
          TOURNAMENT STRUCTURE
        </div>
        <div className="px-8 py-4 md:w-[66vw]">
          <ul className="list-disc pl-5 text-white">
            <li>
              {"5 Teams, each with 4-6 players (minimum 2 men and 2 women)"}
            </li>
            <li>
              {
                "Match Rule: 4 players per match with a combined DUPR of 16.0 or less"
              }
            </li>
            <li>{"Pro players welcome!"}</li>
            <li>{"Non DUPR Rated Event"}</li>
            <li>{"$600 cash prize for the gold winners!"}</li>
          </ul>
        </div>
        <div className="text-white text-3xl py-4 pb-0 antonFont">
          EVENT FORMAT
        </div>
        <div className="text-white font-bold self-start pl-10 md:self-center lg:self-center pt-2">
          <p>Round Robin</p>
        </div>
        <div className="pb-8 px-8 pt-2 md:w-[66vw]">
          <ul className="list-disc pl-5 text-white">
            <li>
              {"4 Round Robin matchups (each team plays every other team once)"}
            </li>
            <li>{"Regular scoring applies"}</li>
            <li>
              {
                "Both gender matches run simultaneously, followed by mixed matches, to minimize downtime between games."
              }
            </li>
            <li>
              {
                "Each matchup is allotted 1 hour; if matches finish early, teams may use the remaining time to rest."
              }
            </li>
            <li>{"No Dream Breaker during Round Robin"}</li>
            <li>
              {"Seeding Criteria:"}
              <ul className="list-disc pl-5">
                <li>
                  {
                    "win/loss record → head-to-head → point-differential → points earned"
                  }
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="text-white font-bold self-start pl-10 md:self-center lg:self-center pt-2">
          <p>Playoffs</p>
        </div>
        <div className="pb-8 px-8 pt-2 md:w-[66vw] mx-auto">
          <ul className="list-disc pl-5 text-white">
            <li>Top 4 teams will move forward to playoffs</li>
            <li>
              All playoff games will be played best 2 out of 3, up to 11 points
              (win by 2, hard stop at 13)
            </li>
            <li>{"Regular scoring applies"}</li>
            <li>
              {
                "Both gender matches run simultaneously, followed by mixed matches, to minimize downtime between games."
              }
            </li>
            <li>{"Dream Breaker used only in the event of a tie"}</li>
            <li>
              {"Finals Order:"}
              <ul className="list-disc pl-5">
                <li>{"Women's → Men's → Mixed Doubles 1 → Mixed Doubles 2"}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="text-white font-bold self-start pl-10 md:self-center lg:self-center pt-2">
          <p>Dream Breaker Rules</p>
        </div>
        <div className="pb-8 px-8 pt-2 md:w-[66vw]">
          <ul className="list-disc pl-5 text-white">
            <li>
              {
                "Rally scoring to 15 points, win by 2, hard stop at 18, freeze at match point"
              }
            </li>
            <li>
              {"Lineups are decided privately before the Dream Breaker begins"}
            </li>
          </ul>
        </div>
        <div className="text-white font-bold text-center px-6 pt-2 pb-8">
          <p>
            What are you waiting for? Rally your pickleball crew, or jump in as
            a free agent, and sign up today!
          </p>
        </div>
        <hr className="border-white my-4 w-80 pb-4" />
        <div className="text-white text-2xl antonFont">TEAMS REGISTERED</div>
        <div className="text-white bg-[#45779c] md:w-[66vw] w-[80vw] justify-center text-center items-center my-4 rounded-md py-4">
          <p className="text-2xl font-bold pb-4">Cai + Us</p>
          <p className="font-bold">Caius Tam</p>
          <p>Eric Le</p>
          <p>CJ Sison</p>
          <p>Alexus Tang</p>
          <p>Aletha Azarcon</p>
          <p>Eva Long</p>
        </div>
        <div className="text-white bg-[#45779c] md:w-[66vw] w-[80vw] justify-center text-center items-center my-4 rounded-md py-4">
          <p className="text-2xl font-bold pb-4">Net Ninjas</p>
          <p className="font-bold">Rob Deus</p>
          <p>Achint Bhagat</p>
          <p>Amitoz Jatana</p>
          <p>Miguel Aristizabal</p>
          <p>Bella Muere</p>
          <p>Kirsten Dado</p>
        </div>
        <div className="text-white bg-[#45779c] md:w-[66vw] w-[80vw] justify-center text-center items-center my-4 rounded-md py-4">
          <p className="text-2xl font-bold pb-4">Picklers</p>
          <p className="font-bold">Sheirlyne Fajardo</p>
          <p>Homer Babalo</p>
          <p>Froi Dela Cruz</p>
          <p>Rico Florentino</p>
          <p>Ann Santos</p>
          <p>Ann Sparrow</p>
        </div>
        <div className="text-white bg-[#45779c] md:w-[66vw] w-[80vw] justify-center text-center items-center my-4 rounded-md py-4">
          <p className="text-2xl font-bold pb-4">Ryan's Minions</p>
          <p className="font-bold">Ryan Dominic</p>
          <p>Hanna Castillo</p>
          <p>Adrian Luk</p>
          <p>Louisa Wong</p>
        </div>
        <div className="text-white bg-[#45779c] md:w-[66vw] w-[80vw] justify-center text-center items-center my-4 rounded-md py-4">
          <p className="text-2xl font-bold pb-4">All Day</p>
          <p className="font-bold">Victoria Bomben</p>
          <p>Luca D'Amico</p>
          <p>John Mergulhao</p>
          <p>Stefano Bomben</p>
          <p>Mary De Giorgis</p>
          <p>Thea Rifol</p>
        </div>

        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white underline text-center px-6 pt-8 pb-8"
        >
          <p>Back To Top</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

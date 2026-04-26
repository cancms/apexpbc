import "./App.css";
import picklershub from "./assets/picklershub.jpeg";
import pklbolr from "./assets/pklbolr.png";

// import dupr16banner from "./assets/dupr16banner.jpeg";
// import ladderleaguebanner from "./assets/ladderleague2026.jpeg";

import chillguypb from "./assets/chillguypb.png";
import MMV from "./assets/marchmadnessvideo.mp4";

import Nav from "./core/Nav";
import Footer from "./core/Footer";
import ScrollToTop from "./core/ScrollToTop";

function App() {
  // const images = [
  //   { src: dupr16banner, link: "/dupr-16" },
  //   { src: ladderleaguebanner, link: "/ladder-league" },
  // ];

  let targetDate: any = new Date("2026-01-21T20:00:00");
  const now = Date.now();
  let diff = targetDate - now;
  if (diff < 0) {
    console.log("The target date has already passed.");
    diff = 0;
  }
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= daysLeft * (1000 * 60 * 60 * 24);
  const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
  diff -= hoursLeft * (1000 * 60 * 60);
  const minsLeft = Math.floor(diff / (1000 * 60));
  console.log(`Days: ${daysLeft}, Hours: ${hoursLeft}, Minutes: ${minsLeft}`);

  return (
    <div>
      <ScrollToTop />
      <Nav />
      <div className="bg-[#0A3759] md:min-h-[45vh] md:pb-8">
        <div className="text-white flex flex-col items-center">
          <div className="hidden flex justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <div className="text-white flex flex-col items-center w-screen">
                <video
                autoPlay
                playsInline
                muted
                loop
                style={{ width: "100%", maxWidth: "400px" }}
                >
                <source src={MMV} type="video/mp4" />
              </video>
               <a className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 m-4 antonFont' onClick={() => window.open("https://pickleballtournaments.com/tournaments/march-madness-moneyball")}>Register Now</a>

              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row md:justify-around">
            <div className="font-sans w-90 md:w-1/2 bg-[#45779c] pt-8 px-5 mx-auto mt-8 pb-8 mx-4 rounded-xl flex flex-col">
              <div className="antonFont text-xl text-center pb-4">
                WHO WE ARE
              </div>
              <div className="text-center">
                Founded in summer 2024 by Ryan, Rico, and Hannah, Apex
                Pickleball Club is all about growing the game we love. We create
                spaces for players to connect, compete, and have fun through our
                leagues and tournaments. We're commited to bringing fresh and
                exciting ideas to the pickleball community and we'd love for you
                to be a part of it!
              </div>
            </div>
            <div className="hidden flex flex-col items-center justify-center">
              <div className="text-3xl mainSection pt-8">
                SHOUTOUT TO OUR PARTNERS
              </div>
              <div className="w-full overflow-hidden py-10">
                <div className="flex justify-center animate-scroll whitespace-nowrap">
                  <div
                    key="pklbolr"
                    className="mx-8 inline-block flex-shrink-0 h-24 flex items-center justify-center"
                  >
                    <img
                      src={pklbolr}
                      alt="logo"
                      className="object-contain h-full opacity-80 hover:opacity-100 transition"
                      onClick={() => window.open("https://pklbolr.com/")}
                    />
                  </div>
                  <div
                    key="picklershub"
                    className="mx-8 inline-block flex-shrink-0 h-24 flex items-center justify-center"
                  >
                    <img
                      src={picklershub}
                      alt="logo"
                      className="object-contain h-full opacity-80 hover:opacity-100 transition"
                      onClick={() => window.open("https://picklershub.ca/")}
                    />
                  </div>
                  <div
                    key="chillguypb"
                    className="mx-8 inline-block flex-shrink-0 h-24 flex items-center justify-center"
                  >
                    <img
                      src={chillguypb}
                      alt="logo"
                      className="object-contain h-full opacity-80 hover:opacity-100 transition"
                      onClick={() =>
                        window.open("https://www.instagram.com/chillguypb/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Nav from "@/core/Nav";
import { useEffect, useRef, useState } from "react";
import Standings from "@/views/Standings";
import Schedule from "@/views/Schedule";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn, generateStandings, transformSheetsAPIResponse } from "@/lib/utils";
import Footer from "@/core/Footer";
// import ladderleague2026horiz from "../assets/ladderleague2026horiz.jpeg";
// import ladderleague2026horiz2 from "../assets/ladderleague2026horiz-2.jpeg";
import ScrollToTop from "@/core/ScrollToTop";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
// import { useIsMobile } from "@/lib/isMobile";
import {
  getMatchSheetUrlInfo,
  getAvailableLevels,
  getMatchSheetUrlBasedOnLvl,
  getPlayerDataSheetUrl,
  SCHEDULE_FEATURE,
  USE_PLAYER_DATA
} from "@/controller/controller";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function LadderLeague() {



  // const isMobile = useIsMobile();
  const navigate = useNavigate()
  const { state, hash } = useLocation();
  const titleRef = useRef<HTMLDivElement>(null);

  const defaultTab = "standings";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const [stats, setStats] = useState<any>([]);
  const [playerData, setPlayerData] = useState<any>([]);
  const [matchHistory, setMatchHistory] = useState<any>({});
  const [loading, setLoading] = useState(false);


  let { leagueType } = useParams();
  leagueType = leagueType || 'past_standings';

  const lvls = ["3.0", "3.5", "4.0+"];
  // const lvls = getAvailableLevels(leagueType);




  // const [leagueType, setLeagueType] = useState(() => {
  //   let { leagueType } = useParams();
  //   leagueType = leagueType || 'past_standings';
  //   return leagueType;
  // });

  const [activeLvlTab, setActiveLvlTab] = useState(() => {
    return localStorage.getItem("activeLvlTab") || lvls[0];
  });



  // init level, use the first one
  // setActiveLvlTab(lvls[0]);


  useEffect(() => {

    console.log('===========', leagueType);
    // const lvls = ["3.0", "3.5", "4.0+"];

    const getData = async () => {
      setLoading(true);
      localStorage.setItem("activeLvlTab", activeLvlTab);
      // const res = await fetch(getMatchSheetUrlBasedOnLvl(activeLvlTab));
      const res = await fetch(getMatchSheetUrlInfo(activeLvlTab, leagueType).matchDataSheetUrl);
      const json = await res.json();
      const playerMatchesCsv: any[] = transformSheetsAPIResponse(json.values);

      // const res2 = await fetch(getPlayerDataSheetUrl);
      const res2 = await fetch(getMatchSheetUrlInfo(activeLvlTab, leagueType).playerDataSheetUrl);
      const json2 = await res2.json();
      const playerDataCsv: any[] = transformSheetsAPIResponse(json2.values);


      const filteredLvlPlayerData = playerDataCsv.filter(playerData => playerData.level === activeLvlTab);
      setPlayerData(filteredLvlPlayerData);

      console.log("filtereredLvlPlayerData", filteredLvlPlayerData);
      console.log("playerMatchesCsv", playerMatchesCsv);

      const players = new Set();

      playerMatchesCsv.forEach(game => {
        [
          game.team1player1,
          game.team1player2,
          game.team2player1,
          game.team2player2
        ].forEach((player: any) => {
          if (player) {
            players.add(player.trim().replace('*', ''));
          }
        });
      });
      
      const playerList = [...players]
        .sort()
        .map(name => ({ id: name }));

        if (USE_PLAYER_DATA) {
          setStats(generateStandings(filteredLvlPlayerData, playerMatchesCsv));
        } else {
          setStats(generateStandings(playerList, playerMatchesCsv));

        }
      
      const sortedMatches = playerMatchesCsv.sort((a: any, b: any) => Number(b.week) - Number(a.week));

      setMatchHistory(sortedMatches);
      setLoading(false);
    }
    getData();
  }, [activeLvlTab, leagueType]);

  useEffect(() => {
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
    } else {
      setActiveTab(defaultTab);
    }
  }, [hash]);

  useEffect(() => {
    if (state && state.scrollTo && titleRef.current) {
      titleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }, [state])

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`#${value}`, { replace: true });
  };

  return (
    <div className="bg-[#0A3759] min-h-screen">
      <ScrollToTop />
      <Nav />
      <div className="flex flex-col items-center">
			{/*isMobile ? <img src={ladderleague2026horiz} alt="logo" className="w-[100vw] md:w-1/2 lg:w-1/3 pb-5" /> : <img src={ladderleague2026horiz2} alt="logo" />*/}
      {/* <div className="font-bold text-lg px-8 pt-4 text-center text-white">
				Apex Pickleball Club is levelling up! Our Ladder League is growing with 3 new divisions (3.0, 3.5, 4.0+).
			</div> */}
			{/* <a className='bg-white text-[#0A3759] text-xl rounded-lg hover:bg-blue-700 p-2 mx-4 my-8 antonFont' href="https://docs.google.com/forms/d/e/1FAIpQLSeRALyhnTagoHbKBl0pPDm53slOqHfs07PetMItgE2e41jagw/viewform?usp=header">REGISTER HERE</a> */}
      <div className="items-start">
			<div className="px-8 pt-8 self-start md:w-[66vw] text-white">
				<span className="font-bold">Date and Time:</span>
              Every Monday from April 27th - June 15th, 2026 @ 7-11PM
			</div>
			<div className="px-8 self-start text-white">
			  <span className="font-bold">Location:</span> Picklers Hub, 455 Gibraltar Dr, Mississauga, ON L5T 2S9
			</div>
      <div className="text-lg px-10 self-start text-white">
      <div className="text-3xl text-center py-4 antonFont">LADDER LEAGUE FORMAT</div>
        <ul className="list-disc pl-5">
          <li>7 weeks long with 12 players per division</li>
          <li>Each week, players are grouped by their current ranking and play three round-robin matches within their court</li>
          <li>After each session, rankings are updated based on wins and losses. In the event of a tie, point differential determines placement</li>
          <li>Week 8 is playoff week:
              <ul className="list-disc pl-10">
                <li>Players are paired according to their rankings: 5th & 6th vs 11th & 12th and 7th & 8th vs 9th & 10th</li>
                <li>The top 4 players automatically advance to the semifinals</li>
                <li>The remaining players compete in the quarterfinals for a chance to face them</li>
              </ul>
          </li>
        </ul>
        <div className="pt-8 pb-4 text-center">Secure your spot today. Register now and dominate the ranks!</div>
			</div>
      </div>
      <Link to="/ladder-league-rules"><div className="py-6 text-white underline items-center">Full Ladder League Format and Rules</div></Link>
			<hr className="border-white my-4 w-80 pb-4" />
      <div ref={titleRef} className="text-white text-4xl py-4 pt-4 antonFont">WINTER LADDER LEAGUE</div>
      <div className="flex flex-row mx-5 my-5">
      <div className="text-white mx-5 my-2 self-center text-md font-bold">Choose Level: </div>
      <RadioGroup id="radioX" value={activeLvlTab} onValueChange={(val) => setActiveLvlTab(val)} orientation="horizontal" className="flex gap-3">
      {lvls.map((n) => (
        <label
          key={n}
          htmlFor={`num-${n}`}
          className={cn(
            "flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white text-xl font-medium transition",
            activeLvlTab === n
              ? "bg-[#45779c] text-white border-blue-600"
              : " hover:bg-[#243E52]"
          )}
        >
          {n}
          <RadioGroupItem
            id={`num-${n}`}
            value={n}
            className="peer hidden"
          />
        </label>
      ))}
      </RadioGroup>
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full items-center">
      <TabsList className="w-full bg-[#0A3759] rounded-none">
        <TabsTrigger value="standings" className="antonFont text-white text-xl flex-1 text-center pb-2 border-0 border-b-4 border-transparent data-[state=active]:border-white rounded-none">STANDINGS</TabsTrigger>
        {SCHEDULE_FEATURE && <TabsTrigger value="schedule"  className="antonFont text-white text-xl flex-1 text-center pb-2 border-0 border-b-4 border-transparent data-[state=active]:border-white rounded-none">SCHEDULE</TabsTrigger>}
      </TabsList>

        <TabsContent value="standings">
          <Standings stats={stats} playerData={playerData} level={activeLvlTab} loading={loading}/>
        </TabsContent>

        <TabsContent value="schedule">
          <Schedule stats={stats} level={activeLvlTab} playerData={playerData} matchHistory={matchHistory} loading={loading} />
        </TabsContent>
      </Tabs>
      </div>
      <Footer />
    </div>
    );
  }
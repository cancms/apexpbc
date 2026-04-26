// import apexbear from "../assets/apexbear.png";
// import chillguypb from "../assets/chillguypb.png";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function Dupr16LiveStandings() {
	const [stats, setStats] = useState<any>([]);
	const REFRESH_INTERVAL = 20; // seconds

	const [countdown, setCountdown] = useState(REFRESH_INTERVAL);
	
	useEffect(() => {
    const reloadTimer = setTimeout(() => {
      window.location.reload();
    }, REFRESH_INTERVAL * 1000);

    return () => clearTimeout(reloadTimer);
  }, []);

	useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getData = async () => {

			const sheetId = "1k-FfsEBgoa5QnEZXDTm1oUgI0uyRE1eeEo8I--rJsUI";
			const tabName = "Form Responses 1";
			const apiKey = "AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU";

			const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'${encodeURIComponent(tabName)}'?key=${apiKey}`;

			const resJson = await fetch(url);
			const json = await resJson.json();
			const matchesJson = json.values;

      const teamMap = [
        {
          id: "All Day",
          teamWins: 0,
          teamLosses: 0,
          teamTies: 0,
          gamesWon: 0,
          gamesLost: 0,
          pd: 0,
          pe: 0,
          pa: 0,
        },
        {
          id: "Picklers",
          teamWins: 0,
          teamLosses: 0,
          teamTies: 0,
          gamesWon: 0,
          gamesLost: 0,
          pd: 0,
          pe: 0,
          pa: 0,
        },
        {
          id: "Ryan's Minions",
          teamWins: 0,
          teamLosses: 0,
          teamTies: 0,
          gamesWon: 0,
          gamesLost: 0,
          pd: 0,
          pe: 0,
          pa: 0,
        },
        {
          id: "Cai + Us",
          teamWins: 0,
          teamLosses: 0,
          teamTies: 0,
          gamesWon: 0,
          gamesLost: 0,
          pd: 0,
          pe: 0,
          pa: 0,
        },
        {
          id: "Net Ninjas",
          teamWins: 0,
          teamLosses: 0,
          teamTies: 0,
          gamesWon: 0,
          gamesLost: 0,
          pd: 0,
          pe: 0,
          pa: 0,
        },
      ];

      for (let i = 0; i < teamMap.length; i++) {
        for (let j = 0; j < teamMap.length; j++) {
          if (teamMap[i].id === teamMap[j].id) {
            continue;
          }

          let matchups = matchesJson.filter((match: any) => {
            return (
              (match[2] == teamMap[i].id &&
                match[4] == teamMap[j].id) ||
              (match[4] == teamMap[i].id &&
                match[2] == teamMap[j].id)
            );
          });

          if (matchups.length === 4) {
            let wins = 0;
            let losses = 0;
            let pe = 0;
            let pa = 0;

            matchups.forEach((matchup: any) => {
              if (matchup[2] == teamMap[i].id) {
                if (
                  Number(matchup[3]) >
                  Number(matchup[5])
                ) {
                  wins += 1;
                } else {
                  losses += 1;
                }
                pe += Number(matchup[3]);
                pa += Number(matchup[5]);
              } else if (matchup[4] == teamMap[i].id) {
                if (
                  Number(matchup[5]) >
                  Number(matchup[3])
                ) {
                  wins += 1;
                } else {
                  losses += 1;
                }
                pe += Number(matchup[5]);
                pa += Number(matchup[3]);
              }
            });
            let pd = pe - pa;
            teamMap[i].gamesWon += wins;
            teamMap[i].gamesLost += losses;
            teamMap[i].pe += pe;
            teamMap[i].pa += pa;
            teamMap[i].pd += pd;

            if (wins === losses) {
              if (pd === 0) {
                teamMap[i].teamTies += 1;
								if (pe === pa) {
									teamMap[i].teamTies += 1;
								} else if (pe > pa) {
									teamMap[i].teamWins += 1;
								} else if (pe < pa) {
									teamMap[i].teamLosses += 1;
								}
              } else if (pd > 0) {
                teamMap[i].teamWins += 1;
              } else if (pd < 0) {
                teamMap[i].teamLosses += 1;
              }
            } else if (wins > losses) {
              teamMap[i].teamWins += 1;
            } else if (wins < losses) {
              teamMap[i].teamLosses += 1;
            }
          }
        }
      }

      const sortedMap = teamMap.sort((a, b) => {
        if (b.teamWins !== a.teamWins) {
          return b.teamWins - a.teamWins; // highest wins first
        }
        if (b.pd !== a.pd) {
          return b.pd - a.pd; // highest point differential first
        }
        if (b.pe !== a.pe) {
          return b.pe - a.pe; // highest points earned first
        }
        return a.pa - b.pa; // lowest points allowed first
      });

			setStats(sortedMap);
    };
    getData();
  }, []);
  return (
    <div className="bg-[#0A3759] h-screen">
      <div className="flex flex-row justify-evenly items-center pt-20">
			<div className="flex flex-col items-center bg-[#45779c] w-[95vw] pb-2">
        <div className="text-white text-4xl py-2 pt-10 antonFont">LIVE STANDINGS</div>
        <div className="text-[#0A3759] text-xl lg:text-3xl py-5 antonFont">DUPR 16 MLP PICKLEBALL TEAM TOURNAMENT</div>
        <div className="text-white text-xl py-2">Refreshing in {countdown} seconds</div>
        <div className="pt-4 pl-4 max-w-[95vw] pb-15">
				{stats && stats.length > 0 ? <Table className="text-white pt-3 text-md lg:text-2xl bg">
					<TableHeader>
						<TableRow className="antonFont border-1 bg-[#0A3759]">
						<TableHead className="text-center border-1 lg:p-4">Rank</TableHead>
              <TableHead className="w-[150px] md:w-[300px] border-1">Team</TableHead>
              <TableHead className="md:w-[150px] lg:p-2 border-1 text-center">W</TableHead>
              <TableHead className="md:w-[150px] lg:p-2 border-1 text-center">L</TableHead>
              <TableHead className="md:w-[150px] lg:p-2 border-1 text-center">PE</TableHead>
              <TableHead className="md:w-[150px] lg:p-2 border-1 text-center">PA</TableHead>
              <TableHead className="md:w-[150px] lg:p-2 border-1 text-center">PD</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{stats && stats.length > 0 && stats.map((stat: any, i: number) => {
							return (
								<TableRow key={stat.id}>
									<TableCell className="lg:p-3 border-1 text-center">{i+1}</TableCell>
									<TableCell className="lg:p-3 border-1">{stat.id}</TableCell>
									<TableCell className="lg:p-3 border-1 text-center">{stat.teamWins}</TableCell>
									<TableCell className="lg:p-3 border-1 text-center">{stat.teamLosses}</TableCell>
									<TableCell className="lg:p-3 border-1 text-center">{stat.pe}</TableCell>
									<TableCell className="lg:p-3 border-1 text-center">{stat.pa}</TableCell>
									<TableCell className="lg:p-3 border-1 text-center">{stat.pd}</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table> : <div className="flex flex-col items-center justify-center text-white h-75">
									<div><Spinner /></div>
									</div>}
									</div></div>
        {/* <img
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
        /> */}
      </div>
    </div>
  );
}

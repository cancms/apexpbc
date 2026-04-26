import Nav from "@/core/Nav";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { generateStandings, getCourtAssignees, getNextWeekInfo, getPlayerFormattedNameWithSubIndicator, transformSheetsAPIResponse } from "@/lib/utils";
import Footer from "@/core/Footer";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import ScrollToTop from "@/core/ScrollToTop";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { getMatchSheetUrlBasedOnLvl, getPlayerDataSheetUrl, startingWeekDate } from "@/controller/controller";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";


export default function ProfilePage() {
	const { playerId } = useParams();
	const [playerDetails, setPlayerDetails] = useState<any>();
	const [playerStats, setPlayerStats] = useState<any>();
	const [currentRanking, setCurrentRanking] = useState(12);
	const [scheduledCourt, setScheduledCourt] = useState<any>();
	const [courtNum, setCourtNum] = useState(1);
	const [isShowingPrevMatches, setIsShowingPrevMatches] = useState(false);
	const [prevWeek, setPrevWeek] = useState(0);
	const [highestPrevWeek, setHighestPrevWeek] = useState(0);
	const [profileMatches, setProfileMatches] = useState<any>([]);
	const [playerData, setPlayerData] = useState<any>([]);
	const [rankingHistory, setRankingHistory] = useState<RankingPoint[]>([]);

	type RankingPoint = {
		week: number;
		playerRank: number;
	};


	if (!playerId) return <>Missing Player id</>;

	useEffect(() => {
		const getData = async () => {
			const res2 = await fetch(getPlayerDataSheetUrl);
			const json2 = await res2.json();
			const parsedCsv2: any[] = transformSheetsAPIResponse(json2.values);
			setPlayerData(parsedCsv2);
			
			let lvl: any;
			for (let i = 0; i < parsedCsv2.length; i++) {
				if (parsedCsv2[i].id === playerId) {
					setPlayerDetails(parsedCsv2[i]);
					lvl = parsedCsv2[i].level
				}
			}
					
			const res = await fetch(getMatchSheetUrlBasedOnLvl(lvl));
			const json = await res.json();
			const parsedCsv: any[] = transformSheetsAPIResponse(json.values);
			const sortedMatches = parsedCsv.sort((a: any, b: any) => Number(b.week) - Number(a.week));

			if (sortedMatches && sortedMatches.length > 0) {
				setPrevWeek(Number(sortedMatches[0].week));
				setHighestPrevWeek(Number(sortedMatches[0].week));
			}

			const sortedPlayerMatches = sortedMatches.filter(match => {
				if (match.team1player1.replace(/[-* ]/g, '') === playerId) return true;
				if (match.team1player2.replace(/[-* ]/g, '') === playerId) return true;
				if (match.team2player1.replace(/[-* ]/g, '') === playerId) return true;
				if (match.team2player2.replace(/[-* ]/g, '') === playerId) return true;
				return false;
			});

			setProfileMatches(sortedPlayerMatches);
			
			const playersWithinLevel = parsedCsv2.filter(player => player.level === lvl);
			
			const allUniqueWeeks = [...new Set(sortedMatches.map(match => Number(match.week)))].sort((a, b) => a - b);

			const rankingHistory = allUniqueWeeks.map(week => {
				const matchesUpToWeek = sortedMatches.filter(match => (Number(match.week) <= week));
				const standings = generateStandings(playersWithinLevel, matchesUpToWeek);
				const playerRank = standings.findIndex(stat => (playerId === stat.id)) + 1;
				
				console.log("week", week);
				console.log("playerRank", playerRank);

				return {
					week,
					playerRank,
				};
			});
			setRankingHistory(rankingHistory);

			const allStats = generateStandings(playersWithinLevel, sortedMatches);

			setPlayerStats(allStats.find(stat => stat.id === playerId));

			const currentRanking = allStats.findIndex(stat => stat.id === playerId);
			setCurrentRanking(currentRanking);
			
			const group = Math.floor(currentRanking / 4);
			const start = group * 4;
			const end = start + 4;
			setCourtNum(group + 1);
			const courtAssignment = getCourtAssignees(allStats, parsedCsv2, start, end);
			setScheduledCourt(courtAssignment);
		}

		getData();
	}, [])

	const handleGoBack = () => {
        if (!isShowingPrevMatches) {
            setIsShowingPrevMatches(true);
        } else if (prevWeek > 2) {
            setPrevWeek(prevWeek => {
                return prevWeek - 1;
            })
        }
    }

	const handleGoForward = () => {
        if (prevWeek === highestPrevWeek) {
            setIsShowingPrevMatches(false);
        } else if (!isShowingPrevMatches) {

        } else {
            setPrevWeek(prevWeek => {
                return prevWeek + 1;
            })
        }
    }

	const getTitle = () => {
        if (getNextWeekInfo(startingWeekDate).currentWeek <= 0) {
            return "Week 1 - Wednesday January 21"
        }
        if (!isShowingPrevMatches) {
            return "Week " + getNextWeekInfo(startingWeekDate).nextWeekNumber + " - " + getNextWeekInfo(startingWeekDate).nextWeekDate;
        } else {
            return "Week " + prevWeek;
        }
    }

	const getScheduleSubView = () => {
		if (getNextWeekInfo(startingWeekDate).nextWeekNumber <= 1) {
			return <div className="lg:m-10 my-10 text-white">
                {"All players will participate in Kings Court, 10-minute matches with randomly assigned partners to begin. Winners split and move up, while losers split and move down. Wins and losses will be used to determine the initial standings for the ladder league."}
        </div>
		}
		if (getNextWeekInfo(startingWeekDate).nextWeekNumber >= 8+1) {
			return <div>
			<div className="text-white my-4">Please refer to the main <NavLink to="/ladder-league#schedule" className="underline bold" state={{ scrollTo: "standings"}}>schedule</NavLink> for the playoff bracket.</div>
		</div>
		} else {
			return <div>
			<div className="text-left text-white font-bold pb-2">
            Court {courtNum}
        </div>
        <div className="flex flex-row w-full justify-evenly text-white">
            <div className="flex flex-1 flex-col">
                <div>{scheduledCourt[0]}</div>
                <div>{scheduledCourt[1]}</div>
            </div>
            <div className="text-xl flex flex-1 font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col">
                <div>{scheduledCourt[2]}</div>
                <div>{scheduledCourt[3]}</div>
            </div>
        </div>
		</div>
		}
	}

	function RankingGraph({ data }: { data: any[] }) {
		console.log("rico data", data);
		
		return (
		<>
		<div className="text-white text-xl font-semibold">
			Weekly Rank Progression
		</div>
		<div className="rounded p-4 mt-6 w-[90%] h-[50vh]">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={data}
					margin={{
						top: 40,
						right: 30,
						left: 20,
						bottom: 40,
					}}
				>
				<CartesianGrid strokeWidth={1} stroke="#45779c" horizontal={false}/>
				<XAxis
					type="number"
					dataKey="week"
					strokeWidth={4}
					axisLine={false}
					stroke="#ffffff"
					tick={{ fill: "#ffffff" }}
					domain={[2, 8]}
					tickCount={7}
					tickLine={false}
					label={{
						value: "Week",
						position: "insideBottom",
						offset: -20,
						fill: "#ffffff"
					}}
				/>
				<YAxis
					type="number"
					reversed
					axisLine={false}
					stroke="#ffffff"
					strokeWidth={4}
					tickCount={10}
					tick={{ fill: "#ffffff" }}
					ticks={[1,2,3,4,5,6,7,8,9,10,11,12]}
					label={{
						value: "Rank",
						angle: -90,
						position: "insideLeft",
						fill: "#ffffff"
					}}
					domain={[1, 12]}
					interval={0}
				/> 
				<Line type="linear" dataKey="playerRank" stroke="#45779c" strokeWidth={4} />
				</LineChart>
			</ResponsiveContainer>
		</div>
		</>
		)
	}

  return (
    <div className="bg-[#0A3759]">
	<ScrollToTop/>
      <Nav />
      {scheduledCourt && playerDetails && playerStats ? <div className="flex flex-col items-center">
        <div
          className="text-white text-4xl py-4 pt-4 antonFont"
          
        >
          PLAYER PROFILE
        </div>
        <div className="w-36 h-36 rounded-full bg-[#45779c] text-white flex flex-col items-center justify-center font-bold">
          <div className="pb-2">Rank</div>
          <div className="text-5xl">{currentRanking+1}</div>
        </div>
        <div className="text-white font-bold text-3xl pt-6 pb-2 pt-6">
				{playerDetails.fullName}
        </div>
        <div className="text-white text-2xl">{playerDetails.gender} | Level {playerDetails.level}</div>
		<div className="flex flex-col justify-center text-center items-center pt-4 md:w-1/2">
        <Table className="text-white pt-3 text-2xl items-center bg-[#45779c] rounded">
					<TableHeader className="border-b-2 border-[#0A3759] antonFont">
						<TableRow>
						<TableHead className="text-center py-3">W</TableHead>
						<TableHead className="text-center py-3">L</TableHead>
						<TableHead className="text-center py-3">PE</TableHead>
						<TableHead className="text-center py-3">PA</TableHead>
						<TableHead className="text-center py-3">PD</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>{playerStats.wins}</TableCell>
							<TableCell>{playerStats.losses}</TableCell>
							<TableCell>{playerStats.pe}</TableCell>
							<TableCell>{playerStats.pa}</TableCell>
							<TableCell>{playerStats.pd}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<div
          className="text-white text-4xl pt-10 antonFont"
          
        >
          SCHEDULE
        </div>
		<div className="text-white text-sm max-w-100 py-4 md:max-w-[80%]">
            The schedule below outlines the first matches of the week. After the first game, the same four players on the court will mix and switch partners for the next round, for 3 games total. You'll earn points for every win, which will determine your standings and the court you'll play on the following week.
        </div>
        <div className="bg-[#45779c] rounded w-90 p-4 mt-5 mb-12 md:w-[80%]">
		<div className="flex flex-row justify-between pb-4">
            <CircleChevronLeft className={prevWeek > 2 ? "text-white" : "text-[#808080]"} onClick={handleGoBack} />
            <div className="text-xl text-white antonFont">{getTitle()}</div>
            <CircleChevronRight className={isShowingPrevMatches ? "text-white" : "text-[#808080]"} onClick={handleGoForward} />
        </div>
		{!isShowingPrevMatches ? getScheduleSubView() : 
		<div>
			{profileMatches && profileMatches.length > 0 && profileMatches.filter((match: any) => {
				return Number(match.week) === prevWeek
			}).map((match: any) => {
				return <div key={uuidv4()} className="flex flex-row w-full justify-between text-white">
				<div className="w-1/4 flex flex-col pb-4">
					<div>{getPlayerFormattedNameWithSubIndicator(match.team1player1, playerData)}</div>
					<div>{getPlayerFormattedNameWithSubIndicator(match.team1player2, playerData)}</div>
				</div>
				{<div className="text-3xl pb-4 flex flex-1 font-bold items-center justify-center antonFont" >
					{match.team1score}
				</div>}
				<div className="text-xl pb-4 flex flex-1 font-bold items-center justify-center">
					VS
				</div>
				<div className="text-3xl pb-4 flex flex-1 font-bold items-center justify-center antonFont">
					{match.team2score}
				</div>
				<div className="w-1/4 pb-4 flex flex-col">
					<div>{getPlayerFormattedNameWithSubIndicator(match.team2player1, playerData)}</div>
					<div>{getPlayerFormattedNameWithSubIndicator(match.team2player2, playerData)}</div>
				</div>
			</div>
			})
			}
		</div>}
		</div>
		</div>
		{rankingHistory.length > 0 && <RankingGraph data={rankingHistory}/>}
      </div> : <div className="h-screen items-center justify-center text-white flex"><Spinner /></div>}
	  <Footer />
    </div>
  );
}

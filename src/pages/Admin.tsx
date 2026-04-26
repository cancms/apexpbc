import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
  import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Footer from "@/core/Footer";
import Nav from "@/core/Nav";
import { generateStandings, getNextWeekInfo, transformSheetsAPIResponse } from "@/lib/utils";
import { ClipboardCopy } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getMatchSheetUrlBasedOnLvl, getPlayerDataSheetUrl, startingWeekDate } from "@/controller/controller";

export default function Admin() {
  const [_, setPlayerData] = useState<any>([]);
  const [level, setLevel] = useState("3.0");
  const [stats, setStats] = useState<any>([]);
  const [feedback, setFeedback] = useState("");
  const [weekNum, setWeekNum] = useState<any>(getNextWeekInfo(startingWeekDate).currentWeek);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(getMatchSheetUrlBasedOnLvl(level));
      const json = await res.json();
      const playerMatchesCsv = transformSheetsAPIResponse(json.values);

      const res2 = await fetch(getPlayerDataSheetUrl);
      const json2 = await res2.json();
      const playerDataCsv = transformSheetsAPIResponse(json2.values);

      const filteredLvlPlayerData = playerDataCsv.filter((playerData: any) => playerData.level === level);
      setPlayerData(filteredLvlPlayerData);
      const standings = generateStandings(filteredLvlPlayerData, playerMatchesCsv);
      for (let i = 0; i < standings.length; i++) {
        standings[i].sub = false;
        standings[i].noshow = false;
      }
      setStats(standings);
      setLoading(false);
    }
    setFeedback("");
    getData();
  }, [level]);

  const copyRegularSeasonMatchesAsExcelRows = () => {
    const increments = stats.length / 4;

    let output = "";

    for (let i = 0; i < increments; i++) {
      let player1 = stats[(i*4)].id;
      player1 += stats[(i*4)].sub ? "*" : "";
      player1 += stats[(i*4)].noshow ? "-" : "";

      let player2 = stats[(i*4) + 1].id;
      player2 += stats[(i*4) + 1].sub ? "*" : "";
      player2 += stats[(i*4) + 1].noshow ? "-" : "";
      let player3 = stats[(i*4) + 2].id;

      player3 += stats[(i*4) + 2].sub ? "*" : "";
      player3 += stats[(i*4) + 2].noshow ? "-" : "";

      let player4 = stats[(i*4) + 3].id;
      player4 += stats[(i*4) + 3].sub ? "*" : "";
      player4 += stats[(i*4) + 3].noshow ? "-" : "";
      
      output+=`${player1}\t${player2}\t${player3}\t${player4}\t\t\t${i+1}\t${weekNum}\n`;
      output+=`${player1}\t${player3}\t${player2}\t${player4}\t\t\t${i+1}\t${weekNum}\n`;
      output+=`${player1}\t${player4}\t${player2}\t${player3}\t\t\t${i+1}\t${weekNum}\n`;

    }

    navigator.clipboard.writeText(output)
      .then(() => {
        setFeedback("Copied to clipboard!");
      })
      .catch(_ => {
        setFeedback("Failed to copy!");
      });
  }

  const copyPlayoffMatchesAsExcelRows = () => {
    let output = "";
    output+=`${stats[4].id}\t${stats[5].id}\t${stats[10].id}\t${stats[11].id}\t\t\tqf1\t${weekNum}\n`;
    output+=`${stats[6].id}\t${stats[7].id}\t${stats[8].id}\t${stats[9].id}\t\t\tqf2\t${weekNum}\n`;
    output+=`${stats[2].id}\t${stats[3].id}\t\t\t\t\tsf1\t${weekNum}\n`;
    output+=`${stats[0].id}\t${stats[1].id}\t\t\t\t\tsf2\t${weekNum}\n`;
    output+=`\t\t\t\t\t\tfinals\t${weekNum}\n`;
    output+=`\t\t\t\t\t\tbronze\t${weekNum}\n`;
     navigator.clipboard.writeText(output)
      .then(() => {
        setFeedback("Copied to clipboard!");
      })
      .catch(_ => {
        setFeedback("Failed to copy!");
      });
  }

  const handlePlayerAvailibilityUpdate = (playerId: string, type: string) => {
    setStats((prevStats: any) => prevStats.map((stat: any) => {
      if (stat.id === playerId) {
        const newStat = { ... stat};
        newStat[type] = !stat[type];
        return newStat;
      } 
      return stat;
    }
    ))
  }

  return (<div className="">
    <Nav />
    <div className="flex flex-col min-h-screen items-center py-10">
      <div className="pb-10">
      <Label className="pb-2">Level: </Label>
      <Select value={level} onValueChange={setLevel}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="3.0">3.0</SelectItem>
          <SelectItem value="3.5">3.5</SelectItem>
          <SelectItem value="4.0+">4.0+</SelectItem>
        </SelectContent>
      </Select>
      </div>
      <Table className="w-fit mx-auto [&_th]:border [&_td]:border border-gray-700">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Rank</TableHead>
            <TableHead className="font-bold">Player</TableHead>
            <TableHead className="font-bold">Substitute?</TableHead>
            <TableHead className="font-bold">No Show?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats && stats.length > 1 && !loading ? stats.map((stat: any, index: number) => {
            return (
              <TableRow key={stat.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{stat.id.charAt(0).toUpperCase() + stat.id.slice(1)}</TableCell>
                <TableCell>
                  <input type="checkbox" checked={stat.sub} onChange={() => handlePlayerAvailibilityUpdate(stat.id, "sub")} />
                </TableCell>
                <TableCell>
                  <input type="checkbox" checked={stat.noshow} onChange={() => handlePlayerAvailibilityUpdate(stat.id, "noshow")} />
                </TableCell>
              </TableRow>
            )
          }) : <div className="h-[50vw] flex flex-col justify-center items-center"><Spinner /></div>}
        </TableBody>
      </Table>
      <div className="py-3">
      <Label htmlFor="weekNum" className="pb-2">Week Number</Label>
      <Input type="number" id="weekNum" className="w-20" placeholder="i.e. 3" value={weekNum} onChange={(evt: any) => setWeekNum(Number(evt.target.value))}/>
      </div>
      <Button variant="outline" className="mt-4 bg-[#45779c]" onClick={() => copyRegularSeasonMatchesAsExcelRows()} >Copy Regular Matches as Excel Rows <ClipboardCopy /> </Button>
      <Button variant="outline" className="mt-4 bg-[#FFD700]" onClick={() => copyPlayoffMatchesAsExcelRows()} >Copy Playoff Matches as Excel Rows <ClipboardCopy /> </Button>
      <div className="text-sm pt-3 color-green">{feedback}</div>
      </div>
    <Footer />
  </div>);
}
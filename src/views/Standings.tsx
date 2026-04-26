import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PROFILE_FEATURE, USE_PLAYER_DATA } from "@/controller/controller";
import { getPlayerFormattedName } from "@/lib/utils";
import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Standings(props: any) {
    return (
      <div className="flex flex-col items-center pb-2">
        <div className="flex flex-col items-center bg-[#45779c] w-[95vw] pb-5">
        <div className="text-white text-4xl py-4 pt-4 antonFont">STANDINGS</div>
        <div className="text-[#0A3759] text-2xl antonFont">{props.level} Ladder League</div>
        <div className="pt-4 max-w-[95vw]">
        {props.stats && Object.keys(props.stats).length > 0 && !props.loading ? <Table className="text-white pt-3 text-xl">
          <TableHeader className="antonFont">
            <TableRow>
              <TableHead className="md:w-[150px] text-center">PS</TableHead>
              <TableHead className="w-[150px] md:w-[300px] md:text-center">Player</TableHead>
              <TableHead className="md:w-[150px] text-center">W</TableHead>
              <TableHead className="md:w-[150px] text-center">L</TableHead>
              <TableHead className="md:w-[150px] text-center">PE</TableHead>
              <TableHead className="md:w-[150px] text-center">PA</TableHead>
              <TableHead className="md:w-[150px] text-center">PD</TableHead>
              <TableHead className="md:w-[150px] text-center"></TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
          {props.stats && Object.keys(props.stats).length > 0 && Object.keys(props.stats).map((p: any, i: number) => {
            return (
            <TableRow key={props.stats[p].id} className={`md:text-center ${i === 0 && "bg-[#09375a]"} ${i === 1 && "bg-[#19476b]"} ${i === 2 && "bg-[#28567a]"}`}><TableCell>{i+1}</TableCell>
              <TableCell className="md:text-center"><Link to={`${"/ladder-league/" + props.stats[p].id}`}>{USE_PLAYER_DATA ? getPlayerFormattedName(props.stats[p].id, props.playerData) : props.stats[p].id}</Link></TableCell>
              <TableCell className="text-center">{props.stats[p].wins}</TableCell>
              <TableCell className="text-center">{props.stats[p].losses}</TableCell>
              <TableCell className="text-center">{props.stats[p].pe}</TableCell>
              <TableCell className="text-center">{props.stats[p].pa}</TableCell>
              <TableCell className="text-center">{props.stats[p].pd}</TableCell>
              {PROFILE_FEATURE && <TableCell className="p-0 w-auto"><Link to={`${"/ladder-league/" + props.stats[p].id}`}><CircleChevronRight/></Link></TableCell>}
            </TableRow>
          )})}

          </TableBody>
        </Table> : <div className="flex flex-col items-center justify-center text-white h-75">
          <div><Spinner /></div>
          </div>}
        </div>
        </div>
        <div className="py-4">
          
        <Link to="/waiver"><div className="pr-3 text-white underline ">Player Waiver and Release</div></Link>
        </div>
      </div>
    )
}
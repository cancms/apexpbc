import { getPlayerFormattedNameWithSubIndicator } from "@/lib/utils"
import { v4 as uuidv4 } from "uuid";

export default function MatchHistory(props: any) {
    return (<div>
                <div className="pt-8 text-left text-white font-bold">
                    {/^-?\d+$/.test(props.group) &&  `Court ${props.group}`}
                    {(props.group.includes("qf") && `Quarterfinals ${props.group[props.group.length - 1]}`)}
                    {(props.group.includes("sf") && `Semifinals ${props.group[props.group.length - 1]}`)}
                    {(props.group === 'finals' && `Finals`)}
                    {(props.group === 'bronze' && `Bronze`)}
                </div>
                {props.matchHistory && props.matchHistory.length > 0 && props.matchHistory.filter((match: any) => {
                    return Number(match.week) === props.prevWeek && props.group === match.court
                }).map((match: any) => {
                    return (<div key={uuidv4()} className="flex flex-row w-full justify-between text-white">
                    <div className="w-1/3 flex flex-col pb-4">
                        <div>{getPlayerFormattedNameWithSubIndicator(match.team1player1, props.playerData)}</div>
                        <div>{getPlayerFormattedNameWithSubIndicator(match.team1player2, props.playerData)}</div>
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
                    <div className="w-1/3 pb-4 flex flex-col">
                        <div>{getPlayerFormattedNameWithSubIndicator(match.team2player1, props.playerData)}</div>
                        <div>{getPlayerFormattedNameWithSubIndicator(match.team2player2, props.playerData)}</div>
                    </div>
                </div>)
                })}
            </div>)
}
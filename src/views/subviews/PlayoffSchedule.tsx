import { getPlayerFormattedName } from "@/lib/utils";

export default function PlayoffSchedule(props: any) {
    return (<div>
        <div className="pt-8 text-left text-white font-bold">
            Quarterfinals 1
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[4].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[5].id, props.playerData)}</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[10].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[11].id, props.playerData)}</div>
            </div>
        </div>
        <div className="pt-8 text-left text-white font-bold">
            Quarterfinals 2
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[6].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[7].id, props.playerData)}</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[8].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[9].id, props.playerData)}</div>
            </div>
        </div>
        <div className="pt-8 text-left text-white font-bold">
            Semifinals 1
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[2].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[3].id, props.playerData)}</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col self-center">
                <div>Winner of QF1</div>
            </div>
        </div>
        <div className="pt-8 text-left text-white font-bold">
            Semifinals 2
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col">
                <div>{getPlayerFormattedName(props.stats[0].id, props.playerData)}</div>
                <div>{getPlayerFormattedName(props.stats[1].id, props.playerData)}</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col self-center">
                <div>Winner of QF2</div>
            </div>
        </div>
        <div className="pt-8 text-left text-white font-bold">
            Finals
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col self-center">
                <div>Winner of SF1</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col self-center">
                <div>Winner of SF2</div>
            </div>
        </div>
        <div className="pt-8 text-left text-white font-bold">
            Bronze
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col self-center">
                <div>Loser of SF1</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col self-center">
                <div>Loser of SF2</div>
            </div>
        </div>
            </div>)
}
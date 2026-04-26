import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { getCourtAssignment, getNextWeekInfo } from "@/lib/utils";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import SeasonSchedule from "./subviews/SeasonSchedule";
import PlayoffSchedule from "./subviews/PlayoffSchedule";
import MatchHistory from "./subviews/MatchHistory";
import { lengthOfLeague, startingWeekDate } from "@/controller/controller";

export default function Schedule(props: any) {
    const [isShowingPrevMatches, setIsShowingPrevMatches] = useState(false);
    const [prevWeek, setPrevWeek] = useState(0);

    useEffect(() => {
        if (props.matchHistory && props.matchHistory.length > 0) {
                setPrevWeek(Number(props.matchHistory[0].week));
                if (Number(props.matchHistory[0].week) === 8) {
                    setIsShowingPrevMatches(true);
                }
        }
    }, [props.matchHistory]);


    if (!props.stats || !props.playerData || props.stats.length === 0) {
        return (<div className="flex flex-col items-center justify-center text-white h-50"><div><Spinner /></div></div>);
    }

    const handleGoBack = () => {
        if (prevWeek === 0) {
        }
        else if (!isShowingPrevMatches) {
            setIsShowingPrevMatches(true);
        } else if (prevWeek > 2) {
            setPrevWeek(prevWeek => {
                return prevWeek - 1;
            })
        }
    }

    const handleGoForward = () => {
        if (prevWeek === 0) {

        }
        else if (prevWeek === Number(props.matchHistory[0].week)) {
            if (prevWeek !== 8) setIsShowingPrevMatches(false);
        } else if (!isShowingPrevMatches) {

        } else {
            setPrevWeek(prevWeek => {
                return prevWeek + 1;
            })
        }
    }



    const getScheduleSubView = () => {
        console.log(getNextWeekInfo(startingWeekDate));
        if (props.loading) {
            return <div className="flex flex-col items-center justify-center text-white h-75">
            <div><Spinner /></div>
            </div>
        }
        const groupings = [... new Set(props.matchHistory.filter((match: any) => {
            return Number(match.week) === prevWeek
            }).map((match: any) => {
                return match.court
        }))]

        if (getNextWeekInfo(startingWeekDate).currentWeek < 1) {
            return <div className="lg:m-10 my-10 text-white">
                {"All players will participate in Kings Court, 10-minute matches with randomly assigned partners to begin. Winners split and move up, while losers split and move down. Wins and losses will be used to determine the initial standings for the ladder league."}
        </div>
        }
        if (getNextWeekInfo(startingWeekDate).nextWeekNumber >= lengthOfLeague || isShowingPrevMatches) {
            let groupingsMH; 
            if (groupings && groupings.length > 0)  {
            groupingsMH = groupings.map((group: any) => {
            return <MatchHistory group={group} prevWeek={prevWeek} matchHistory={props.matchHistory} playerData={props.playerData}/>
            })
            return <div>
                {groupingsMH}
                <div className="text-white">
                    {"(S) - Substitute Player"}
                </div>
            </div>
        }
        } else {
            const courts = getCourtAssignment(props.stats, props.playerData);

            return <div>
        {getNextWeekInfo(startingWeekDate).nextWeekNumber < 7 ? courts && courts.length > 1 && courts.map((court: any, index: number) => {
            return <SeasonSchedule index={index} court={court} level={props.level}/>
        }) : <PlayoffSchedule stats={props.stats} playerData={props.playerData}/>}
        </div>
        }
        return <></>;
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
    console.log("prevWeek", prevWeek);
    return (
        <div className="flex flex-col items-center text-center">
        <div className="text-white text-4xl py-4 pt-4 antonFont">SCHEDULE</div>
        <div className="text-white text-sm lg:w-1/2 mx-4">
            {getNextWeekInfo(startingWeekDate).nextWeekNumber >= 2  ? "The schedule below outlines the first matches of the week. After the first game, the same four players on the court will mix and switch partners for the next round, for 3 games total. You'll earn points for every win, which will determine your standings and the court you'll play on the following week." : ""}
        </div>
        <div className="bg-[#45779c] rounded py-4 px-10 my-10 w-95  lg:w-[60vw]" >
        <div className="flex flex-row justify-between">
            <CircleChevronLeft className={!isShowingPrevMatches || prevWeek > 2 ? "text-white" : "text-[#808080]"} onClick={handleGoBack} />
            <div className="text-xl text-white antonFont">{getTitle()}</div>
            <CircleChevronRight className={isShowingPrevMatches && prevWeek !== 8 ? "text-white" : "text-[#808080]"} onClick={handleGoForward} />
        </div>
        {getScheduleSubView()}
        </div>
        </div>
    )
}
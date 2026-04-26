import { getRelativeCourtNumber } from "@/lib/utils";

export default function SeasonSchedule(props: any) {
    return (<div><div className="pt-8 text-left text-white font-bold">
            Court {getRelativeCourtNumber(props.index, props.level)}
        </div>
        <div className="flex flex-row justify-center w-full text-white">
            <div className="flex flex-1 flex-col">
                <div>{props.court[0]}</div>
                <div>{props.court[1]}</div>
            </div>
            <div className="flex flex-1 text-xl font-bold items-center justify-center">
                VS
            </div>
            <div className="flex flex-1 flex-col">
                <div>{props.court[2]}</div>
                <div>{props.court[3]}</div>
            </div>
        </div></div>)
}
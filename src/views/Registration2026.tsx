import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function Registration2026 (props: any) {
    return (
        <div className="flex flex-col bg-[#45779c] justify-center items-center">
          <div className="text-white text-2xl py-4 pt-4 antonFont">REGISTERED PLAYERS</div>
          <Tabs value={props.activeRegLvlTab} onValueChange={props.handleRegLvlTabChange} className="w-full items-center max-h-[200px] overflow-y-scroll">
            <TabsList className="w-full rounded-none">
              <TabsTrigger value="3.0" className="text-white text-xl flex-1 text-center pb-2 border-0 border-b-4 border-transparent data-[state=active]:border-white rounded-none antonFont">3.0</TabsTrigger>
              <TabsTrigger value="3.5" className="text-white text-xl flex-1 text-center pb-2 border-0 border-b-4 border-transparent data-[state=active]:border-white rounded-none antonFont">3.5</TabsTrigger>
              <TabsTrigger value="4.0+" className="text-white text-xl flex-1 text-center pb-2 border-0 border-b-4 border-transparent data-[state=active]:border-white rounded-none antonFont">4.0+</TabsTrigger>
            </TabsList>
            <TabsContent value="3.0">
              {props.registrations && props.registrations.length > 1 ? props.registrations.filter((registration: any) => {
                return registration["League Level — please select the level you’d like to register for."] === "Level 3.0" && registration["Payment Status"] === "Paid";
              }).map((registration: any, index: number) => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                  <div className="w-[3ch] pr-15">{index+1}.</div>
                  <div className="">{registration["Full Name"]}, {registration["Gender"].charAt(0)}</div>
                  </div>
              }) : <div className="flex flex-col items-center justify-center h-25 text-white ">
                        <div><Spinner /></div>
                        </div>}
              {props.registrations && props.registrations.length > 1 && 
                Array.from({ length: 12 - props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 3.0" && registration["Payment Status"] === "Paid").length }, (_, i) => props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 3.0" && registration["Payment Status"] === "Paid").length + i + 1).map(index => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                <div className="w-[3ch] pr-15">{index}</div>
                <div className="pl-15">-</div>
                </div>
              })}
            </TabsContent>
            <TabsContent value="3.5">
              {props.registrations && props.registrations.length > 1 ? props.registrations.filter((registration: any) => {
                return registration["League Level — please select the level you’d like to register for."] === "Level 3.5" && registration["Payment Status"] === "Paid";
              }).map((registration: any, index: number) => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                  <div className="w-[3ch] pr-15">{index+1}.</div>
                  <div className="">{registration["Full Name"]}, {registration["Gender"].charAt(0)}</div>
                  </div>
              }) : <div className="flex flex-col items-center justify-center h-25 text-white">
              <div><Spinner /></div>
              </div>}
              {props.registrations && props.registrations.length > 1 && 
                Array.from({ length: 12 - props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 3.5" && registration["Payment Status"] === "Paid").length }, (_, i) => props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 3.5" && registration["Payment Status"] === "Paid").length + i + 1).map(index => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                <div className="w-[3ch] pr-15">{index}</div>
                <div className="pl-15">-</div>
                </div>
              })}
              </TabsContent>
            <TabsContent value="4.0+">
              {props.registrations && props.registrations.length > 1 ? props.registrations.filter((registration: any) => {
                return registration["League Level — please select the level you’d like to register for."] === "Level 4.0+" && registration["Payment Status"] === "Paid";
              }).map((registration: any, index: number) => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                  <div className="w-[3ch] pr-15">{index+1}.</div>
                  <div className="">{registration["Full Name"]}, {registration["Gender"].charAt(0)}</div>
                  </div>
              }) : <div className="flex flex-col items-center justify-center h-25 text-white">
              <div><Spinner /></div>
              </div>}
              {props.registrations && props.registrations.length > 1 && 
                Array.from({ length: 12 - props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 4.0+" && registration["Payment Status"] === "Paid").length }, (_, i) => props.registrations.filter((registration: any) => registration["League Level — please select the level you’d like to register for."] === "Level 4.0+" && registration["Payment Status"] === "Paid").length + i + 1).map(index => {
                return <div className="flex flex-row w-[65vw] md:w-auto">
                <div className="w-[3ch] pr-15">{index}</div>
                <div className="pl-15">-</div>
                </div>
              })}
            </TabsContent>
          </Tabs>
        </div>
    )
}
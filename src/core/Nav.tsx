import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import apexbear from "../assets/apexbear.png";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { useLocation, Link, NavLink } from "react-router-dom";
import { useIsMobile } from "@/lib/isMobile";
import { SCHEDULE_FEATURE } from "@/controller/controller";


const ladderLeaguesMenus = [
    {text: 'Upcoming Spring Ladder Leagues', link: '#', key: 'upcoming_spring_ladder_leagues',
        children: [
            {text: 'Women\'s Ladder League', link: '/ladder-league/womens#standings', key: 'womens' },
            {text: 'Men\'s Ladder League', link: '/ladder-league/mens#standings', key: 'mens' },
            {text: 'Mixed Ladder League', link: '/ladder-league/mixed#standings', key: 'mixed' },
        ]
    },
    {text: 'Past Ladder Leagues', link: '#', key: 'past_ladder_leagues',
        children: [
            {text: 'Standings', link: '/ladder-league/past_standings#standings', key: 'past_standings' },
        ]
    },
];


const tournamentsChildrenMenus = [
    {text: 'Upcoming Tournaments', link: '/tournaments', key: 'up_tournaments' },
    {text: 'Past Tournaments', link: '/past-tournaments', key: 'past_tournaments' },
];

export default function Nav() {
    const isMobile = useIsMobile();
    const [leftNavOpen, setLeftNavOpen] = useState(false);
    const [ladderLeagueExpanded, setLadderLeagueExpanded] = useState(false);

    const baseStyle = "text-white transition-all";
    const activeStyle = "border-b-2 border-white";

    const location = useLocation();

    if (isMobile) {
    return (
      <div>
      <nav>
      <div className='topNav relative h-24 flex items-center w-full border-b border-gray-300 shadow-md'>
        <div className="ml-4">
            <Menu style={{color: "white"}} onClick={() => setLeftNavOpen(true)} />
          </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/"><img src={apexbear} alt="logo" className="w-24 h-24" /></Link>
            </div>
      </div>
      </nav>
    <Sheet open={leftNavOpen} onOpenChange={setLeftNavOpen}>
      <SheetContent side="left">
        <SheetHeader style={{ display: "none"}}>
          <SheetTitle style={{ display: "none"}}></SheetTitle>
        </SheetHeader>
        <div className="pt-10 pb-20 bg-[#0A3759] border-0 text-white flex flex-col justify-between h-screen">
          <div>
            <div className='text-xl pt-6 pb-6 pl-4 antonFont'>
              <NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>HOME</NavLink>
            </div>
            <div className='text-xl pt-2 pb-2 pl-4 flex flex-row antonFont'>
              <div onClick={() => setLadderLeagueExpanded(prevValue => !prevValue)}>LADDER LEAGUE</div>
              {ladderLeagueExpanded ?
               <ChevronUp className="ml-2 mt-2" onClick={() => setLadderLeagueExpanded(false)} />
             : <ChevronDown className="ml-2 mt-2" onClick={() => { if (location.pathname !== "/ladder-league") setLadderLeagueExpanded(true)}} />}

            </div>


            {/*(location.pathname === "/ladder-league" || ladderLeagueExpanded) && <div className='text-2xl pt-2 pb-6 pl-8 antonFont'>
              <NavLink to="/ladder-league#standings" onClick={() => setLeftNavOpen(false)} state={{ scrollTo: "standings" }} >Standings</NavLink></div>
            */}

            {(location.pathname === "/ladder-league" || ladderLeagueExpanded) && <div className='text-2xl pt-2 pb-6 pl-8 antonFont'>


                {ladderLeaguesMenus.map((iMenu) => (
                    <>
                        <div className="antonFont text-[1.1rem] border-none text-[#45779c] ">
                            {iMenu.text}
                        </div>
                        <ul  className=" "   >
                            {iMenu.children?.map(child => (
                                <li className="antonFont  py-3 pl-4 text-white text-[1rem] border-none"  >
                                <NavLink to={child.link} state={{scrollTo: child.key}}>{child.text}</NavLink>
                            </li>
                            ))}
                      </ul>
                    </>
                ))}

              </div>
            }



            {(location.pathname === "/ladder-league" || ladderLeagueExpanded) && SCHEDULE_FEATURE && <div className='text-xl pt-2 pb-6 pl-8 antonFont'>
              <NavLink to="/ladder-league#schedule" onClick={() => setLeftNavOpen(false)}   state={{ scrollTo: "schedule" }} >Schedule</NavLink>
              </div>
            }
            <div className='text-xl pt-2 pb-6 pl-4 antonFont'>
              {/*<NavLink to="/tournaments" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>TOURNAMENTS</NavLink>*/}

                <div className="    ">
                    TOURNAMENTS
                </div>
                <ul   className=" ">
                    {tournamentsChildrenMenus.map((child) => (
                        <li className="antonFont  py-3 pl-4 text-white text-[1rem] border-none"  >
                            <NavLink to={child.link} state={{ scrollTo: child.key}}>{child.text}</NavLink>
                        </li>
                    ))}
                </ul>



            </div>
          </div>
          <div
          className="flex flex-col pb-12 justify-center items-center"
          onClick={() => window.open("https://www.instagram.com/apexpbc", "_blank")}
          >
            <div className='text-xl'>Follow us</div>
            <div className="flex flex-row">
              <div className='pt-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
              <div className="font-bold text-xl pl-1 pt-3">apexpbc</div>
            </div>
          </div>
          </div>
      </SheetContent>
     </Sheet>
    </div>
    )

  } else {
    return (
      <div>
        <nav className="w-full bg-[#0A3759] flex items-center justify-between px-6 py-4 border-1 border-black/20">
      {/* Logo */}
      <div className="text-xl font-bold">
      <Link to="/"><img src={apexbear} alt="logo" className="w-24 h-24" /></Link>
      </div>

      {/* Nav Items */}
      <ul className="flex items-center gap-8">
        <li className="cursor-pointer text-white text-2xl antonFont"><NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>HOME</NavLink></li>
        {/* Dropdown using shadcn */}
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer text-2xl text-white antonFont outline-none">

              <div className="flex flex-row">
              <div>LADDER LEAGUE</div>
               <ChevronDown className="ml-2 mt-2"/>
             </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="bg-[#45779c] min-w-[150px]">
                    {ladderLeaguesMenus.map((iMenu) => (
                    <DropdownMenuSub  >
                        <DropdownMenuSubTrigger className="antonFont text-white/90 text-[1rem] border-none"  >
                            {iMenu.text}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent  className="bg-[#45779c] min-w-[150px]"   >
                                {iMenu.children?.map(child => (
                                    <DropdownMenuItem className="antonFont text-white text-xl border-none"  >
                                        <NavLink to={child.link} state={{ scrollTo: child.key}}>{child.text}</NavLink>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                ))}

              {/*<DropdownMenuItem className="antonFont text-white text-xl border-none" asChild><NavLink to="/ladder-league#standings" state={{ scrollTo: "standings"}}>Standings</NavLink></DropdownMenuItem>*/}
              {SCHEDULE_FEATURE && <DropdownMenuItem className="antonFont text-white text-xl border-none" asChild><NavLink to="/ladder-league#schedule" state={{ scrollTo: "standings"}}>Schedule</NavLink></DropdownMenuItem>}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        {/*<li className="cursor-pointer text-white text-2xl antonFont"><NavLink to="/tournaments" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>TOURNAMENTS</NavLink></li>*/}
         <li>
             <DropdownMenu>
                 <DropdownMenuTrigger className="cursor-pointer text-2xl text-white antonFont outline-none">
                     <div className="flex flex-row">
                         <div>TOURNAMENTS</div>
                         <ChevronDown className="ml-2 mt-2"/>
                     </div>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent align="end" className="bg-[#45779c] min-w-[150px]">
                     {tournamentsChildrenMenus.map((child) => (
                         <DropdownMenuItem className="antonFont text-white text-xl border-none"  >
                             <NavLink to={child.link} state={{ scrollTo: child.key}}>{child.text}</NavLink>
                         </DropdownMenuItem>
                     ))}
                 </DropdownMenuContent>
             </DropdownMenu>
         </li>
      </ul>
    </nav>
      </div>
    )
  }
}

import Footer from "@/core/Footer";
import Nav from "@/core/Nav";
import ScrollToTop from "@/core/ScrollToTop";

export default function LadderLeagueRules() {
    return (
        <div className="bg-[#0A3759]">
                <Nav />
                <ScrollToTop />
    		<div className="flex flex-col min-h-screen items-center">

            <div className="text-white text-3xl py-4 pb-0 antonFont">
			LADDER LEAGUE FORMAT
		    </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Scoring, Ranking, and Tie-Breakers"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Games will be played to 15 points, win by 2, using standard pickleball scoring rules."}</li>
                    <li>{"All games will be self-officiated."}</li>
                    <li>{"Player rankings will be determined by the total number of wins accumulated and will be updated weekly, excluding results from Week 1."}</li>
                    <li>{"In the event of a tie, rankings will be decided based on the following criteria, in order:"}</li>
                    <ul className="list-disc pl-5">
						<li>{"point differential → total points earned → least total points allowed"}</li>
					</ul>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Week 1: King of the Court"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"All players will participate in 10-minute matches with randomly assigned partners."}</li>
                    <li>{"At the end of each match, the team with the higher score will move up a court while the losing team will move down."}</li>
                    <li>{"Partners will be split after every game so that each player plays with a different teammate each round."}</li>
                    <li>{"Individual performance will be tracked based on the number of wins and losses."}</li>
                    <li>{"These standings will be used to determine match placements for the following weeks."}</li>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Weeks 2 - 7: Placement Matches"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Based on player rankings, those ranked 1–4 will compete on one court, players ranked 5–8 on the second court, and players ranked 9– 12 on the third court."}</li>
                    <li>{"Each week, participants will play a total of three games, rotating opponents within their respective groups."}</li>
                    <li>{"If all matches conclude before the scheduled end time, the remaining time may be used for recreational play."}</li>
                    <li>{"Players will be ranked according to the number of wins accumulated."}</li>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Week 8: Playoffs & Finals"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Players will be paired according to their rankings: 5th and 6th facing 11th and 12th, and 7th and 8th facing 9th and 10th."}</li>
                    <li>{"The top four players will automatically advance to the semifinals, while the remaining players will compete in the quarterfinals for a chance to challenge them."}</li>
                    <li>{"Winners of the semifinals will advance to the gold medal match, while the losing teams will compete in the bronze match."}</li>
                    <li>{"The gold medal match will be played as a best-of-three series to 11 points, win by 2."}</li>
                    <li>{"The bronze match will consist of a single game played to 15 points, win by 2."}</li>
                </ul>
            </div>
            <div className="text-white text-3xl py-4 pb-0 antonFont">
			RULES AND REGULATIONS
		    </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Substitute Players"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Players unable to attend a scheduled match may either arrange for a substitute player or request assistance from the league organizer in finding one."}</li>
                    <li>{"The substitute player must be of the same gender and possess a comparable skill level to the original player."}</li>
                    <li>{"Wins earned by a substitute player will count as 0.5 toward the player’s total win record."}</li>
                    <li>{"Losses recorded by a substitute player will count as a full 1 point toward the player's total loss record."}</li>
                    <li>{"Substitute players are not permitted during playoff week."}</li>
                    <li>{"If a player is unable to participate during playoffs, the organizers will assign a fill-in to maintain gameplay; however, any wins earned by the fill-in will not count toward standings."}</li>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"No-Shows or Repeated Absences Without Notice"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Players who fail to notify the organizers of their absence will receive a formal warning."}</li>
                    <li>{"The organizers will assign a substitute player to maintain gameplay; however, the absent player will be recorded as having lost all matches for that week."}</li>
                    <li>{"Repeated absences without prior notice may result in removal from the league at the organizers’ discretion, without eligibility for a refund."}</li>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Handling Disputes"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"As all matches are self-officiated, players are responsible for resolving any disputes among themselves. "}</li>
                    <li>{"If an agreement cannot be reached, the organizers may be consulted to make a final decision."}</li>
                </ul>
            </div>
            <div className="px-8 py-4 md:w-[66vw] text-white">
                <div className="font-bold">{"Player Withdrawal Mid-Season"}</div>
    			<ul className="list-disc pl-5 text-white">
                    <li>{"Players who withdraw from the league mid-season will not be eligible for a refund."}</li>
                    <li>{"The organizers will arrange for a fill-in player to participate for the remainder of the season."}</li>
                </ul>
            </div>
            </div>
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white underline text-center px-6 pt-8 pb-8">
			<p>Back To Top</p>
		</div>
        <Footer/>
    </div>
    )
}
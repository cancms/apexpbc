import Footer from "@/core/Footer";
import Nav from "@/core/Nav";
import ScrollToTop from "@/core/ScrollToTop";

export default function Waiver() {
	return (
		<div>
			<div className="bg-[#0A3759] min-h-screen">
				<ScrollToTop />
				<Nav/>
      <div className="flex flex-col items-center justify-center">
				<div
          className="text-white text-4xl py-4 pb-0 antonFont"
        >
					PLAYER WAIVER AND RELEASE
				</div>
				<div className="pt-4 px-4 text-white text-md">
					<div className="bg-[#45779c] rounded p-4 m-4">
        	<div className="pt-4 pb-2 text-white text-xl font-bold">Acknowledgement of Risk</div>
					Participation in pickleball and related activities organized by Apex Pickleball Club involves inherent risks, including but not limited to slips, falls, collisions, equipment failure, and physical exertion. Players voluntarily assume all risks associated with participation in any Apex Pickleball Club activity.

					<div className="pt-4 pb-2 text-white text-xl font-bold">Waiver & Release</div>
					By participating in any Apex Pickleball Club activity, players:
					<ul className="list-disc pl-5">
						<li>Release and discharge Apex Pickleball Club, its organizers, staff, volunteers, and facility partners from any and all claims, demands, or causes of action arising out of participation, including injury, illness, disability, death, or property damage.</li>
						<li>Agree not to hold Apex Pickleball Club, its representatives, or affiliates liable for any claims related to negligence or accident.</li>
						<li>Accept full responsibility for their own health, fitness, and ability to participate. Apex Pickleball Club does not provide medical services, and participants are solely responsible for any medical treatment or expenses that may arise.</li>
					</ul>
					<div className="pt-4 pb-2 text-white text-xl font-bold">Media Release</div>
					Participation in Apex Pickleball Club events constitutes permission for the club to use the player's name, likeness, image, voice, and any photographs or videos taken during club activities for promotional, marketing, and social media purposes, without compensation or additional consent.

					<div className="pt-4 pb-2 text-white text-xl font-bold">Notice</div>
					This document serves as a release of legal rights. Participation in any Apex Pickleball Club activity signifies that the player has read, understood, and agreed to the terms outlined above.


        </div>
				</div>
			</div>
			</div>
				<Footer />
		</div>
	)
}
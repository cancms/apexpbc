import apexbear from "@/assets/apexbear.png";
import { Link } from "react-router-dom";
import {
    Instagram,
} from 'lucide-react';

import picklershub from "@/assets/picklershub.jpeg";
import pklbolr from "@/assets/pklbolr.png";
import chillguypb from "@/assets/chillguypb.png";

const currentYear = new Date().getFullYear();
const partnerLogos = [
    {logo: pklbolr, link: '', text: ''},
    {logo: picklershub, link: '', text: ''},
    {logo: chillguypb, link: '', text: ''},
];


export default function Footer() {
  return (


        <footer  className="w-full py-4  bg-[#0A3759] shadow-[0_-2px_5px_rgba(0,0,0,0.1)] text-white">
              {/*<div className="border-t border-black/20"></div>*/}
            <style>{`
                h3 {
                    font-size: 1.25rem;
                    font-weight: normal;
                }
                    .footer-links {
                    a {
                    text-decoration: underline;
                }
                }
            `}</style>

              <section className=" py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 footer-links">
                      <div className="flex flex-col gap-4">
                          <h3 className="font-bold antonFont ">Support</h3>
                          <ul className="flex flex-col gap-2">
                              <li>
                                  <a href="mailto:apexpbc@gmail.com"  > Contact Us </a>
                              </li>
                              <li>
                                  <Link to="https://www.instagram.com/apexpbc"  target="_blank">
                                      <Instagram className="  mr-2 w-6 h-6  inline-block"/>apexpbc
                                  </Link>
                              </li>
                              <li>
                                  <Link to="waiver" > Player Waiver and Release</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="flex flex-col gap-4">
                          <h3 className="font-bold antonFont">Team</h3>
                          <ul className="flex flex-col gap-2">
                              <li>
                                  <Link to="aboutus" > About us</Link>
                              </li>
                              <li>
                                  <Link to="volunteer" > Volunteer</Link>
                              </li>
                              <li>
                                  <Link to="/"><img src={apexbear} alt="logo" className="w-24 h-24" /></Link>
                              </li>
                          </ul>
                      </div>
                      <div className="flex flex-col gap-4">
                          <h3 className="font-bold antonFont">Partners</h3>
                          <ul className="flex flex-col gap-2">
                              {partnerLogos.map((item) => (
                                  <li className="mt-4">
                                      <img src={item.logo}
                                           alt="Partner Logo"
                                           className="h-[5rem] object-contain opacity-80 hover:opacity-100 transition"/>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </section>
              <div className="border-t border-black/20"></div>
              <div className="text-center py-6">
                  &copy; {currentYear}, Apex Pickleball Club. All Rights Reserved.
              </div>
          </footer>




        /*<footer className="w-full py-4 text-center bg-[#0A3759] shadow-[0_-2px_5px_rgba(0,0,0,0.1)] text-white">
            <div className="flex flex-col items-center">
                <Link to="/"><img src={apexbear} alt="logo" className="w-32 h-32"/></Link>
                <div className="flex flex-row content-center">
                    <a href="mailto:apexpbc@gmail.com">
                        <div className="font-bold pr-3">Contact Us</div>
                    </a>
                    <div>|</div>
                    <div onClick={() => window.open("https://www.instagram.com/apexpbc", "_blank")} className='pl-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-instagram-icon lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                    </div>
                    <div onClick={() => window.open("https://www.instagram.com/apexpbc", "_blank")}
                         className="font-bold  pl-2">apexpbc
                    </div>
                </div>
                <p className="text-sm pt-5">&copy; {new Date().getFullYear()}, Apex Pickleball Club. All Rights
                    Reserved.</p>
            </div>
        </footer>*/
    )
    ;
}

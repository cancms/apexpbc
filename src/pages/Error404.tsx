import Footer from "@/core/Footer";
import Nav from "@/core/Nav";

export default function Error404() {
  return (
    <div className="bg-[#0A3759]">
        <Nav />
		<div className="flex flex-col min-h-screen items-center text-white justify-center align-center">
            Page not found!
        </div>
        <Footer/>
    </div>
)}

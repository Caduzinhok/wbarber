import MenuNavbar, { menuObj } from "@/components/menu";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
    const [width, setWidth] = useState<number | undefined>(
        undefined
    )

    useEffect(() => {
        if(typeof window === 'undefined'){
            return
        }
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full h-24 bg-[#0D121E] md:px-32 p-2 flex items-center justify-between">
            <img src="./logo.png" alt="Logo w-barber" className="md:size-16 size-14" />
            <ul className="hidden lg:flex md:space-x-10 space-x text-white list-none text-xs">
                {menuObj.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-base font-normal">{item.name}</a>
                    </li>
                ))}
            </ul>
            <div className="flex md:space-x-10 space-x-5 items-center">
                <a href="https://www.instagram.com/wbarberclub/">
                    <img src="./instagram.png" alt="Instagram" className="md:size-10 size-8" />
                </a>
                <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white md:px-4 md:py-2 md:text-base px-4 py-3 text-sm rounded-md">
                    <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club.">
                        Agendar Agora
                    </a>
                </button>
                {width && width < 1024 &&
                    <MenuNavbar />
                }
            </div>
        </div>
    )
}
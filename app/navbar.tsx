export default function Navbar() {
    return (
        <div className="w-full h-24 bg-[#0D121E] md:px-32 p-4 flex items-center justify-between">
            <img src="./logo.png" alt="Logo w-barber" className="md:size-16 size-12" />
            <ul className="hidden md:flex md:space-x-10 space-x text-white list-none text-xs">
                <li>
                    <a href="#Sobre" className="text-base font-normal">Sobre</a>
                </li>
                <li>
                    <a href="#Nossos_servicos" className="text-base font-normal">Nossos Serviços</a>
                </li>
                <li>
                    <a href="#Depoimentos" className="text-base font-normal">Depoimentos</a>
                </li>
                <li>
                    <a href="#" className="text-base font-normal">Equipe</a>
                </li>
                <li>
                    <a href="#Contato" className="text-base font-normal">Entre em Contato</a>
                </li>
            </ul>
            <div className="flex md:space-x-10 space-x-4 items-center">
                <a href="https://www.instagram.com/wbarberclub/">
                    <img src="./instagram.png" alt="Instagram" className="md:size-10 size-5" />
                </a>
                <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white md:px-4 md:py-2 md:text-base p-2 text-sm rounded-md">
                    <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club.">
                        Agendar Agora
                    </a>
                </button>
            </div>
        </div>
    )
}
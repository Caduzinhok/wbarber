export default function Navbar() {
    return (
        <div className="w-full bg- h-24 bg-[#0D121E] px-32 flex items-center justify-between">
            <img src="./logo.png" alt="Logo w-barber" className="size-16" />
            <ul className="flex space-x-10 text-white list-none">
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
            <div className="flex space-x-10 items-center">
                <a href="https://www.instagram.com/wbarberclub/">
                    <img src="./instagram.png" alt="Instagram" className="size-10" />
                </a>
                <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-4 py-2 rounded-md">
                    Agendar Agora
                </button>
            </div>
        </div>
    )
}
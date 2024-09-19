'use client'
import { Feedbacks } from "@/components/feedbacks";
import Navbar from "./navbar";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <div className="max-w-screen w-full">
      <Navbar />
      <div className="bg-bg-home h-container-main flex flex-col space-y-8 items-center justify-center">
        <div className="absolute inset-0 after:absolute after:inset-0 after:bg-gradient-home after:z-0 h-container-main top-24"></div>
        <div className="relative z-20 flex flex-col space-y-8 items-center justify-center">
          <h2 className="text-4xl text-white font-bold text-center uppercase leading-normal">
            Onde a elegância do clássico encontra <br /> o seu estilo moderno.
          </h2>
          <p className="text-lg text-white">
            Segunda a Sexta das 08:00 às 20:00. Sábado - 09 às 18h.
          </p>
          <p className="text-xl font-semibold text-white">Segunda a Sábado</p>
          <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md">
            Agendar Agora
          </button>
        </div>
      </div>

      <section className="bg-gradient-sobre h-container-main grid grid-cols-2 items-center justify-center px-24">
        <div className="flex items-center justify-start">
          <img src="./sobre.png" alt="" className="size-3/4" />
        </div>

        <div className="flex flex-col items-center justify-start space-y-4 ">
          <h2 className="text-white text-5xl font-bold w-full">
            Sobre
          </h2>
          <p className="text-gray-100 text-lg font-normal w-full text-justify">
            A W. BARBER CLUB é uma Barbearia em Goiânia contemporânea que oferece uma experiência única e inesquecível para seus clientes.
            Além da alta qualidade dos serviços, a barbearia aposta na originalidade, elegância e estilo moderno para se destacar no mercado.
            Vamos na contramão do estilo tradicional das barbearias. Para a equipe da W. BARBER CLUB, a aparência é uma extensão da personalidade de cada cliente, e seu objetivo é ajudar a promover a confiança e o bem-estar de seus clientes.
          </p>
          <p className="text-gray-300 text-md font-light w-full text-justify">
            Localizado em Rua 28, 476 - St. Marista, Goiânia - GO, 74150-090
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center h-container-main bg-gradient-servicos space-y-12 px-24">
        <h2 className="text-white text-5xl font-bold">
          Nossos Serviços
        </h2>

        <div className="flex items-center justify-between space-x-8 w-full">
          <Services />
        </div>
        <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md">
          Agendar Agora
        </button>
      </section>

      <section className="gap-12 flex flex-col items-center justify-center bg-gradient-depoimentos h-container-main w-full px-24">
        <h2 className="text-white text-5xl font-bold">
          Depoimentos
        </h2>
        <Feedbacks />
      </section>

      <footer className="flex items-center justify-between py-20 px-24 bg-gradient-footer">
        <img src="./logo.png" alt="Logo w-barber" className="size-24" />
        <div className="flex gap-10 justify-start items-start">
          <div className="text-white space-y-4">
            <p className="text-2xl text-red-500 font-semibold">
              Entre em Contato
            </p>

            <div>
              <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club." className="flex items-center gap-2">
                <img src="./whatsapp.png" alt="Whatsapp" className="size-6" />
                <span>
                  (62) 99391-8303
                </span>
              </a>

            </div>

            <div className="flex items-center gap-2">
              <img src="./telefone.png" alt="Telefone" className="size-6" />
              <span>
                (62) 3645-3970
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src="./instagram.png" alt="Instagram" className="size-6" />
              <span className="font-semibold">
                @wbarberclub
              </span>
            </div>
          </div>

          <div className="text-white space-y-4">
            <p className="text-2xl text-red-500 font-semibold">
              Horário de Funcionamento
            </p>
            <p>
              Segunda a Sexta das 08:00 às 20:00.
            </p>
            <p>Sábado - 09 às 18h.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

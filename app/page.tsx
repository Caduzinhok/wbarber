'use client'
import { Feedbacks } from "@/components/feedbacks";
import Navbar from "./navbar";
import { Services } from "@/components/services";
import { Footer } from "./footer";


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
          <p className="text-gray-300 text-sm font-light w-full text-justify font-light">
            Localizado em Rua 28, 476 - St. Marista, Goiânia - GO, 74150-090
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center h-container-main bg-gradient-servicos space-y-24 px-24">
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
      <section className="space-y-24 flex flex-col items-center justify-center bg-gradient-depoimentos h-container-depoimentos w-full px-24">
        <h2 className="text-white text-5xl font-bold">
          Depoimentos
        </h2>
        <Feedbacks />
        <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md">
            Marque um Horário Agora
        </button>
      </section>
      <Footer/>
    </div>
  );
}

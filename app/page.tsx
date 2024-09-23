'use client'
import { Feedbacks } from "@/components/feedbacks";
import Navbar from "./navbar";
import { Services } from "@/components/services";
import { Footer } from "./footer";


export default function Home() {
  return (
    <div className="max-w-screen w-full overflow-hidden">
      <Navbar />
      <div className="max-w-full bg-bg-home md:bg-cover md:bg-top bg-auto bg-top h-container-main flex flex-col space-y-8 items-center justify-center p-2">
        <div className="absolute inset-0 after:absolute after:inset-0 after:bg-gradient-home after:z-0 h-container-main top-24" />
        <div className="relative z-20 flex flex-col space-y-8 items-center justify-center">
          <h2 className="md:text-4xl text-2xl text-white font-bold text-center uppercase leading-normal">
            Onde a elegância do clássico encontra <br /> o seu estilo moderno.
          </h2>
          <p className="md:text-lg text-xs text-gray-300">
            Segunda a Sexta das 08:00 às 20:00. Sábado - 09 às 18h.
          </p>
          <p className="md:text-xl text-lg font-semibold text-white">Segunda a Sábado</p>
          <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md">
            <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club.">
              Agendar Agora
            </a>
          </button>
        </div>
      </div>

      <section id="Sobre" className="bg-gradient-sobre md:h-container-main h-container-main-mobile items-center justify-center px-4 pb-12 space-y-12 md:space-y-0 md:px-24 md:grid md:grid-cols-2">
        <div className="flex items-center justify-start">
          <img src="./sobre.png" alt="" className="md:size-3/4 size-full p-4" />
        </div>

        <div className="flex flex-col items-center justify-start space-y-4 ">
          <h2 className="text-white md:text-5xl text-4xl md:text-start text-center font-bold w-full">
            Sobre
          </h2>
          <p className="text-gray-100 text-md font-normal w-full text-justify md:text-start md:text-lg">
            A W. BARBER CLUB é uma Barbearia em Goiânia contemporânea que oferece uma experiência única e inesquecível para seus clientes.
            Além da alta qualidade dos serviços, a barbearia aposta na originalidade, elegância e estilo moderno para se destacar no mercado.
            Vamos na contramão do estilo tradicional das barbearias. Para a equipe da W. BARBER CLUB, a aparência é uma extensão da personalidade de cada cliente, e seu objetivo é ajudar a promover a confiança e o bem-estar de seus clientes.
          </p>
          <p className="text-gray-300 text-xs w-full text-justify font-light md:text-sm">
            Localizado em Rua 28, 476 - St. Marista, Goiânia - GO, 74150-090
          </p>
        </div>
      </section>

      <section id="Nossos_servicos" className="flex flex-col w-full h-full bg-gradient-servicos md:space-y-32 space-y-12 px-8 py-8 md:py-0 md:px-24 md:items-center md:justify-center md:h-container-main">
        <h2 className="text-white text-4xl font-bold text-center md:text-start md:text-5xl">
          Nossos Serviços
        </h2>

        <div className="flex items-center justify-between md:space-x-8 w-full">
          <Services />
        </div>
        <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md">
          <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club.">
            Agendar Agora
          </a>
        </button>
      </section>

      <section id="Depoimentos" className="flex flex-col items-center justify-center bg-gradient-depoimentos h-container-depoimentos w-full md:space-y-32 space-y-12 md:py-0 py-12 px-12 md:px-24">
        <h2 className="text-white md:text-5xl text-4xl font-bold w-full text-center">
          Depoimentos
        </h2>
        <Feedbacks />
        <button className="bg-[#D60F26] hover:bg-[#D60F26]/80 transition text-white px-8 py-4 rounded-md md:w-auto w-full">
          <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club.">
            Marque um Horário Agora
          </a>
        </button>
      </section>

      <Footer />
    </div>
  );
}

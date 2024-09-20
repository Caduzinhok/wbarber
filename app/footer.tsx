export function Footer(){
    return(
        <footer id="Contato" className="flex md:flex-row flex-col md:space-y-0 space-y-8 items-center md:justify-between justify-center py-20 md:px-24 px-4 bg-gradient-footer w-full">
        <img src="./logo.png" alt="Logo w-barber" className="size-24" />
        <div className="flex md:flex-row flex-col gap-10 md:justify-start md:items-start items-center justify-center">
          <div className="text-white space-y-4">
            <p className="md:text-2xl text-lg text-red-500 font-semibold">
              Entre em Contato
            </p>

            <div className="md:text-base text-sm">
              <a href="https://wa.me/5562993918303?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20WBarber%20Club." className="flex items-center gap-2">
                <img src="./whatsapp.png" alt="Whatsapp" className="size-6" />
                <span>
                  (62) 99391-8303
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 md:text-base text-sm">
              <img src="./telefone.png" alt="Telefone" className="size-6" />
              <span>
                (62) 3645-3970
              </span>
            </div>

            <div className="flex items-center gap-2 md:text-base text-sm">
              <img src="./instagram.png" alt="Instagram" className="size-6" />
              <span className="font-semibold">
                @wbarberclub
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-white space-y-4 md:block">
            <p className="md:text-2xl text-lg text-red-500 font-semibold">
              Horário de Funcionamento
            </p>
            <p>
              Segunda a Sexta das 08:00 às 20:00.
            </p>
            <p>Sábado - 09 às 18h.</p>
          </div>
        </div>
        
      </footer>
    )
}
export function Footer(){
    return(
        <footer id="Contato" className="flex items-center justify-between py-20 px-24 bg-gradient-footer">
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
    )
}
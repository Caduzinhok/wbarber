import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import '../app/page.css'
import "swiper/css";
import "swiper/css/navigation";
import CardService from "./cardServices";
import { objectServices } from "@/data/services";

export function Services() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      navigation
      breakpoints={{
        // Quando a tela for >= 640px
        640: {
          slidesPerView: 1,
        },
        // Quando a tela for >= 1366px
        1366: {
          slidesPerView: 4,
        },
        // Quando a tela for >= 1920px
        1920: {
          slidesPerView: 5,
        },
      }}
      className="flex w-full items-start justify-start md:space-x-10 max-w-full overflow-hidden scroll-smooth transition-all duration-1000"

    >
      {objectServices.map((servico) => {
        return (
          <SwiperSlide
            key={servico.name}
            className="md:max-w-80 max-w-full"
          >
            <CardService
              name={servico.name}
              price={servico.price}
              image={servico.image}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
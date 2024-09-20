import { objectFeedbacks } from "@/data/feedbacks"
import { CardFeedbacks } from "./cardFeedbacks"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export function Feedbacks() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
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
                  slidesPerView: 3,
                },
              }}
            navigation={true}
            className="flex relative items-center justify-center md:space-x-10 max-w-full overflow-hidden scroll-smooth transition-all duration-1000">
            {objectFeedbacks.map((feedback) => {
                return ( 
                    <SwiperSlide
                        key={feedback.textFeedback}
                        className="md:max-w-80 max-w-full"
                    >
                        <CardFeedbacks
                            name={feedback.name}
                            image={feedback.image}
                            countStars={feedback.countStars}
                            textFeedback={feedback.textFeedback}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
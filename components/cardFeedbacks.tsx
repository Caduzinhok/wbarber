import { div, img } from "framer-motion/client"

interface CardFeedbacksProps {
    image?: string
    name: string
    countStars: number
    textFeedback: string
}

export function CardFeedbacks(props: CardFeedbacksProps) {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      
      const randomColor = getRandomColor(); // Gera uma cor aleatória
    const stars = () => {
        let index = 0
        let arrStars = []
        while (props.countStars > index) {
            arrStars.push('star' + index.toString)
            index = index + 1
        }
        return arrStars
    }
    return (
        <div className="max-w-sm w-full bg-slate-700 space-y-4 px-4 py-2 rounded-md max-h-full h-full">
            <div className="flex gap-4 items-center">
                {props.image ?
                    <img src={props.image} alt="Carlos Andrade" className="size-10" />
                    : <div 
                        className="size-10 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: randomColor }}
                        >
                        <span className="text-white text-xl">
                        {props.name.substring(0, 1).toUpperCase()}
                        </span>
                    </div>}
                <span className="text-white">
                    {props.name}
                </span>
            </div>

            <div className="flex space-x-2 items-center">
                <div className="flex space-x-2 items-center">
                    {stars().map((star) => {
                        return (
                            <img src="estrela.png" alt="Estrela" key={star} className="size-4" />
                        )
                    })}
                </div>
            </div>
            <p
                title={props.textFeedback}
                className="text-white w-full line-clamp-5">
                {props.textFeedback}
            </p>
        </div>
    )
}
'use client'

interface CardServiceProps{
    name: string
    price: string
    image: string
}
export default function CardService({name, price, image}: CardServiceProps) {
    return (
        <div className="min-w-80 rounded-lg bg-black">
            <img src={image} alt="Corte de Cabelo" className="w-full min-h-60" />
            <div className="bg-white px-2 py-4 flex justify-between items-center">
                <span className="text-gray-900 font-semibold">
                    {name}
                </span>
                <span className="text-gray-900 font-semibold text-lg">
                    {price}
                </span>
            </div>
        </div>
    )
}
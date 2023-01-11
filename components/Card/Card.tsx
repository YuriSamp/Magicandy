import Image from "next/image"
import Link from "next/link"
import { FormataBRL } from "../../utils/ConvertCurrency"

const Card = (props: any) => {
    console.log(props)    
    return (
        <div className="flex flex-col gap-2 lg:gap-0 border-2 border-[#8c52ff] items-center justify-between text-center rounded-2xl overflow-hidden  min-w-500px mx-auto md:min-w-[400px]">
            <Image 
                className="w-[400px] h-[300px]"
                width={300}
                height={300}
                src={props.src}
                alt={props.alt}
            />
            <div className="flex flex-col py-5 w-full text-[#8c52ff] bg-[#f8f8ff] gap-4 border-t-[#8c52ff] border-t-2">
                <h3 className="text-2xl">
                    {props.productTitle}
                </h3>
                <span className="text-xl">
                    {FormataBRL(props.productPrice)}
                </span>
                <Link 
                    href="#"
                    className="text-lg p-1 w-1/2 mx-auto radius-5 ring-2 ring-[#FF8FB1] rounded-lg"
                >
                    Ver detalhes
                </Link>
            </div>
            
        </div>
    )
}

export default Card
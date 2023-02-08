import Image from "next/image"
import { FormataBRL } from "utils/ConvertCurrency"
import { IProduto } from 'interface/IProduto'
import Button from '../Button'

const Card = (props: IProduto) => {
    return (
        <div className="flex flex-col md:mx-0 lg:gap-0 border-2 border-fontPurple items-center justify-between text-center rounded-2xl overflow-hidden min-w-500px mx-auto drop-shadow-xl">
            <Image
                className=" w-[400px]  min-h-[300px]  object-cover border-b-2 border-fontPurple"
                width={300}
                height={300}
                src={props.Src}
                alt={props.Alt}
            />
            <div className="flex flex-col h-full py-5 w-full text-fontPurplborder-fontPurple bg-backgroundWhite gap-4 border-t-fontPurplborder-fontPurple border-t-2 justify-between">
                <h3 className="text-2xl font-kalam text-fontPurple">
                    {props.ProductTitle}
                </h3>
                <span className="text-xl">
                    {FormataBRL(props.ProductPrice)}
                </span>
            </div>
            <div className="bg-backgroundWhite w-full p-6">
                <Button type='LINK' href={props.ProductTitle} >Ver Detalhes</Button>
            </div>
        </div>
    )
}

export default Card
import Image from "next/image"
import { FormataBRL } from "../../utils/ConvertCurrency"
import { IProduto } from '../../utils/IProduto'
import Button from '../Button/Button'

const Card = (props: IProduto) => {
    return (
        <div className="flex flex-col md:mx-0 lg:gap-0 border-2 border-fontPurple items-center justify-between text-center rounded-2xl overflow-hidden min-w-500px mx-auto md:min-w-[400px] drop-shadow-xl">
            <Image
                className=" w-[400px]  h-[300px]  object-cover border-b-2 border-fontPurple"
                width={300}
                height={300}
                src={props.src}
                alt={props.alt}
            />
            <div className="flex flex-col py-5 w-full text-fontPurplborder-fontPurple bg-backgroundWhite gap-4 border-t-fontPurplborder-fontPurple border-t-2">
                <h3 className="text-2xl font-kalam text-fontPurple">
                    {props.productTitle}
                </h3>
                <span className="text-xl">
                    {FormataBRL(props.productPrice)}
                </span>
                <Button type='LINK' value='Ver detalhes' href={props.id} />
            </div>

        </div>
    )
}

export default Card
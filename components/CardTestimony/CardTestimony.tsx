import Image from "next/image"

interface Props {
    Name: string;
    Description: string;
    Img: string;
}

const CardTestimony = (props: Props) => {
    console.log(props.Img)
   
    return (
        <div
            className='flex flex-col max-w-[500px] items-center gap-4 w-full md:1/2 border-2 rounded-xl border-fontPurple p-8 bg-backgroundWhite' data-aos="flip-right"
            data-aos-once="true"
            data-aos-offset="-700"
        >
            <Image
                className='h-[140px] w-[140px] object-cover border-2 border-black rounded-full'
                src={props.Img}
                alt=""
                width={200} height={200}
            />
            <div className='text-xl font-bold'>
                {props.Name}
            </div>
            <div className='text-lg text-black'>
                {props.Description}
            </div>
        </div>
    )
}

export default CardTestimony
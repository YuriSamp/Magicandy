import Image from "next/image"
import logo from '../../public/logo.png'


const Footer = (props: any) => {
    return (
        <>
            <footer className="flex flex-col items-center border-t-2 py-10 gap-5 bg-[#f8f8ff]">
                <Image
                    className="w-[150px] lg:w-[300px]" 
                    src={logo}
                    alt="Logo da Confeitaria Magicandy." 
                />
                <span className="text-xl text-[#8c52ff] text-center">Copyright © 2023 Yuri | Carlos <br className='md:hidden' /> All rights reserved.</span>
            </footer>
        </>
    )
}

export default Footer
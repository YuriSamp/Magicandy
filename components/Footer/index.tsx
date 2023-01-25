import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center gap-2 text-fontPurple text-3xl border-t-2 pt-10 bg-[#f8f8ff]">
                <h3 className="font-bold">Magicandy</h3>
                <p className="text-xl text-black">Projeto e designer desenvolvidos por:</p>
                <div className='flex flex-col pb-10 md:flex-row gap-10'>
                    
                    <span className='flex flex-col text-2xl  text-center items-center gap-2'>
                        <p className='text-black font-semibold tracking-wider'>Yuri</p>
                        <span className="flex gap-4">
                            <Link href='https://github.com/YuriSamp'><BsGithub className='text-black' /></Link>
                            <Link href='https://www.linkedin.com/in/yurisamp/'><BsLinkedin className='text-black' /></Link>
                        </span>
                    </span>
                        
                    <span className='flex flex-col text-2xl pl-10 text-center items-center gap-2 border-l-4 border-fontPurple'>
                        <p className='text-black font-semibold tracking-wider'>Carlos</p>
                        <span className="flex gap-4">
                            <Link href='https://github.com/RamosCarlosEduardo'><BsGithub className='text-black' /></Link>
                            <Link href='https://www.linkedin.com/in/carlos-eduardo-ramos-92b524218/'><BsLinkedin className='text-black' /></Link>
                        </span>
                    </span>

                </div>
                <span className="w-full text-lg text-fontPurple py-3 bg-gray-50 text-center">Copyright © 2023 <br className='md:hidden' /> All rights reserved.</span>
            </footer>
        </>
    )
}

export default Footer
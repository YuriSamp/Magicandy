import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center border-t-2 py-10 gap-5 bg-[#f8f8ff]">
                <span className="text-2xl text-fontPurple text-center">Copyright © 2023 <br className='md:hidden' /> All rights reserved.</span>
                <div className='flex flex-col md:flex-row gap-2'>
                    <span className='flex text-2xl  text-center items-center gap-2'>
                        <Link href='https://github.com/YuriSamp'><BsGithub className='text-violet-900' /></Link>
                        <Link href='https://www.linkedin.com/in/yurisamp/'><BsLinkedin className='text-violet-900' /></Link>
                        <p className='text-fontPurple'>Yuri Sampaio </p>
                        <RxDividerVertical className='text-4xl text-fontPurple hidden md:flex' />
                    </span>
                    <span className='flex text-2xl text-center items-center gap-2'>
                        <Link href='https://github.com/RamosCarlosEduardo'><BsGithub className='text-violet-900' /></Link>
                        <Link href='https://www.linkedin.com/in/carlos-eduardo-ramos-92b524218/'><BsLinkedin className='text-violet-900' /></Link>
                        <p className='text-fontPurple'>Carlos Ramos </p>
                    </span>
                </div>

            </footer>
        </>
    )
}

export default Footer
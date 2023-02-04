import SocialMedia from './SocialMedia'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-2 text-fontPurple text-3xl border-t-2 pt-6 bg-[#f8f8ff]">
            <h3 className="font-bold">Magicandy</h3>
            <p className="text-xl text-black">Projeto e design desenvolvidos por:</p>
            <div className='flex flex-col pb-4 md:flex-row gap-10'>
                <SocialMedia
                    Github={'https://github.com/YuriSamp'}
                    Linkedin={'https://www.linkedin.com/in/yurisamp/'}
                    Nome={'Yuri'}
                    Css={'flex flex-col text-2xl text-center items-center gap-2  border-fontPurple'}
                />
                <SocialMedia
                    Github={'https://github.com/RamosCarlosEduardo'}
                    Linkedin={'https://www.linkedin.com/in/carlos-eduardo-ramos-92b524218/'}
                    Nome={'Carlos'}
                    Css={'flex flex-col text-2xl md:pl-10 text-center items-center gap-2 md:border-l-4 border-fontPurple'}
                />
            </div>
            <span className="w-full text-lg text-fontPurple py-3 bg-gray-50 text-center">Copyright © 2023 <br className='md:hidden' /> All rights reserved.</span>
        </footer>
    )
}

export default Footer

// md:border-l-4 md:pl-10
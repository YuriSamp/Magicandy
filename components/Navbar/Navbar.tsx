import Image from 'next/image';
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../public/logo.svg'


const Navbar = (props: any) => {

    return (
        <>
            <nav className="flex flex-col lg:flex-row lg:px-48 gap-8 lg:gap-0  py-5 border-b-2 border-[#8c52ff] items-center justify-between bg-[#f8f8ff]">
                <a href="#">
                    <Image className="w-[200px]" src={logo} alt="Logo da Confeitaria Magicandy." />
                </a>
                <ul className="flex gap-16 font-kalam text-xl">
                    <li><Link href="#" className='text-[#8c52ff] text-2xl' >Home</Link></li>
                    <li><Link href="#" className='text-[#8c52ff] text-2xl' >Produtos</Link></li>
                    <li><Link href="#" className='text-[#8c52ff] text-2xl' >Contato</Link></li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 text-[#8c52ff] text-2xl"><AiOutlineShoppingCart />Carrinho</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
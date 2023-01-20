import Image from 'next/image';
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from 'public/logo.svg'

const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col lg:flex-row lg:px-48 gap-8 lg:gap-0  py-5 border-b-2 border-fontPurple items-center justify-between bg-backgroundWhite">
                <Link href="/">
                    <Image className="w-[200px]" src={logo} alt="Logo da Confeitaria Magicandy." />
                </Link>
                <ul className="flex flex-col md:flex-row gap-2 md:gap-8 font-kalam">
                    <li><Link href="/" className='text-fontPurple text-xl lg:text-2xl' >Home</Link></li>
                    <li><Link href="/produtos/" className='text-fontPurple text-xl lg:text-2xl' >Produtos</Link></li>
                    <li><Link href="/contato" className='text-fontPurple text-xl lg:text-2xl' >Contato</Link></li>
                    <li><Link href="/carrinho" className="flex items-center gap-2 text-fontPurple text-xl lg:text-2xl"><AiOutlineShoppingCart />Carrinho</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
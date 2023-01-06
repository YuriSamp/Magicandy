import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = (props:any) => {

    return (
        <>
            <nav className="flex px-48 py-5 border-b-2 items-center justify-between">
                <a href="#">
                <img className="w-[200px]" src="https://http.cat/402" alt="Logo da Confeitaria Magicandy." />
                </a>
                <ul className="flex gap-5 font-kalam text-xl">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Produtos</Link></li>
                    <li><Link href="#">Contato</Link></li>
                    <li>
                        <Link href="#" className="flex items-center gap-2"><AiOutlineShoppingCart />Carrinho</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
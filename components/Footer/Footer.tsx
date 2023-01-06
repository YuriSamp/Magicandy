import Image from "next/image"

const Footer = (props:any) => {
    return (
        <>
            <footer className="flex flex-col items-center border-t-2 py-10 gap-5">
                    <img className="w-[300px]" src="https://http.cat/202" alt="Logo da Confeitaria Magicandy." />
                    <span className="text-xl ">Copyright © 2023 Yuri | Carlos, All rights reserved.</span>
            </footer>
        </>
    )
}

export default Footer
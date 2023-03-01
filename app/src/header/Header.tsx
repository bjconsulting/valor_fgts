import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import logo from './logo.png'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="max-w-[393px] py-8 mx-auto tablet:mx-auto tablet:max-w-[834px] desktop:max-w-[1440px]">
            <div className="max-w-[90%] mx-auto flex justify-between">
                <picture className="pointer-events-none">
                    <img className="w-[82px] tablet:w-[168px] desktop:w-[235.55px]" src={logo} alt="Valor Serviços" />
                </picture>

                <div className="desktop:hidden">
                    <Hamb open={open} setOpen={setOpen} />
                    <Menu open={open}/>
                </div>

                <div className="hidden desktop:flex flex-row gap-5">
                    <a href="https://valorservicos.com.br" className='text-[20px] leading-[24px] font-bold p-5 pt-2 border-b-2 border-b-transparent hover:border-b-[#354452]'>Home</a>
                    <a href="#como-obter" className='text-[20px] leading-[24px] font-bold p-5 pt-2 border-b-2 border-b-transparent hover:border-b-[#354452]'>Como obter</a>
                    <a href="#depoimentos" className='text-[20px] leading-[24px] font-bold p-5 pt-2 border-b-2 border-b-transparent hover:border-b-[#354452]'>Depoimentos</a>
                    <a href="#quem-somos" className='text-[20px] leading-[24px] font-bold p-5 pt-2 border-b-2 border-b-transparent hover:border-b-[#354452]'>Quem Somos</a>
                    <a href="#faq" className='text-[20px] leading-[24px] font-bold p-5 pt-2 border-b-2 border-b-transparent hover:border-b-[#354452]'>FAQ</a>
                </div>
            </div>
        </header>
    )
}
export default Header
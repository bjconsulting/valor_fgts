import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import logo from './logo.png'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="max-w-[393px] py-8 mx-auto tablet:w-[834px] tablet:mx-auto tablet:max-w-[834px]">
            <div className="max-w-[90%] mx-auto flex justify-between">
                <picture className="pointer-events-none">
                    <img className="w-[82px] tablet:w-[168px]" src={logo} alt="Valor Serviços" />
                </picture>

                <div>
                    <Hamb open={open} setOpen={setOpen} />
                    <Menu open={open}/>
                </div>
            </div>
        </header>
    )
}
export default Header
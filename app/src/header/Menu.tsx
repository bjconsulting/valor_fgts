function Menu({ open }: { open: boolean }) {
    console.log('Menu state: ', open);
    if (!open) return null;
    return (
        <nav className='flex flex-col justify-center bg-prim text-left p-[2em] absolute nav -translate-x-full text-white text-xl gap-3'>
            <a href="#home" className='menu_item'>
                Home
            </a>

            <a href="#serviços" className='menu_item'>
                Serviços
            </a>

            <a href="#contato" className='menu_item'>
                Contato
            </a>

            <a href="#depoimentos" className='menu_item'>
                Depoimentos
            </a>

            <a href="#s" className='menu_item'>
                Blog
            </a>

            <a href="#s" className='menu_item'>
                Sobre
            </a>
        </nav>
    )
}

export default Menu;
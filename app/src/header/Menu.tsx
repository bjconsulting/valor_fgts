function Menu({ open }: { open: boolean }) {
    console.log('Menu state: ', open);
    if (!open) return null;
    return (
        <nav className='flex flex-col justify-center bg-prim text-left p-[2em] absolute nav -translate-x-full text-white text-xl gap-3'>
            <a href="#">Home</a>
            <a href="#como-obter">Como obter</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#faq">FAQ</a>
        </nav>
    )
}

export default Menu;
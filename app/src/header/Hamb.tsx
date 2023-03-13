function Hamb ({ open, setOpen } : { open: boolean, setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void; }) {
    const action = () => {
        //console.log('Clicked! State:', open);
        setOpen(!open);
    }
    return (
        <button className='flex flex-col justify-around cursor-pointer bg-transparent outline-none border-none z-10 gap-1' onClick={action} aria-label="Menu hamburguer">
            <div className='h-1 w-10 rounded-md relative transition-all origin-[1px] ham'/>
            <div className='h-1 w-10 rounded-md relative transition-all origin-[1px] ham'/>
            <div className='h-1 w-10 rounded-md relative transition-all origin-[1px] ham'/>
        </button>
    )
}

export default Hamb;



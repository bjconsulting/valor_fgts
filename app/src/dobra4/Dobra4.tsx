import Image from 'next/image';
import NextImgSrc from '../NextImgSrc';

function Dobra4() {
  return(
    <div className='max-w-[393px] mx-auto tablet:max-w-[834px] desktop:max-w-[1300px]'>
      <h2 className="text-[32px] text-center font-bold tablet:text-[34px] desktop:mt-[2em] desktop:text-5xl">Nossos <span className="text-[#D5B473]">números</span></h2>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-5 my-12 desktop:gap-x-[90px]">
        <div className="num w-[158px] aspect-[1.19] h-auto flex flex-col pt-5 items-center text-center desktop:w-[200px]">
          <Image width={40} height={55} className='mb-1 w-[30px] h-auto aspect-[0.73] desktop:w-[40px]' src={NextImgSrc('img/num1.svg')} alt="Fita de premiação"/>
          <h3 className='text-xl font-bold desktop:text-2xl'>+35 mil</h3>
          <div className='font-[nexa] text-base desktop:text-lg'>clientes atendidos</div>
        </div>
        <div className="num w-[158px] aspect-[1.19] h-auto flex flex-col pt-5 items-center text-center desktop:w-[200px]">
          <Image width={50} height={49} className='mb-2 w-[40px] h-auto aspect-[1.02] desktop:w-[50px]' src={NextImgSrc('img/num2.svg')} alt="Medalha"/>
          <h3 className='text-base font-bold desktop:text-lg'>Desde 2014</h3>
          <div className='font-[nexa] text-base desktop:text-lg'>no mercado</div>
        </div>
        <div className="num w-[158px] aspect-[1.19] h-auto flex flex-col pt-5 items-center text-center desktop:w-[200px]">
          <Image width={56} height={41} className='mb-3 w-[46px] h-auto aspect-[1.35] desktop:w-[56px]' src={NextImgSrc('img/num3.svg')} alt="Grupo"/>
          <h3 className='text-base font-bold desktop:text-lg'>+ de 50 milhões</h3>
          <div className='font-[nexa] text-base desktop:text-lg'>de crédito liberado</div>
        </div>
        <div className="num w-[158px] aspect-[1.19] h-auto flex flex-col pt-5 items-center text-center desktop:w-[200px]">
          <Image width={48} height={46} className='mb-2 w-[38px] h-auto aspect-[1.05] desktop:w-[48px]' src={NextImgSrc('img/num4.svg')} alt="Estrela"/>
          <h3 className='text-xl font-bold mb-1 desktop:text-2xl'>Nota 4.9</h3>
          <div className='font-[nexa] text-xs tablet:text-sm desktop:text-base'>De avaliação no google</div>
        </div>
      </div>
    </div>
  )
}

export default Dobra4;
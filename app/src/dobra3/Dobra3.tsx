import Image from 'next/image';
import NextImgSrc from '../NextImgSrc';

function Dobra3() {
  return(
    <div className='max-w-[393px] mx-auto tablet:max-w-[834px] desktop:max-w-[1300px]'>
      <div className='tablet:flex tablet:flex-row tablet:justify-center tablet:items-center tablet:gap-10 desktop:gap-[80px] desktop:justify-start desktop:items-start'>
        <div className="hidden advbg w-[156px] h-[141px] bg-[-110px_-110px] tablet:flex flex-col pt-7 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] desktop:aspect-[1.1] desktop:h-auto desktop:w-[400px] desktop:bg-cover desktop:mt-10 justify-center desktop:pt-0">
          <Image width={21} height={21} className='w-[21px] h-auto aspect-square mb-2 tablet:w-[33px] tablet:mb-5 desktop:w-[20%] desktop:mb-10' src={NextImgSrc('img/adv1.svg')} alt="Jóinha"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto desktop:text-2xl desktop:w-[90%]">Sem compromissos de parcelas mensais, desconto no saldo FGTS</p>
        </div>

        <div className='tablet:w-[467px] :w-[467px] tablet:pr-[64px] tablet:place-self-start desktop:w-[740px] flex flex-col gap-2 items-center'>
          <h3 className='text-[10px] text-left font-bold uppercase mt-8 tracking-[0.35em] tablet:text-[17px] tablet:leading-[20.4px] tablet:tracking-[0.35em] desktop:text-xl'>Vantagens</h3>
          <h2 className="text-[7vw] leading-[35px] text-center font-bold my-1 tablet:text-[25px] tablet:leading-[30px] desktop:text-5xl">Conheça as <span className="text-[#D5B473]">Vantagens</span> de utilizar o Saque Aniversário</h2>
          <p className="font-[nexa] font-bold text-sm text-left mt-5 mb-10 mx-5 leading-7 tablet:mb-16 tablet:font-bold tablet:text-[16px] tablet:leading-[21.2px] tablet:mx-auto desktop:text-2xl desktop:mb-32">Quem for optante pelo saque aniversário do FGTS pode antecipar 10 saques aniversário, recebe direto em sua conta corrente em até 24h úteis</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-y-5 gap-x-5 mb-10 tablet:gap-x-10 desktop:gap-x-[50px]'>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-7 items-center text-center tablet:hidden tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] desktop:aspect-[1.1] desktop:h-auto desktop:w-[290px] desktop:bg-cover">
          <Image width={21} height={21} className='w-[21px] h-auto aspect-square mb-2 tablet:w-[32px] tablet:mb-5 desktop:w-[20%] desktop:mb-10' src={NextImgSrc('img/adv1.svg')} alt="Jóinha"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto desktop:text-2xl desktop:w-[90%]">Sem compromissos de parcelas mensais, desconto no saldo FGTS</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-7 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] desktop:aspect-[1.1] desktop:h-auto desktop:w-[400px] desktop:bg-cover tablet:pt-0">
          <Image width={19} height={19} className='w-[19px] h-auto aspect-square tablet:w-[33px] tablet:mb-5 desktop:w-[20%] desktop:mb-10' src={NextImgSrc('img/adv2.svg')} alt="Lupa"/>
          <p className='font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto desktop:text-2xl desktop:w-[90%]'>Sem consulta<br/>SPC/Serasa</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-14 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] desktop:aspect-[1.1] desktop:h-auto desktop:w-[400px] desktop:bg-cover justify-center tablet:pt-0">
          <Image width={23} height={23} className='w-[23px] h-auto aspect-square mb-2 tablet:w-[35.84px] tablet:mb-5 desktop:w-[20%] desktop:mb-10' src={NextImgSrc('img/adv3.svg')} alt="Seta para baixo"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto desktop:text-2xl desktop:w-[90%]">Taxa min. 1,79%</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-14 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] desktop:aspect-[1.1] desktop:h-auto desktop:w-[400px] desktop:bg-cover justify-center tablet:pt-0">
          <Image width={29} height={29} className='w-[29px] h-auto aspect-square mb-2 tablet:w-[49px] tablet:mb-5 desktop:w-[20%] desktop:mb-10' src={NextImgSrc('img/adv4.svg')} alt="Cédula de dinheiro"/>
          <p className='font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto desktop:text-2xl desktop:w-[90%]'>Dinheiro em 24h<br/>após confirmação</p>
        </div>
      </div>
    </div>
  );
}

export default Dobra3;
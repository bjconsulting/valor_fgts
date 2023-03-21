import Image from 'next/image';
import NextImgSrc from "../NextImgSrc";
import WhatsAppCta from '../WhatsAppCta';

function Dobra2() {
  return (
    <div className='flex flex-row overflow-hidden tablet:max-w-[834px] tablet:mx-auto tablet:mt-10 desktop:max-w-[1440px] desktop:mt-20 desktop:justify-evenly'>
      <div className='hidden tablet:block w-[351px] pt-8 desktop:w-[633px] desktop:pt-0'>
        <Image width={634} height={410} className='w-[287px] desktop:w-[633px] desktop:ml-0' src={NextImgSrc('img/img1.jpg')} alt="Família feliz"/>
      </div>
      <div className='flex flex-col gap-4 w-full tablet:w-[545px] tablet:block desktop:w-[600px]'>
        <h2 className="text-[32px] leading-[35px] w-[80%] mx-auto text-center font-bold my-1 tablet:w-full tablet:mx-[unset] tablet:text-3xl desktop:text-[44px] desktop:leading-[66px]">O que é o <span className="text-[#A59145]">Empréstimo FGTS?</span></h2>
        <div className=' flex flex-col gap-4 mx-auto max-w-[393px] tablet:max-w-[456px] desktop:max-w-[574px]'>
          <div className="px-3 mt-5 text-sm font-bold flex items-start gap-6 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <Image width={30} height={30} className='my-auto w-[30px] h-[30px] tablet:w-[25px] tablet:h-[22.5px] desktop:w-[50.83px] desktop:h-[45.75px]' src={NextImgSrc('img/what1.svg')} alt="Carteira"/>
            <p className='text-[18px] font-[nexa] tablet:text-[18px] tablet:leading-[16.96px] tablet:font-bold'>Uma forma rápida e fácil de conseguir empréstimo, feita para quem tem saldo no FGTS,<br className='tablet:hidden'/>em contas ativas ou inativas, e optou pelo saque-aniversário.</p>
          </div>
          <div className="px-3 mt-5 text-sm font-bold flex items-start gap-6 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <Image width={32} height={16} className='my-auto w-[32px] h-[25px] tablet:w-[31.55px] tablet:h-[16.5px] desktop:w-[64.16px] desktop:h-[34.5px]' src={NextImgSrc('img/what2.svg')} alt="Cédula de dinheiro"/>
            <p className='font-[nexa] text-[18px] stablet:text-[18px] tablet:leading-[16.96px] tablet:font-bold'>Você pode antecipar até 10 parcelas do seu saque-aniversário, ou seja,<br className='tablet:hidden'/>recebe hoje o que só iria receber em 10 anos, e pode usar o dinheiro como quiser!</p>
          </div>
          <div className="px-3 mt-5 text-sm font-bold flex items-start gap-6 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <Image width={40} height={30} className='my-auto w-[40px] h-[30px] tablet:w-[22px] tablet:h-[26px] desktop:w-[45px] desktop:h-[53px]' src={NextImgSrc('img/what3.svg')} alt="Calendário"/>
            <p className='font-[nexa] text-[18px] tablet:text-[18px] tablet:leading-[16.96px] tablet:font-bold'>E o melhor: sem precisar se preocupar em pagar parcelas mensais,<br className='tablet:hidden'/>já que o pagamento é feito por descontos anuais direto do seu saldo do FGTS.</p>
          </div>
        </div>
        <WhatsAppCta buttonClassName="bg-[#106b62] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-8 tablet:ml-16 desktop:ml-24 desktop:w-48 desktop:py-2 desktop:text-[28px] desktop:my-12" textClassName="text-xl" />
      </div>
    </div>
  )
}

export default Dobra2;
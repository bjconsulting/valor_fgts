import what1 from './what1.svg';
import what2 from './what2.svg';
import what3 from './what3.svg';
import wp from "../wp.png";
import img1 from './img1.jpg';

function Dobra2() {
  return (
    <div className='flex flex-row overflow-hidden tablet:max-w-[834px] tablet:mx-auto tablet:mt-10 desktop:max-w-[1440px] desktop:mt-20 desktop:justify-evenly'>
      <div className='hidden tablet:block w-[351px] pt-8 desktop:w-[633px] desktop:pt-0'>
        <img className='w-[287px] desktop:w-[633px] desktop:ml-0' src={img1} alt="Família feliz"/>
      </div>
      <div className='w-full tablet:w-[545px] tablet:block desktop:w-[600px]'>
        <h2 className="text-[7vw] text-center font-bold my-1 tablet:text-3xl desktop:text-[44px] desktop:leading-[66px]">O que é o <span className="text-[#D5B473]">Empréstimo FGTS?</span></h2>
        <div className='mx-auto max-w-[393px] tablet:max-w-[456px] desktop:max-w-[574px]'>
          <div className="pl-11 mt-5 text-sm font-bold flex items-start gap-3 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <img className='w-[20px] h-[20px] tablet:w-[25px] tablet:h-[22.5px] desktop:w-[50.83px] desktop:h-[45.75px]' src={what1} alt="Carteira"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>Uma forma rápida e fácil de conseguir empréstimo, feita para quem tem saldo no FGTS,<br className='tablet:hidden'/>em contas ativas ou inativas, e optou pelo saque-aniversário.</p>
          </div>
          <div className="pl-11 mt-5 text-sm font-bold flex items-start gap-3 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <img className='w-[22px] h-[14px] tablet:w-[31.55px] tablet:h-[16.5px] desktop:w-[64.16px] desktop:h-[34.5px]' src={what2} alt="Cédula de dinheiro"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>Você pode antecipar até 10 parcelas do seu saque-aniversário, ou seja,<br className='tablet:hidden'/>recebe hoje o que só iria receber em 10 anos, e pode usar o dinheiro como quiser!</p>
          </div>
          <div className="pl-11 mt-5 text-sm font-bold flex items-start gap-3 tablet:font-normal tablet:items-center tablet:pl-4 desktop:mt-14">
            <img className='w-[17px] h-[22px] tablet:w-[22px] tablet:h-[26px] desktop:w-[45px] desktop:h-[53px]' src={what3} alt="Calendário"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>E o melhor: sem precisar se preocupar em pagar parcelas mensais,<br className='tablet:hidden'/>já que o pagamento é feito por descontos anuais direto do seu saldo do FGTS.</p>
          </div>
        </div>
        <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-8 tablet:ml-16 desktop:ml-24 desktop:w-48 desktop:py-2 desktop:text-[28px] desktop:my-12"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
      </div>
    </div>
  )
}

export default Dobra2;
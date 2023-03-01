import what1 from './what1.svg';
import what2 from './what2.svg';
import what3 from './what3.svg';
import wp from "../wp.png";
import img1 from './img1.jpg';

function Dobra2() {
  return (
    <div className='flex flex-row overflow-hidden tablet:max-w-[834px] tablet:mx-auto tablet:flex-grow tablet:mt-10'>
      <div className='hidden tablet:block w-[351px] pt-8 tablet:flex-0'>
        <img className='ml-16 w-[287px]' src={img1} alt="Família feliz"/>
      </div>
      <div className='tablet:w-[545px] tablet:flex-1 tablet:block'>
        <h2 className="text-lg text-center font-bold my-1 tablet:text-3xl">O que é o <span className="text-[#D5B473]">Empréstimo FGTS?</span></h2>
        <div className='mx-auto max-w-[393px] tablet:max-w-[456px]'>
          <div className="pl-11 mt-5 text-xs flex items-start gap-3 tablet:items-center tablet:pl-4">
            <img className='w-[20px] h-[20px] tablet:w-[25px] tablet:h-[22.5px]' src={what1} alt="Carteira"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>Uma forma rápida e fácil de conseguir empréstimo, feita para quem tem saldo no FGTS,<br className='tablet:hidden'/>em contas ativas ou inativas, e optou pelo saque-aniversário.</p>
          </div>
          <div className="pl-11 mt-5 text-xs flex items-start gap-3 tablet:items-center tablet:pl-4">
            <img className='w-[22px] h-[14px] tablet:w-[31.55px] tablet:h-[16.5px]' src={what2} alt="Cédula de dinheiro"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>Você pode antecipar até 10 parcelas do seu saque-aniversário, ou seja,<br className='tablet:hidden'/>recebe hoje o que só iria receber em 10 anos, e pode usar o dinheiro como quiser!</p>
          </div>
          <div className="pl-11 mt-5 text-xs flex items-start gap-3 tablet:items-center tablet:pl-4">
            <img className='w-[17px] h-[22px] tablet:w-[22px] tablet:h-[26px]' src={what3} alt="Calendário"/>
            <p className='font-[nexa] tablet:text-[16px] tablet:leading-[16.96px] tablet:font-bold'>E o melhor: sem precisar se preocupar em pagar parcelas mensais,<br className='tablet:hidden'/>já que o pagamento é feito por descontos anuais direto do seu saldo do FGTS.</p>
          </div>
        </div>
        <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-8"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
      </div>
    </div>
  )
}

export default Dobra2;
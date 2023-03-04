import adv1 from './adv1.svg';
import adv2 from './adv2.svg';
import adv3 from './adv3.svg';
import adv4 from './adv4.svg';

function Dobra3() {
  return(
    <div className='max-w-[393px] mx-auto tablet:max-w-[834px]'>
      <div className='tablet:flex tablet:flex-row tablet:justify-center tablet:items-center tablet:gap-10'>
        <div className="hidden advbg w-[156px] h-[141px] bg-[-110px_-110px] tablet:flex flex-col pt-7 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px]">
          <img className='w-[21px] h-[21px] mb-2 tablet:w-[33px] tablet:h-[31px] tablet:mb-5' src={adv1} alt="Jóinha"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto">Sem compromissos de parcelas mensais, desconto no saldo FGTS</p>
        </div>

        <div className='tablet:w-[467px] tablet:pr-[64px] tablet:place-self-start'>
          <h3 className='text-[10px] text-center font-bold uppercase mt-8 tracking-[0.35em] tablet:text-[17px] tablet:leading-[20.4px] tablet:tracking-[0.35em]'>Vantagens</h3>
          <h2 className="text-[7vw] text-center font-bold my-1 tablet:text-[25px] tablet:leading-[30px]">Conheça as <span className="text-[#D5B473]">Vantagens</span> de utilizar o Saque Aniversário</h2>
          <p className="font-[nexa] text-sm text-center mt-5 mb-10 mx-5 leading-7 tablet:font-bold tablet:text-[16px] tablet:leading-[21.2px] tablet:mx-auto">Quem for optante pelo saque aniversário do FGTS pode antecipar 10 saques aniversário, recebe direto em sua conta corrente em até 24h úteis</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-y-5 gap-x-5 mb-10'>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-7 items-center text-center tablet:hidden tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px]">
          <img className='w-[21px] h-[21px] mb-2 tablet:w-[32px] tablet:h-[30px] tablet:mb-5' src={adv1} alt="Jóinha"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto">Sem compromissos de parcelas mensais, desconto no saldo FGTS</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-7 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px] tablet:pt-14">
          <img className='w-[19px] h-[19px] mb-2 tablet:w-[33px] tablet:h-[31px] tablet:mb-5' src={adv2} alt="Lupa"/>
          <p className='font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto'>Sem consulta<br/>SPC/Serasa</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-14 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px]">
          <img className='w-[23px] h-[24px] mb-2 tablet:w-[35.84px] tablet:h-[33.91px] tablet:mb-5' src={adv3} alt="Seta para baixo"/>
          <p className="font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto">Taxa min. 1,79%</p>
        </div>
        <div className="advbg w-[156px] h-[141px] bg-[-110px_-110px] flex flex-col pt-14 items-center text-center tablet:w-[213.49px] tablet:h-[191.8px] tablet:bg-[length:245px]">
          <img className='w-[29px] h-[19px] mb-2 tablet:w-[49px] tablet:h-[31px] tablet:mb-5' src={adv4} alt="Cédula de dinheiro"/>
          <p className='font-[nexa] text-sm font-bold tablet:text-base tablet:w-[169px] tablet:mx-auto'>Dinheiro em 24h<br/>após confirmação</p>
        </div>
      </div>
    </div>
  );
}

export default Dobra3;
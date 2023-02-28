import adv1 from './adv1.svg';
import adv2 from './adv2.svg';
import adv3 from './adv3.svg';
import adv4 from './adv4.svg';

function Dobra3() {
  return(
    <div className='w-[393px] mx-auto'>
      <h3 className='text-[10px] text-center font-bold uppercase mt-8 tracking-[0.35em]'>Vantagens</h3>
      <h2 className="text-[26px] text-center font-bold my-1">Conheça as <span className="text-[#D5B473]">Vantagens</span> de utilizar o Saque Aniversário</h2>
      <p className="text-sm text-center mt-5 mb-10 mx-5 leading-7">Quem for optante pelo saque aniversário do FGTS pode antecipar 10 saques aniversário, recebe direto em sua conta corrente em até 24h úteis</p>

      <div className='flex flex-wrap justify-center gap-y-5 gap-x-10 mb-10'>
        <div className="advbg w-[156px] h-[141px] flex flex-col pt-7 items-center text-center">
          <img className='w-5 h-5 mb-2' src={adv1} alt="Jóinha"/>
          <p className="text-sm font-bold">Sem compromissos de parcelas mensais, desconto no saldo FGTS</p>
        </div>
        <div className="advbg w-[156px] h-[141px] flex flex-col pt-7 items-center text-center">
          <img className='w-5 h-5 mb-2' src={adv2} alt="Lupa"/>
          <p className='text-sm font-bold'>Sem consulta<br/>SPC/Serasa</p>
        </div>
        <div className="advbg w-[156px] h-[141px] flex flex-col pt-14 items-center text-center">
          <img className='w-5 h-5 mb-2' src={adv3} alt="Seta para baixo"/>
          <p className="text-sm font-bold">Taxa min. 1,79%</p>
        </div>
        <div className="advbg w-[156px] h-[141px] flex flex-col pt-14 items-center text-center">
          <img className='w-5 h-5 mb-2' src={adv4} alt="Cédula de dinheiro"/>
          <p className='text-sm font-bold'>Dinheiro em 24h<br/>após confirmação</p>
        </div>
      </div>
    </div>
  );
}

export default Dobra3;
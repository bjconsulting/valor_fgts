import n1 from './num1.svg';
import n2 from './num2.svg';
import n3 from './num3.svg';
import n4 from './num4.svg';

function Dobra4() {
  return(
    <div className='max-w-[393px] mx-auto'>
      <h2 className="text-[33px] text-center font-bold">Nossos <span className="text-[#D5B473]">números</span></h2>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-7 my-12">
        <div className="num w-[158px] h-[132px] flex flex-col pt-5 items-center text-center">
          <img className='mb-1 w-[30px] h-[41px]' src={n1} alt="Fita de premiação"/>
          <h4 className='text-xl font-bold'>+35 mil</h4>
          <div className='text-base'>clientes atendidos</div>
        </div>
        <div className="num w-[158px] h-[132px] flex flex-col pt-5 items-center text-center">
          <img className='mb-2 w-[40px] h-[39px]' src={n2} alt="Medalha"/>
          <h4 className='text-base font-bold'>Desde 2014</h4>
          <div className='text-base'>no mercado</div>
        </div>
        <div className="num w-[158px] h-[132px] flex flex-col pt-5 items-center text-center">
          <img className='mb-3 w-[46px] h-[34px]' src={n3} alt="Grupo"/>
          <h4 className='text-base font-bold'>+ de 50 milhões</h4>
          <div className='text-base'>de crédito liberado</div>
        </div>
        <div className="num w-[158px] h-[132px] flex flex-col pt-5 items-center text-center">
          <img className='mb-2 w-[38px] h-[36px]' src={n4} alt="Estrela"/>
          <h4 className='text-xl font-bold mb-1'>Nota 4.9</h4>
          <div className='text-xs'>De avaliação no google</div>
        </div>
      </div>
    </div>
  )
}

export default Dobra4;
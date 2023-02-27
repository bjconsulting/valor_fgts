import check from './check.svg';
import wp from "../wp.png";
import modelo1 from './modelo1.png'

function Dobra5() {
  return(
    <>
      <div className="bg-[#313F55] text-white text-center pt-4">
        <h2 className="text-xl font-bold mb-8"><span className="text-[#D5B473]">Como obter</span> meu empréstimo</h2>
        <div className='w-64 mx-auto text-left flex flex-col gap-y-2'>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>Ser maior de 18 anos ou emancipado;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>CPF em situação regular na receita;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>Ter conta-corrente ou poupança</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>Optar pelo saque de aniversário</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>Autorizar o banco a acessar seus dados e valores do FGTS;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1' src={check} alt="" />
            <span>Aprovar a simulação</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 text-[#D5B473]">Você atende todos os requisitos?</h2>

        <button className="bg-[#158B7D] text-white rounded-[14px] px-4 py-2 flex justify-evenly w-[125px] items-center mx-auto my-4"><p className="text-xs">Fale conosco</p><img className="w-[14px] h-[14px]" src={wp} alt="Logo do WhatsApp"/></button>

        <img className='w-72 mx-auto' src={modelo1} alt="Pessoa sorrindo olhando para o celular"/>
      </div>
    </>
  )
}

export default Dobra5;
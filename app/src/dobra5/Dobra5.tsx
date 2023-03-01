import check from './check.svg';
import wp from "../wp.png";
import modelo1 from './modelo1.png'

function Dobra5() {
  return(
    <>
      <div className="bg-[#313F55] text-white text-center pt-4 tablet:pt-16 tablet:mt-20">
        <h2 className="text-xl font-bold mb-8 tablet:text-[52px]"><span className="text-[#D5B473]">Como obter</span> meu empréstimo</h2>
        <div className='w-64 mx-auto text-left flex flex-col gap-y-2 tablet:w-[620px] tablet:gap-5 tablet:mt-16'>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>Ser maior de 18 anos ou emancipado;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>CPF em situação regular na receita;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>Ter conta-corrente ou poupança</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>Optar pelo saque de aniversário</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>Autorizar o banco a acessar seus dados e valores do FGTS;</span>
          </div>
          <div className='text-xs flex flex-row gap-x-2 items-start'>
            <img className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={check} alt="" />
            <span className='tablet:text-[20px]'>Aprovar a simulação</span>
          </div>
        </div>

        <div className='tablet:relative tablet:h-[476px] tablet:mt-[50px]'>
          <h2 className="text-xl font-bold mt-8 text-[#D5B473] tablet:text-[32px] tablet:absolute tablet:top-[81px] tablet:right-[5px]">Você atende todos os requisitos?</h2>

          <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-5 tablet:absolute tablet:top-[250px] tablet:right-[160px] tablet:w-[198px] tablet:h-[64px]"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>

          <img className='w-72 mx-auto tablet:absolute tablet:top-0 tablet:w-[498px] tablet:h-auto tablet:left-[-50px]' src={modelo1} alt="Pessoa sorrindo olhando para o celular"/>
        </div>
      </div>
    </>
  )
}

export default Dobra5;
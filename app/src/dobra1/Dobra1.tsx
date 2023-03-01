import wp from "../wp.png";
import photo_banner from "./photo_banner.png"

function Dobra1() {
  return (
    <div className="tablet:flex tablet:flex-row tablet:max-w-[834px] tablet:mx-auto tablet:items-start desktop:max-w-[1440px]">
      <div className="tablet:w-[770px]">
        <h3 className='text-[10px] text-center font-bold uppercase tablet:text-lg tablet:font-normal tablet:mt-6 desktop:text-[19px]'>Antecipação do saque aniversário do FGTS</h3>
        <h2 className="text-lg text-center font-bold my-1 tablet:text-[40px] tablet:leading-[48px] desktop:text-[70px] desktop:leading-[84px]">Antecipe até <span className="text-[#D5B473]">10 Anos</span> do seu FGTS</h2>
        <div className="font-[nexa] text-xs text-center w-[297px] mx-auto my-2 tablet:text-left tablet:text-base tablet:font-bold tablet:w-[402px] tablet:mt-5 desktop:text-[22px] desktop:leading-[31.24px] desktop:w-[580px]">Adiante até 10 parcelas do seu Saque Aniversário. Clique em fale conosco, nos chame no Whatsapp, e receba seu adiantamento hoje mesmo.</div>
        <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-5 tablet:ml-16 desktop:ml-24 desktop:w-64 desktop:py-5"><p className="text-xl desktop:text-[32px]">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
      </div>
      <img className="mx-auto w-60 my-10 tablet:w-[294px] tablet:my-0 desktop:w-[542px]" src={photo_banner} alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'"/>
    </div>
  );
}

export default Dobra1;
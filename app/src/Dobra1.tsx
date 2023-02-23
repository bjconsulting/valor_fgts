import wp from "./wp.png";
import photo_banner from "./photo_banner.png"

function Dobra1() {
  return (
    <>
      <h3 className='text-xs text-center font-bold uppercase'>Antecipação do saque aniversário do FGTS</h3>
      <h2 className="text-lg text-center font-bold my-1">Antecipe até <span className="text-[#D5B473]">10 Anos</span> do seu FGTS</h2>
      <div className="text-xs text-center w-[297px] mx-auto my-2">Adiante até 10 parcelas do seu Saque Aniversário. Clique em fale conosco, nos chame no Whatsapp, e receba seu adiantamento hoje mesmo.</div>
      <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-5"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
      <img className="mx-auto w-60 my-10" src={photo_banner} alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'"/>
    </>
  );
}

export default Dobra1;
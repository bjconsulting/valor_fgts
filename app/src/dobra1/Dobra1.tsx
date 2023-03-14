import WhatsAppCtaUrl from "../WhatsAppCtaUrl";
import { RiWhatsappLine } from 'react-icons/ri'

function Dobra1() {
  return (
    <div className=" flex flex-col gap-8 tablet:flex tablet:flex-row tablet:max-w-[834px] tablet:mx-auto tablet:items-start desktop:max-w-[1440px]">
      <div className="tablet:w-[770px] flex flex-col gap-8">
        <h3 className='text-[10px] text-center font-bold uppercase tablet:text-lg tablet:font-normal tablet:mt-6 desktop:text-[19px]'>Antecipação do saque aniversário do FGTS</h3>
        <h2 className="text-[32px] leading-[30px] text-center font-bold my-1 tablet:text-[40px] tablet:leading-[48px] desktop:text-[70px] desktop:leading-[84px]">Antecipe até <span className="text-[#D5B473]">10 Anos</span> do seu FGTS</h2>
        <div className="font-[nexa] font-bold text-sm text-center w-[297px] mx-auto my-2 tablet:text-left tablet:text-base tablet:font-bold tablet:w-[402px] tablet:mt-5 desktop:text-[22px] desktop:leading-[31.24px] desktop:w-[580px]">Adiante até 10 parcelas do seu Saque Aniversário. Clique em fale conosco, nos chame no Whatsapp, e receba seu adiantamento hoje mesmo.</div>
        <a href={WhatsAppCtaUrl()} target="_blank" rel="noreferrer" className="bg-[#106b62] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-5 tablet:ml-16 desktop:ml-24 desktop:w-64 desktop:py-5"><p className="text-xl desktop:text-[32px]">Fale conosco</p><RiWhatsappLine className="w-5 h-5" /></a>
      </div>
      {/* <Image className="mx-auto w-full my-10 tablet:w-[294px] tablet:my-0 desktop:w-[542px]" width={542} height={566} src={NextImgSrc('img/photo_banner.png')} alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'" loading='eager'/>
      <img className="mx-auto w-full my-10 tablet:w-[294px] tablet:my-0 desktop:w-[542px]" src={NextImgSrc('img/photo_banner.png')} alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'" loading='eager'/> */}
      <picture>
        <source srcSet="img/photo_banner.avif" type='image/avif'/>
        <source srcSet="img/photo_banner.webp" type='image/webp'/>
        <img className="mx-auto w-full my-10 tablet:w-[294px] tablet:my-0 desktop:w-[542px]" width={542} height={566} src="img/photo_banner.png" alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'" loading='eager'/>
      </picture>
    </div>
  );
}

export default Dobra1;
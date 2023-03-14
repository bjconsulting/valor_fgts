import Image from 'next/image';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { RiWhatsappLine } from 'react-icons/ri'
import { CgWebsite } from 'react-icons/cg'
import NextImgSrc from '../NextImgSrc';

function Footer() {
  return(
    <div className="w-full bg-[#3C4450] pt-10 text-white text-center pb-10 tablet:pt-20 tablet:flex tablet:flex-row tablet:flex-grow tablet:justify-evenly tablet:text-left">
      <div className='tablet:flex tablet:flex-col'>
        <Image width={401} height={99} className='w-[201px] mx-auto tablet:w-[158.25px] tablet:mx-0' src={NextImgSrc('img/bottom-logo.png')} alt="Logo" />
        <div className='w-[243px] mx-auto my-10 text-xs tablet:w-auto'>VALOR SERVIÇOS FINANCEIROS LTDA<br/>CNPJ: 42.095.396/0001-48<br/>TELEFONE: (18) 3600-7910</div>
        <a className='text-[10px] hover:underline transition-all hover:text-sub w-max'>Política de Privacidade</a>
      </div>
      <div className='tablet:flex tablet:flex-col'>
        <h2 className='text-xl mb-6'>Links Rápidos</h2>
        <ul className='flex flex-col items-center text-xs font-normal gap-4 mb-10 tablet:text-sm'>
          <li><a className='flex flex-row items-center gap-1' href='https://wa.me/5518991332855' target='_blank'><RiWhatsappLine className="w-[2em] h-[2em] desktop:w-[1em] desktop:h-[3em]" /> WhatsApp</a></li>
          <li><a className='flex flex-row items-center gap-1' href='https://valorservicos.com.br/' target='_blank'><CgWebsite className="w-[2em] h-[2em] desktop:w-[1em] desktop:h-[3em]"/> Site Valor</a></li>
          <li><a className='flex flex-row items-center gap-1' href='https://www.facebook.com/valorsfinanceiros' target='_blank'><AiFillFacebook className="w-[2em] h-[2em] desktop:w-[1em] desktop:h-[3em]" /> Facebook</a></li>
          <li><a className='flex flex-row items-center gap-1' href='https://www.instagram.com/VALORSFINANCEIROS/' target='_blank'><AiOutlineInstagram className="w-[2em] h-[2em] desktop:w-[1em] desktop:h-[3em]"/> Instagram</a></li>
        </ul>
      </div>
      <div className='text-xs w-[326px] mx-auto tablet:mx-0 tablet:leading-[19.18px]'>
        A Valor – Serviços Finaceiros é um Correspondente Bancário que atua de acordo com as diretrizes estabelicadas na Resolução 3.954/2011.
        Não somos uma instituição financeira e não realizamos operações de crédito diretamente. Atuamos em parceria independente e nos responsabilizamos inteiramente por toda a prestação de serviços aqui oferecidas, intermediando crédito. Não cobramos taxas de nenhuma liberação de crédito. Nosso serviço é TOTALMENTE GRATUITO.
      </div>
    </div>
  )
}

export default Footer;
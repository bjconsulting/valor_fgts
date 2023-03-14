import Image from 'next/image';
import { RiWhatsappLine } from 'react-icons/ri';
import NextImgSrc from '../NextImgSrc';
import WhatsAppCtaUrl from '../WhatsAppCtaUrl';

function Dobra5() {
  return (
    <div id="como-obter" className='bg-[#313F55] text-white text-center'>
      <div className="mx-auto flex flex-col gap-y-10 py-10 tablet:grid tablet:grid-cols-2 tablet:grid-rows-1 desktop:max-w-[1440px]">
        <div className='overflow-hidden'>
          {/* <Image width={652} height={621} className='w-full mx-auto tablet:ml-[-12%] tablet:self-center tablet:max-w-none tablet:w-[134%] tablet:h-auto desktop:w-[498px] desktop:ml-auto' src={NextImgSrc('img/modelo1.png')} alt="Pessoa sorrindo olhando para o celular" /> */}
          <picture>
            <source srcSet="img/modelo1.avif" type='image/avif'/>
            <source srcSet="img/modelo1.webp" type='image/webp'/>
            <img className="w-full mx-auto tablet:ml-[-12%] tablet:self-center tablet:max-w-none tablet:w-[134%] tablet:h-auto desktop:w-[498px] desktop:ml-auto" width={652} height={621} src="img/modelo1.png" alt="Pessoa feliz ao telefone com a mensagem 'simples, rápido e seguro'" loading='lazy'/>
          </picture>
        </div>
        <div className='tablet:pt-10'>
          <h2 className="text-[32px] font-bold mb-8 tablet:mb-0 tablet:text-[28px] desktop:text-[52px]"><span className="text-[#D5B473]">Como obter</span> meu empréstimo</h2>
          <div className='w-80 mx-auto text-left flex flex-col gap-y-4 tablet:w-full tablet:gap-5 tablet:mt-5'>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>Ser maior de 18 anos ou emancipado;</span>
            </div>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>CPF em situação regular na receita;</span>
            </div>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>Ter conta-corrente ou poupança</span>
            </div>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>Optar pelo saque de aniversário</span>
            </div>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>Autorizar o banco a acessar seus dados e valores do FGTS;</span>
            </div>
            <div className='text-sm flex flex-row gap-x-2 items-start'>
              <Image width={12} height={8} className='mt-1 w-[12px] h-[8px] tablet:w-[24.5px] tablet:h-[15.41px]' src={NextImgSrc('img/check.svg')} alt="" />
              <span className='font-bold text-[16px] tablet:font-normal tablet:text-sm desktop:text-[20px]'>Aprovar a simulação</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-8 text-[#D5B473] tablet:text-2xl desktop:text-[32px]">Você atende todos os requisitos?</h2>

            <a href={WhatsAppCtaUrl()} target="_blank" rel="noreferrer" className="bg-[#106b62] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-5 tablet:w-[198px] tablet:h-[64px]"><p className="text-xl">Fale conosco</p><RiWhatsappLine className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dobra5;
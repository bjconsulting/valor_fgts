import logo from './bottom-logo.png';

function Footer() {
  return(
    <div className="w-full bg-[#3C4450] pt-10 text-white text-center pb-10 tablet:pt-20 tablet:flex tablet:flex-row tablet:flex-grow tablet:justify-evenly tablet:text-left">
      <div className='tablet:flex tablet:flex-col'>
        <img className='w-[201px] mx-auto tablet:w-[158.25px] tablet:mx-0' src={logo} alt="Logo" />
        <div className='w-[243px] mx-auto my-10 text-xs tablet:w-auto'>VALOR SERVIÇOS FINANCEIROS LTDA<br/>CNPJ: 42.095.396/0001-48<br/>TELEFONE: (18) 3600-7910</div>
      </div>
      <div className='tablet:flex tablet:flex-col'>
        <h2 className='text-xl mb-6'>Links Rápidos</h2>
        <ul className='flex flex-col text-xs font-normal gap-4 mb-10 tablet:text-sm'>
          <li>Simular Saque</li>
          <li>Ligação Gratuita</li>
          <li>Whatsapp</li>
          <li>Como Funciona?</li>
          <li>Site Valor</li>
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
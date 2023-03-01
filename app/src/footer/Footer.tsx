import logo from './bottom-logo.png';

function Footer() {
  return(
    <div className="w-full bg-[#3C4450] pt-10 text-white text-center font-bold pb-10">
      <img className='w-[201px] mx-auto' src={logo} alt="Logo" />
      <div className='w-[243px] mx-auto my-10 text-xs'>VALOR SERVIÇOS FINANCEIROS LTDA<br/>CNPJ: 42.095.396/0001-48<br/>TELEFONE: (18) 3600-7910</div>
      <h2 className='text-xl mb-6'>Links Rápidos</h2>
      <ul className='flex flex-col text-xs font-normal gap-4 mb-10'>
        <li>Simular Saque</li>
        <li>Ligação Gratuita</li>
        <li>Whatsapp</li>
        <li>Como Funciona?</li>
        <li>Site Valor</li>
      </ul>
      <div className='text-xs w-[326px] mx-auto'>
        A Valor – Serviços Finaceiros é um Correspondente Bancário que atua de acordo com as diretrizes estabelicadas na Resolução 3.954/2011.
        Não somos uma instituição financeira e não realizamos operações de crédito diretamente. Atuamos em parceria independente e nos responsabilizamos inteiramente por toda a prestação de serviços aqui oferecidas, intermediando crédito. Não cobramos taxas de nenhuma liberação de crédito. Nosso serviço é TOTALMENTE GRATUITO.
      </div>
    </div>
  )
}

export default Footer;
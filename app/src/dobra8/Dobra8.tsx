import './Dobra8.css';
import wp from "../wp.png";

function Dobra8() {
  return(
    <div className="my-5">
      <h2 className="text-[23px] text-center font-bold">Perguntas <span className="text-[#D5B473]">Frequentes</span></h2>
      <ul className="w-[300px] mx-auto mt-7">
        <li className="text-[15px] list-disc my-2">
          <div className="wrap-collabsible">
            <input id="collapsible1" className="toggle" type="checkbox"/>
            <label htmlFor="collapsible1" className="lbl-toggle">O que é o Saque aniversário do FGTS?</label>
            <div className="collapsible-content">
              <div className="content-inner font-light">O saque aniversário é uma das modalidades do Fundo de Garantia do Tempo de Serviço (FGTS) no qual os trabalhadores que optam por ela podem contratar empréstimos utilizando como garantia o saldo que tem disponível em seu FGTS (Saldo ativo ou inativo). Para a contratação do crédito não precisa ter sido desligado de seu emprego, você consegue fazer a contratação mesmo estando ativo na empresa de maneira fácil, rápida e segura!</div>
            </div>
          </div>
        </li>
        <li className="text-[15px] list-disc my-2">
          <div className="wrap-collabsible">
            <input id="collapsible2" className="toggle" type="checkbox"/>
            <label htmlFor="collapsible2" className="lbl-toggle">Quais são as vantagens da contratação do crédito</label>
            <div className="collapsible-content">
              <div className="content-inner font-light">O empréstimo com garantia no FGTS permite a antecipação do saldo do FGTS, sem precisar esperar o mês do seu aniversário pra resgatar. Você consegue antecipar seus próximos saque-aniversários e recebe todo o dinheiro em até no máximo 24h. Além disso, não possui restrição de crédito, não tem prestação mensal e a contratação é 100% digital.</div>
            </div>
          </div>
        </li>
        <li className="text-[15px] list-disc my-2">
          <div className="wrap-collabsible">
            <input id="collapsible3" className="toggle" type="checkbox"/>
            <label htmlFor="collapsible3" className="lbl-toggle">Posso alterar a modalidade de saque aniversário para saque rescisão depois da contratação do produto?</label>
            <div className="collapsible-content">
              <div className="content-inner font-light">Caso tenha sido contratado Empréstimo com garantia do Saque Aniversário do FGTS, a alteração da modalidade só pode ocorrer após a liquidação de todas as parcelas. Quem migrar para o saque aniversário e decidir voltar para a sistemática do saque-rescisão poderá solicitar a alteração a qualquer momento, Mas a alteração somente surtirá efeito no 1º dia do 25º mês da solicitação e desde que o Empréstimo com Garantia de Saque Aniversário FGTS esteja quitado.</div>
            </div>
          </div>
        </li>
        <li className="text-[15px] list-disc my-2">
          <div className="wrap-collabsible">
            <input id="collapsible4" className="toggle" type="checkbox"/>
            <label htmlFor="collapsible4" className="lbl-toggle">Fui demitido da empresa e sou optante ao saque aniversário, tenho direito a sacar algum valor?</label>
            <div className="collapsible-content">
              <div className="content-inner font-light">Sim, mesmo você sendo optante pelo saque aniversário em casos de demissão SEM Justa causa você consegue sacar normalmente a multa de 40% do FGTS</div>
            </div>
          </div>
        </li>
      </ul>

      <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-8"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
    </div>
  )
}

export default Dobra8;
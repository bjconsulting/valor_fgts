import what1 from './what1.svg';
import what2 from './what2.svg';
import what3 from './what3.svg';
import wp from "../wp.png";

function Dobra2() {
  return (
    <>
      <h2 className="text-lg text-center font-bold my-1">O que é o <span className="text-[#D5B473]">Empréstimo FGTS?</span></h2>
      <div className="ml-11 mt-5 text-xs flex items-start gap-3">
        <img src={what1} alt="Carteira"/>
        <p>Uma forma rápida e fácil de conseguir empréstimo, feita para quem tem saldo no FGTS,<br/>em contas ativas ou inativas, e optou pelo saque-aniversário.</p>
      </div>
      <div className="ml-11 mt-5 text-xs flex items-start gap-3">
        <img src={what2} alt="Cédula de dinheiro"/>
        <p>Você pode antecipar até 10 parcelas do seu saque-aniversário, ou seja,<br/>recebe hoje o que só iria receber em 10 anos, e pode usar o dinheiro como quiser!</p>
      </div>
      <div className="ml-11 mt-5 text-xs flex items-start gap-3">
        <img src={what3} alt="Calendário"/>
        <p>E o melhor: sem precisar se preocupar em pagar parcelas mensais,<br/>já que o pagamento é feito por descontos anuais direto do seu saldo do FGTS.</p>
      </div>
      <button className="bg-[#158B7D] text-white rounded-xl px-4 py-2 flex justify-evenly w-44 items-center mx-auto mt-8"><p className="text-xl">Fale conosco</p><img className="w-5 h-5" src={wp} alt="Logo do WhatsApp"/></button>
    </>
  )
}

export default Dobra2;
import Image from 'next/image';
import { useRef } from 'react';
import data from './depoimentos.json';
import { TbStarFilled } from 'react-icons/tb';

function Dobra6() {

  //console.log('Data loaded! and component rendered!', data);
  const wrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  /*
  const prev = () => {
    if (!wrapper.current || !container.current) return;

    const currentIndex = Math.ceil(container.current.scrollLeft / wrapper.current.clientWidth);
    const prevIndex = currentIndex === 0
                      ? container.current.childElementCount - 1
                      : currentIndex -1;
    //container.current.children[prevIndex].scrollIntoView();
    container.current.scrollLeft = (wrapper.current.clientWidth * prevIndex);
  }

  const next = () => {
    if (!wrapper.current || !container.current) return;

    const currentIndex = Math.floor(container.current.scrollLeft / wrapper.current.clientWidth);
    const nextIndex = currentIndex === container.current.childElementCount - 1
                      ? 0
                      : currentIndex + 1;
    //container.current.children[nextIndex].scrollIntoView();
    container.current.scrollLeft = (wrapper.current.clientWidth * nextIndex);
  }
  */

  return(
    <div id="depoimentos" className="my-9 tablet:mt-[75px] desktop:mb-[10%]">
      <h2 className="text-xl text-center font-bold tablet:text-[44px]">O que os nossos clientes dizem</h2>
      <div ref={wrapper} className="mt-5 mb-8 w-full h-auto mx-auto bg-slate-400 tablet:mt-9 tablet:w-[700px] overflow-hidden relative">
        {/* <button className='hidden absolute flex top-0 bottom-0 m-auto h-16 bg-white w-8 text-5xl p-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100 left-0 pl-1' onClick={prev}>
          &#8249;
        </button>
        <button className='hidden absolute flex top-0 bottom-0 m-auto h-16 bg-white w-8 text-5xl p-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100 right-0 pl-1' onClick={next}>
          &#8250;
        </button> */}
        <div ref={container} className='carousel-container py-4 flex overflow-x-scroll scroll-smooth justify-start items-center snap-x snap-mandatory'>
          {data.map((d,i) => <Depoimento key={i} depoimento={d} index={i}/>)}
        </div>
      </div>
      <h3 className="font-[nexa] text-[10px] text-center mb-4 tablet:text-[21px]">Avaliação totalizada Google <b>4.9 de 5</b>, com base em <b>327 avaliações</b></h3>
    </div>
  )
}

type DepoimentoProps = {
  "depoimento": {
    "avatar": string,
    "nome": string,
    "data": string,
    "depoimento": string,
    "score": number
  },
  "index": number
}

function Depoimento(props: DepoimentoProps) {
  const stars = Array.from({ length:props.depoimento.score }, (_,i) => i);
  return(
    <div className='w-[100%] h-[100%] flex-[1_0_100%] flex justify-center items-center snap-start'>
      <div className='bg-white rounded-xl p-4 w-11/12'>
        <div className='flex flex-row gap-4'>
          <div className='flex items-center'>
            <img className='w-10 h-10' src={props.depoimento.avatar} alt={`Avatar de ${props.depoimento.nome}`} loading="lazy" decoding='async'/>
          </div>
          <div className='flex flex-col'>
            <div>{props.depoimento.nome}</div>
            <div>
              {formatDate(props.depoimento.data)}
              <div className='flex flex-row'>
                {stars.map((_, i) => <Star key={i}/>)}
              </div>
            </div>
          </div>
        </div>
        <div className='whitespace-pre-line mt-2'>{props.depoimento.depoimento}</div>
      </div>
    </div>
  )
}

function formatDate(input: string) {
  if ((input?.length ?? 0) < 10) return '';

  return `${input.substring(8)}/${input.substring(5,7)}/${input.substring(0,4)}`
}

function Star() {
  return <TbStarFilled/>
}

//Código usado para extrair comentários
/*
JSON.stringify(Array.from(document.querySelectorAll('.ti-review-item'))
.map(d => { return {
"avatar": d.querySelector('.ti-profile-img img').src,
"nome": d.querySelector('.ti-name').innerText,
"data": d.querySelector('.ti-date').innerText,
"depoimento": d.querySelector('.ti-review-content').innerText,
"score": d.querySelectorAll('.ti-star').length
}}))
*/

export default Dobra6;
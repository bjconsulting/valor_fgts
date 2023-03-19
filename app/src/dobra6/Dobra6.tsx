import Image from 'next/image';
import { useRef, MouseEvent } from 'react';
import data from './depoimentos.json';
import { TbStarFilled } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

function Dobra6() {

  //console.log('Data loaded! and component rendered!', data);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!containerRef.current) return

    const container = containerRef.current
    const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
    const {left: containerLeft} = container.getBoundingClientRect()
    const {width: itemsWidth} = items[0].getBoundingClientRect()
    const currentItemIndex = Math.round(container.scrollLeft / itemsWidth)

    if (currentItemIndex > 0) {
      const prevItem = items[currentItemIndex - 1]
      const prevItemRect = prevItem.getBoundingClientRect()
      container.scrollBy({ left: prevItemRect.left - containerLeft, behavior: 'smooth' })
    }
  }

  const next = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!containerRef.current) return

    const container = containerRef.current
    const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
    const {left: containerLeft} = container.getBoundingClientRect()
    const {width: itemsWidth} = items[0].getBoundingClientRect()
    const currentItemIndex = Math.round(container.scrollLeft / itemsWidth)

    if (currentItemIndex < items.length - 1) {
      const nextItem = items[currentItemIndex + 1]
      const nextItemRect = nextItem.getBoundingClientRect()
      container.scrollBy({ left: nextItemRect.left - containerLeft, behavior: 'smooth' })
      //console.log({ container, scrollLeft: container.scrollLeft, left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
    }
  }

  return(
    <div id="depoimentos" className="my-9 tablet:mt-[75px] desktop:mb-[10%] ">
      <h2 className="text-xl text-center font-bold tablet:text-[44px]">O que os nossos clientes dizem</h2>
      <div className='relative w-11/12 mx-auto tablet:w-[764px] tablet:max-w-[95%] tablet:px-2 laptop:w-[1144px]'>
        <button className='hidden absolute tablet:flex top-0 bottom-0 m-auto h-16 bg-white w-8 text-5xl p-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100 left-0 pl-1' onClick={prev}>
          &#8249;
        </button>
        <button className='hidden absolute tablet:flex top-0 bottom-0 m-auto h-16 bg-white w-8 text-5xl p-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100 right-0 pl-1' onClick={next}>
          &#8250;
        </button>
        <div className="mt-5 mb-8 w-full h-auto mx-auto tablet:mt-9 tablet:w-[700px] tablet:max-w-[95%] laptop:w-[1080px] overflow-hidden relative ">
          <div ref={containerRef} className='carousel-container py-4 flex hide-scroll overflow-x-scroll scroll-smooth justify-start items-center snap-x snap-mandatory '>
            {data.map((d,i) => <Depoimento key={i} depoimento={d} index={i}/>)}
          </div>
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
    <div className='w-[100%] h-[100%]  flex-[0_0_100%] tablet:flex-[0_0_33.5%] justify-center items-center snap-start '>
      <div className='bg-white rounded-xl p-4 w-full tablet:w-[95%] aspect-[1.84/1] border-solid border'>
        <div className='flex flex-row gap-[10px]'>
          <div className='flex items-center flex-none'>
            <img className='w-10 h-10 overflow-hidden' src={props.depoimento.avatar} alt={`Avatar de ${props.depoimento.nome}`} loading="lazy" decoding='async'/>
          </div>
          <div className='flex flex-col w-full relative overflow-hidden'>
            <div className='font-bold flex flex-row justify-between w-full overflow-hidden'>
              <div className='w-[90%]'>
                <p className='overflow-hidden overflow-ellipsis whitespace-nowrap'>{props.depoimento.nome}</p>
                <p className='text-[12px] font-normal'>
                  {formatDate(props.depoimento.data)}
                </p>
              </div>
            </div>
            <FcGoogle size={'20px'} className='absolute right-0'/>
            {/*<div>
              <div className='flex flex-row'>
                {stars.map((_, i) => <Star key={i}/>)}
              </div>
            </div> */}
          </div>
        </div>
        <div className='whitespace-pre-line mt-2 text-[14px] flex flex-col gap-2'>
          <div className='flex flex-row'>
            {stars.map((_, i) => <Star key={i} />)}
          </div>
          <p className='h-[62px] pr-4 overflow-y-scroll'>{props.depoimento.depoimento}</p>
        </div>
      </div>
    </div>
  )
}

function formatDate(input: string) {
  if ((input?.length ?? 0) < 10) return '';

  return `${input.substring(8)}/${input.substring(5,7)}/${input.substring(0,4)}`
}

function Star() {
  return <TbStarFilled className="text-[#f6bb06] " />
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
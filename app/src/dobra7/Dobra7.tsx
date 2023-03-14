function isInViewport(box: HTMLDivElement) {
  const rect = box.getBoundingClientRect();

  const isInViewport = rect.width > 0 
                        && rect.height > 0 
                        && rect.bottom > 0 
                        && rect.right > 0 
                        && rect.top < window.innerHeight 
                        && rect.left < window.innerWidth;

  return isInViewport;
};

function Dobra7() {

  if (typeof window !== "undefined") {

    window.addEventListener('scroll', () => {
      const container = document.querySelector('#quem-somos') as HTMLDivElement;
      if (!container || !isInViewport(container)) return;
      const iframe = document.querySelector('iframe');
      if (!iframe || iframe.src !== '') return;
      
      iframe.src = iframe.dataset['src'] ?? '';
    });
  }

  return(
    <div id="quem-somos" className="my-9 desktop:my-[10%]">
      <h2 className="text-xl text-center mb-5 font-bold tablet:text-[49px]">Quem somos nós</h2>
      <iframe className="w-[327px] laptop:w-[1080px] laptop:h-[auto] aspect-video h-[174px] mx-auto tablet:mt-9 tablet:w-[700px] tablet:h-[300px]" data-src="https://www.youtube.com/embed/6Q9mLiNtzTA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
    </div>
  )
}

export default Dobra7;
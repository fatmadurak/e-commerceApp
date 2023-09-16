

  new Glide('.glide2', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    hoverpause: true,
    breakpoints: {
  
      768: {
        perView: 2 // 768 piksel genişlikte 2 slayt göster
      },
      576: {
        perView: 1 // 576 piksel genişlikte 1 slayt göster
      }
      // İstediğiniz kadar breakpoint ekleyebilirsiniz
    }
  }).mount();
  


  new Glide('.glide3', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: true,
    animationDuration: 1000,
    breakpoints: {
      768: {
        perView: 2 // 768 piksel genişlikte 2 slayt göster
      },
      576: {
        perView: 1 // 576 piksel genişlikte 1 slayt göster
      }
      // İstediğiniz kadar breakpoint ekleyebilirsiniz
    }
  }).mount();
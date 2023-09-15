new Glide('.glide', {
    type: 'carousel', // Slider tipini belirtin (carousel, slider, vb.).
    startAt: 0,       // Başlangıç slaytını belirtin (sıfırdan başlayarak).
    perView: 1,       // Her seferinde görünen slayt sayısını belirtin.
    autoplay: 3000,   // Otomatik oynatma süresini belirtin (ms cinsinden).
    hoverpause: true, // Fare slaytın üzerine geldiğinde otomatik oynatmayı durdurun.
    animationDuration: 1500, // Geçiş animasyonunun süresini belirtin (ms cinsinden).
          // Slayt arasındaki boşluğu belirtin (px cinsinden).
   
  }).mount();


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
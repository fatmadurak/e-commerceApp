new Glide('.glide', {
    type: 'carousel', // Slider tipini belirtin (carousel, slider, vb.).
    startAt: 0,       // Başlangıç slaytını belirtin (sıfırdan başlayarak).
    perView: 1,       // Her seferinde görünen slayt sayısını belirtin.
    autoplay: 3000,   // Otomatik oynatma süresini belirtin (ms cinsinden).
    hoverpause: true, // Fare slaytın üzerine geldiğinde otomatik oynatmayı durdurun.
    animationDuration: 500, // Geçiş animasyonunun süresini belirtin (ms cinsinden).
          // Slayt arasındaki boşluğu belirtin (px cinsinden).
   
  }).mount();
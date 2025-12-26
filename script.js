const card = document.getElementById('card');

// Karta tıklandığında çevirme sınıfını ekle/çıkar
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
    
    // Konsola bir log bırakalım, her şeyin yolunda olduğunu görelim
    if(card.classList.contains('is-flipped')) {
        console.log("Mesaj iletildi!");
    }
});

// Fare hareketine göre hafif bir 3D eğim efekti ekleyelim (Opsiyonel ama şık durur)
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    if (!card.classList.contains('is-flipped')) {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

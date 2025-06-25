document.addEventListener('DOMContentLoaded', () => {
    const weatherInfoElement = document.getElementById('weather-info');

    // Basit bir hava durumu simülasyonu veya API çağrısı
    // Gerçek bir API kullanmak için Fetch API ve bir hava durumu servisi (örn. OpenWeatherMap) gerekir.
    // API anahtarınızı ve lokasyon bilgilerinizi güncellemeniz gerekir.
    
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=YOUR_API_KEY')
    //     .then(response => response.json())
    //     .then(data => {
    //         const tempK = data.main.temp;
    //         const tempC = (tempK - 273.15).toFixed(1);
    //         weatherInfoElement.textContent = `Şehir: ${data.name}, Sıcaklık: ${tempC}°C, Durum: ${data.weather[0].description}`;
    //     })
    //     .catch(error => {
    //         console.error('Hava durumu bilgisi alınamadı:', error);
    //         weatherInfoElement.textContent = 'Hava durumu bilgisi yüklenemedi.';
    //     });

    // Şimdilik sabit bir metinle gösterelim
    weatherInfoElement.textContent = 'Samsun, Tekkeköy: 25°C, Açık Hava';
});
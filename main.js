import{ API } from './scripts/api.js';
import { ele, renderCards, renderLoader, renderPlayingInfo } from './scripts/ui.js';


//todo: class ın bir örneğini oluştur:

const api = new API();

document.addEventListener("DOMContentLoaded", async() =>{
    renderLoader();
    await api.getPopular();
    renderCards(api.songs);
});

ele.playing.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.id === 'close-btn') {
      ele.playing.innerHTML = '';
    }
  });

//todo: müzik listesindeki tıklanmaları izler

ele.list.addEventListener("click" , (e) =>{
    if(e.target.id==="play-btn"){

        //oynat butonuna en yakın olan .card class ına sahip card a ulaştırır.
        const parent = e.target.closest(".card");

        //çalınan müziğin bilgilerini ekrana basma:
        renderPlayingInfo(parent.dataset)
        
    }
});

//todo: arama formu gönderildiğinde

ele.searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    //aratılan terime erişme
    const query= e.target[0].value;
    //hiçbir şey yazılmamışsa fonksiyonu durdurma.
    if(!query) return;

    //todo: ekrana loading basma:
    
    renderLoader();
    //başlığı arama sonucunda güncelleme:
    ele.title.innerHTML=` ${query} için sonuçlar`;

    //apiden şarkıları alma:
    api.searchMusic(query);


});

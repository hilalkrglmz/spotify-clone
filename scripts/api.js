import{ url,options } from "./constants.js"
import { renderCards } from "./ui.js";


//TODO: API İSTEK İŞLEMLERİ

export class API {
    constructor() {
        this.songs = [];
    }

    //popüler müzikler için istek atmak

    async getPopular(){

try {

    //Api isteği atar.
    
    const res = await fetch(url, options);
    const data = await res.json();


    //class içinde tuttuğumuz değişkeni günceller.
    this.songs= data.data
    
} catch (error) {
    alert('hata oluştu!', error)
}

    }

    
    //aratılan içeriğe erişme
    async searchMusic(query){
        const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, options);
        const data = await res.json();
        const newData = data.data

        //aranan müzikleri ekrana ba
        renderCards(newData);
    }
}


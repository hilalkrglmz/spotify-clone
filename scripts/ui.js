//*HTML den gelenler:

export const ele = {
    list: document.querySelector('#list'),
    playing: document.querySelector(".playing"),
    searchForm: document.querySelector("#search-form"),
    title: document.querySelector(".songs #title"),
    close: document.querySelector("#close-btn")

}


//TODO ARAYÜZ İŞLEMLERİ:

export const renderCards = (songs) => {

    //eski şarkıları sil.
    ele.list.innerHTML = ' '
    songs.forEach((song) => {

        const div = document.createElement('div');
        console.log(song)

        div.dataset.url = song.preview;
        div.dataset.title = song.title;
        div.dataset.photo = song.artist.picture;
        div.className = 'card'
        div.innerHTML = `
        <figure>
            <img src="${song.artist.picture}" alt="">
            <div class="play">
            <i id="play-btn" class="bi bi-play-fill"></i>                        
            </div>
        </figure>
        <h4>${song.artist.name}</h4>
        <p>${song.title}</p>
        `

        ele.list.appendChild(div);
    });
};





//müzik bilgilerini ekrana basar.
export const renderPlayingInfo = (data) => {

    console.log(data)
    ele.playing.innerHTML = `
    <div class="info">
    <img class="animate" src="${data.photo}" alt="">
    <div>
        <p>Şu anda oynatılıyor</p>
        <h3>${data.title}</h3>
    </div>
</div>
<audio controls autoplay>
    <source src="${data.url}">
</audio>

<div class="close">
<i id="close-btn" class="bi bi-x-circle"></i>
</div>
`

}



export const renderLoader = () => {
    ele.list.innerHTML = `
    <div class="container">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
    `
}



















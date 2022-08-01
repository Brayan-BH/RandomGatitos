const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=6'


   async function reload() {

   const res = await fetch(API_URL)
   const data = await res.json()

    console.log(data)
    const $img = document.getElementById('img-random')
    const $img2 = document.getElementById('img-random2')
    const $img3 = document.getElementById('img-random3')
    const $img4 = document.getElementById('img-random4')
    const $img5 = document.getElementById('img-random5')
    const $img6 = document.getElementById('img-random6')

    $img.src = data[0].url
    $img2.src = data[1].url
    $img3.src = data[2].url
    $img4.src = data[3].url
    $img5.src = data[4].url
    $img6.src = data[5].url

   }
   reload()
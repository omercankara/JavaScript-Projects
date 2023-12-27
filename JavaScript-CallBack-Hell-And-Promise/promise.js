//Promise İŞLEM BİTTİĞİNDE BİR SONRAKİ İŞLEMİ YAPTIRMAK İÇİN KULLANILIR
const box = document.querySelector('.box')
setTimeout(() => {
        box.classList.add('bigger')
        setTimeout(() => {
                box.classList.add('circle')
                setTimeout(() => {
                        box.classList.add('move')
                        setTimeout(() => {
                                box.classList.add('colored')
                                setTimeout(() => {
                                        box.classList.remove('colored')
                                        setTimeout(() => {
                                                box.classList.remove('move')
                                                setTimeout(() => {
                                                        box.classList.remove('circle')
                                                        setTimeout(() => {
                                                                box.classList.remove('bigger')
                                                        }, 500)
                                                }, 500)
                                        }, 500)
                                }, 500)
                        }, 500)
                }, 500)
        }, 500)
}, 500)



/*  
let laoding = false
new Promise((resolve,reject)=>{ //2 adet fonksiyon alır resolve ve reject 

        laoding = true
        //işlem bitti ve başarılı ile İSE RESOLVE
        resolve('çözüldü')

        //işlem hatalı ise REJECT
        reject('çözülmedi')
})

.then(data=>{ //resolve olunca then çalışıyor gelen data then ile karışalanır
        console.log(data)
})

.catch(data=>{
console.log(data)
})      

.finally(()=>{
        laoding = false
})
*/






/*uzun kulllanımı
function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
}
*/
//Kısa Kullanımı


const wait = ms => new Promise(resolve=>setTimeout((resolve,ms)))

wait(500)
        .then(() => {
                box.classList.add('bigger')
                return wait(500)
        })

        .then(() => {
                box.classList.add('circle')
                return wait(500)
        })
        .then(() => {
                box.classList.add('move')
                return wait(500)
        })
        .then(() => {
                box.classList.add('colored')
                return wait(500)
        })


           .then(() => {
                box.classList.remove('colored')
                return wait(500)
        })

        .then(() => {
                box.classList.remove('move')
                return wait(500)
        })
        .then(() => {
                box.classList.remove('circle')
                return wait(500)
        })
        .then(() => {
                box.classList.remove('bigger')
                return wait(500)
        })








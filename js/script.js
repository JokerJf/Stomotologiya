let logo = document.querySelector('.main_logo')


let block3 = document.querySelectorAll('.kontakts')  // ссылка
let kontakts = document.querySelector('.seventh_section')// БЛОК

let arrrow = document.querySelector('.arrow')
let white_btn = document.querySelector('#about')
let sec_3 = document.querySelector('.third_section')

let category = document.querySelectorAll('.category_btn')
let sec_5 = document.querySelector('.fifth_section')
let pos_sec4 = kontakts.offsetTop // координаты по высоте блока

logo.addEventListener('click', () => {
    event.preventDefault()  // отключиение обновления
})
for (let item of category) {
    item.addEventListener('click', () => {
        event.preventDefault()  // отключиение обновления
        window.scrollTo({   // функция скролла 
            top: sec_5.offsetTop,    // на сколько вниз он должен прокрутиться
            left: 0,
            behavior: "smooth" // плавность 
        });
    })
}
arrrow.addEventListener('click', () => {
    event.preventDefault()  // отключиение обновления
    window.scrollTo({   // функция скролла 
        top: sec_3.offsetTop,    // на сколько вниз он должен прокрутиться
        left: 0,
        behavior: "smooth" // плавность 
    });
})

white_btn.addEventListener('click', () => {
    event.preventDefault()  // отключиение обновления
    window.scrollTo({   // функция скролла 
        top: sec_3.offsetTop,    // на сколько вниз он должен прокрутиться
        left: 0,
        behavior: "smooth" // плавность 
    });
})





for (let item of block3) {
    item.addEventListener('click', jakor)
}
// прокрутка 
function jakor(event) {
    event.preventDefault()  // отключиение обновления
    window.scrollTo({   // функция скролла 
        top: pos_sec4,    // на сколько вниз он должен прокрутиться
        left: 0,
        behavior: "smooth" // плавность 
    });

}
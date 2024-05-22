/*--=============History===============--*/
const modal = document.querySelectorAll('.history__modal'),
modalButton = document.querySelectorAll('.history__button'),
modalClose = document.querySelectorAll('.history__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}
modalButton.forEach((modalButton, i)=>{
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modal.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove)=>{
            modalRemove.classList.remove('active-modal')
        })
    })
})
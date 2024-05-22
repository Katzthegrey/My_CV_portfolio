/*===================Email JS================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

// Linking my personal email to receive emails
emailjs.sendForm('service_7v42x9c','template_tgae3d7','#contact-form','LkpzG9B23xa5Rpqu7')

   .then(() => {
    //Notifying email was delivered successfuly
    contactMessage.textContent = 'Your Email has been Delivered'

    // Notification delivery message disapearance
    setTimeout(() =>{
        contactMessage.textContent = ''
    }, 5000)
    // clear content after sending them
    contactForm.reset()
   }, () => {

    // error msg
    contactMessage.textContent = 'Something did not go quite right (please try again)'
   })
}
contactForm.addEventListener('submit', sendEmail)
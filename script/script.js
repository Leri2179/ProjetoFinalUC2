const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const nome=document.querySelector('#nome').value
    const email=document.querySelector('#email').value
    const telefone=document.querySelector('#telefone').value
    const mensagem=document.querySelector('#mensagem').value
    console.log(`${nome}
    ${email}
    ${telefone}
    ${mensagem}`)
})
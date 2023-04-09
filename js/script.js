const btn = document.querySelector('.btn-menu')
const opcoes = document.querySelector('.mobile-opcoes')

btn.addEventListener('click', e =>{
  const btnTexto = btn.innerText

  if(btnTexto === 'Show'){
    btn.innerText  = 'Hide'
    opcoes.style.display = 'flex'

  }

  else if (btnTexto === 'Hide') {
    btn.innerText  = 'Show'
    opcoes.style.display = 'none'
  }

})

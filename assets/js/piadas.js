const url = `https://api.chucknorris.io/jokes/random`
const btn = document
  .getElementById('btnpiada')
  .addEventListener('click', async function () {
    const button = document.getElementById('btnpiada')
    button.setAttribute('value', 'Próxima')
    const dados = await fetch(url)
    const piada = await dados.json()
    const box = document.querySelector('.gerarpiada')
    box.replaceChildren(piada.value)
  })

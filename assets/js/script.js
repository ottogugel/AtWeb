// fetch(url)
// .then(responde => responde.json())
//.then(console.log)
// addEventListener = Escutar o que o evento está acontecendo;

const limparFormulario = endereco => {
  document.getElementById('endereco').value = ''
  document.getElementById('bairro').value = ''
  document.getElementById('cidade').value = ''
  document.getElementById('estado').value = ''
  document.getElementById('numero').value = ''
}

const preencherFormulario = endereco => {
  document.getElementById('endereco').value = endereco.logradouro
  document.getElementById('bairro').value = endereco.bairro
  document.getElementById('cidade').value = endereco.localidade
  document.getElementById('estado').value = endereco.uf
  document.getElementById('numero').value = endereco.siafi
}

const Enumerator = numero => /^[0-9]+$/.test(numero) // se o cep tem tamanho de 8 e é numero;
const cepValido = cep => cep.length == 8 && Enumerator(cep) // validando o tamanho do cep tem que ser igual a 8;

const pesquisarCep = async () => {
  limparFormulario()
  const cep = document.getElementById('cep').value // document.getElementById = Indo no documento para pegar o elemento cujo id é o CEP;
  const url = `https://viacep.com.br/ws/${cep}/json/` // json viacep
  if (cepValido(cep)) {
    // validando o cep
    const dados = await fetch(url)
    const endereco = await dados.json()
    if (endereco.hasOwnProperty('erro')) {
      document.getElementById('endereco').value = 'CEP não encontrado!'
    } else {
      preencherFormulario(endereco)
    }
  } else {
    document.getElementById('endereco').value = 'CEP incorreto!'
  }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep)

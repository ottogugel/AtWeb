function load() {
  // a cada 30 segundos atualiza o valor real do bitcoin
  const cotacaoBitcoin = async () => {
    const url = `https://blockchain.info/ticker` // json blockchain
    const moedas = await fetch(url)
    const btcjson = await moedas.json()
    console.log(btcjson.BRL)
  }
  cotacaoBitcoin()
  setInterval(cotacaoBitcoin, 30000)
}

const moedaBitcoin = () => {
  // qualquer valor que seja atribuido ao 1 input, logo é alterado no 2 também.
  const valorBitcoin = document.getElementById('estrangeiro')
  let conversaoReais = document.getElementById('nacional')

  valorBitcoin.addEventListener('input', () => {
    conversaoReais.value = valorBitcoin.value * 143252.3
  })
}

moedaBitcoin()

function load() {
  const cotacaoBitcoin = async () => {
    const url = `https://blockchain.info/ticker` // json blockchain
    const moedas = await fetch(url)
    const btcjson = await moedas.json()
    console.log(btcjson.BRL)
  }
  cotacaoBitcoin()
  setInterval(cotacaoBitcoin, 30000)
}

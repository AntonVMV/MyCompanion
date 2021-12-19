import axios from 'axios'

export const financeRequest = async (url) => {
  const result = await axios
    .all([
      axios
        .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=4')
        .then((res) => res.data),
      axios
        .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5')
        .then((res) => res.data),
    ])
    .then(
      axios.spread((res1, res2) => {
        const arr = [...res1, ...res2]
        const obj = {}
        arr.forEach((item) => {
          obj[item.ccy] = item
        })
        obj.UAH = { base_ccy: 'UAH', buy: '1', ccy: 'UAH', sale: '1' }
        return obj
      })
    )
  return result
}

import { Rates } from './Rates'
import { Converter } from './Converter'

export const ExchangeRates = () => {
  return (
    <div className="finance__container">
      <div className="rate__container">
        <h3 className="rate__header">Exchange Rates(Ukraine)</h3>
        <Rates />
      </div>
      <div className="converter__container">
        <h3 className="rate__header">Converter</h3>
        <Converter />
      </div>
    </div>
  )
}

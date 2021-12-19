import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFinanceRequest } from '../../store/thunk/financeThunk'
import './style.css'

export const Rates = () => {
  const dispatch = useDispatch()
  const { finance, loading } = useSelector((store) => store.financeReducer)
  useEffect(() => {
    dispatch(getFinanceRequest())
  }, [])

  const roundData = (item) => {
    return parseFloat(item).toFixed(2)
  }

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {finance && (
        <ul className="rates__list">
          <li className="rates__item rates__description">
            <p className="rates__text buy__text">Buy</p>
            <p className="rates__text">Sale</p>
          </li>
          <li className="rates__item">
            <p className="rates__text">
              <span>USD</span>
              <img
                src="./img/countr/USD.png"
                alt="counrty-icon-flag"
                className="coutry__flag-icon"
              />
            </p>
            <p className="rates__number">{roundData(finance.USD.buy)}</p>
            <p className="rates__number">{roundData(finance.USD.sale)}</p>
          </li>
          <li className="rates__item">
            <p className="rates__text">
              <span>EUR</span>
              <img
                src="./img/countr/EUR.png"
                alt="counrty-icon-flag"
                className="coutry__flag-icon"
              />
            </p>
            <p className="rates__number">{roundData(finance.EUR.buy)}</p>
            <p className="rates__number">{roundData(finance.EUR.sale)}</p>
          </li>
          <li className="rates__item">
            <p className="rates__text">
              <span>RUR</span>
              <img
                src="./img/countr/RUR.png"
                alt="counrty-icon-flag"
                className="coutry__flag-icon"
              />
            </p>
            <p className="rates__number">{roundData(finance.RUR.buy)}</p>
            <p className="rates__number">{roundData(finance.RUR.sale)}</p>
          </li>
          <li className="rates__item">
            <p className="rates__text">
              <span>BTC</span>
              <img
                src="./img/countr/BTC.png"
                alt="counrty-icon-flag"
                className="coutry__flag-icon"
              />
            </p>
            <p className="rates__number">{roundData(finance.BTC.buy)}</p>
            <p className="rates__number">{roundData(finance.BTC.sale)}</p>
          </li>
        </ul>
      )}
    </>
  )
}

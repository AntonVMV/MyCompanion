import { useState } from 'react'

export const ConverterDropdown = ({ items, onInput, defaultValue, children }) => {
  const [open, setOpen] = useState(false)

  const dropdownChange = (item) => {
    onInput({ ...defaultValue, cur: item })
    setOpen(false)
  }

  return (
    <>
      {children}
      <div className="curency__field" onClick={() => setOpen(!open)}>
        <img
          src={`./img/countr/${defaultValue.cur}.png`}
          alt="counrty-icon-flag"
          className="coutry__flag-icon"
        />
        <p className="curency__text">{defaultValue.cur}</p>
      </div>
      <ul className={open ? 'curency__list active' : 'curency__list'}>
        {items.map((item, index) => {
          return (
            <li key={index} className="curency__item" onClick={() => dropdownChange(item)}>
              <img
                src={`./img/countr/${item}.png`}
                alt="counrty-icon-flag"
                className="coutry__flag-icon"
              />
              <p className="curency__text">{item}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

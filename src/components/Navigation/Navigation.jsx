import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'

export const Navigation = () => {
  const tabs = ['Home', 'ToDoList', 'Notes', 'Weather', 'ContactBook', 'Converter']
  const [isOpenMenu, setOpenMenu] = useState(false)

  return (
    <nav className="nav__wrap">
      <h2 className="nav__logo">
        <Link to="/" className="link logo__link">
          My Companion
        </Link>
      </h2>
      <div className="nav__burger" onClick={() => setOpenMenu(true)}>
        <img src="./img/burger-icon.png" alt="burger icon" className="burger__icon" />
      </div>
      <ul className={isOpenMenu ? 'nav__list open' : 'nav__list'}>
        <div className="menu__close" onClick={() => setOpenMenu(false)}>
          <img src="./img/close-icon.png" alt="close icon" className="close-icon" />
        </div>
        {tabs.map((tab, index) => {
          return (
            <li key={index} className="nav__item">
              <NavLink
                to={tab === 'Home' ? '/' : tab}
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) => {
                  return isActive ? 'nav__link link active' : 'nav__link link'
                }}
              >
                {tab}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

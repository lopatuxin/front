import style from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <NavLink to='/home'>Логотип</NavLink>
            </div>
            <div className={style.rightSection}>
                <div className={style.login}>
                    <NavLink to='/login'>Вход</NavLink>
                </div>
                <div className={style.search}>
                    <input type='search' placeholder='Поиск....'/>
                    <button type='submit'>Найти</button>
                </div>
            </div>
        </div>
    )
}
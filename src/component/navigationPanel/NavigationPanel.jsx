import style from './NavigationPanel.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faBook, faComments, faEnvelope, faUsers} from "@fortawesome/free-solid-svg-icons";

export const NavigationPanel = () => {
    return (
        <div className={style.navigationPanel}>
            <ul>
                <li className={style.block}>
                    <NavLink to='/course' className={link => link.isActive ? style.active : style.block}>
                        <FontAwesomeIcon icon={faBook}/> Курс
                    </NavLink>
                </li>
                <li className={style.block}>
                    <NavLink to='/forum' className={link => link.isActive ? style.active : style.block}>
                        <FontAwesomeIcon icon={faComments}/> Форум
                    </NavLink>
                </li>
                <li className={style.block}>
                    <NavLink to='/friends' className={link => link.isActive ? style.active : style.block}>
                        <FontAwesomeIcon icon={faUsers}/> Друзья
                    </NavLink>
                </li>
                <li className={style.block}>
                    <NavLink to='/messages' className={link => link.isActive ? style.active : style.block}>
                        <FontAwesomeIcon icon={faEnvelope}/> Сообщения
                    </NavLink>
                </li>
                <li className={style.block}>
                    <NavLink to='/notifications' className={link => link.isActive ? style.active : style.block}>
                        <FontAwesomeIcon icon={faBell}/> Уведомления
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
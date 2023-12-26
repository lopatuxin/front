import style from './NavigationPanel.module.css'

export const NavigationPanel = () => {
    return (
        <div className={style.navigationPanel}>
            <ul>
                <div className={style.block}>
                    <h3>Аккаунт</h3>
                </div>
                <div className={style.block}>
                    <h3>Обучение</h3>
                </div>
                <div className={style.block}>
                    <h3>Сообщество</h3>
                </div>
            </ul>
        </div>
    )
}
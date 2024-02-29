export const Header = () => {

    const links = [
        "Главная",
        "О нас",
        "Контакты",
        "Отзывы"
    ]

    return (
        <div className="header">
            <div className="header-wrapper">
                <nav>
                    <ul>
                        {links.map(e => (
                            <li key={e}>
                                <button>{e}</button>
                            </li>))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
};

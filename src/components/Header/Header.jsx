import './Header.css';

function Header() {
    return (
        <div className="header__wrapper">
            <h3 className="header__wrapper-title">Word Simulator</h3>
            <div className="header__wrapper-item">Главная</div>
            <div className="header__wrapper-list">Показать список слов</div>
        </div>
    );
}

export default Header;

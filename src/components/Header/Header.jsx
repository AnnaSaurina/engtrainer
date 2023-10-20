
function Hero(props) {
    return (
        <div className="hero-card">
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">Вселенная: {props.universe}</div>
            <div className="hero-alterego">Альтерэго: {props.alterego}</div>
            <div className="hero-occupation">Занятость: {props.occupation}</div>
            <div className="hero-friends">Друзья: {props.univefriendsse}</div>
            <div className="hefriendso-superpowers">Суперсила: {props.superpowers}</div>
            <div className="hero-info">Инфо: {props.info}</div>
            <img src={props.url} className="hero-img" alt="img" />
            <button>Click!</button>
        </div>
    );
}

export default Hero;

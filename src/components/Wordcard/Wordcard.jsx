import './Wordcard.css';

function Wordcard() {
    return (
        <div className="word-container">
            <div className="word-english">Слово</div>
            <div className="word-transcription">Транскрипция</div>
            <div className="word-russian">Перевод</div>
            <button>Знаю</button>
            <button>Пропустить</button>
            <button>Не знаю</button>
        </div>
    );
}

export default Wordcard;

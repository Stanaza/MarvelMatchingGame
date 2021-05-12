import React, {useState, useEffect} from "react";
import "./index.css";
import cardsData from './cardsData';
import {Route} from "react-router-dom";


import GameBoard from "./components/GameBoard/GameBoard";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Navbar from "./components/NavBar/NavBar";
import ModalWin from "./components/ModalWin/ModalWin";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import TopScore from "./components/TopScore/TopScore";
import GamePlay from "./components/GamePlay/GamePlay";
import { addInLocalStorage } from "./addToLocalStorage";


const App = () => {

    const getLocalStorage = () => JSON.parse(localStorage.getItem('allEntries')) || [];

    const [diffLevel, setDiffLevel] = useState(20);
    const [selectedCards, setSelectedCards] = useState([]);
    const [tries, setTries] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [modalLoginActive, setModalLoginActive] = useState(true);
    const [modalWinActive, setModalWinActive] = useState(false);
    const [cards, setCards] = useState(shuffle());
    const [lookImg, setLookImg] = useState('https://i.pinimg.com/564x/c5/75/03/c57503c194f5f0a538afe613622f12bf.jpg');
    const [nickName, setNickName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [localStorageData, setLocalStorageData] = useState(getLocalStorage);


    function shuffle() {
        return cardsData.slice(0, diffLevel).sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        let interval = null;
        if (!gameWon && startGame) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        }
        addInLocalStorage (gameWon, nickName, email, lastName, seconds, tries, diffLevel, setLocalStorageData);
        return () => clearInterval(interval);
    }, [gameWon, startGame]);

    useEffect(() => {
        if (selectedCards.length === 2) setTimeout(checkCards, 400);
    }, [selectedCards]);


    const refreshGame = () => {
        setCards(shuffle);
        setSelectedCards([]);
        setTries(0);
        setGameWon(false);
        setModalWinActive(false);
        setStartGame(false);
        setSeconds(0);
    };

    const checkCards = () => {
        const [firstCard, secondCard] = selectedCards;
        if (firstCard.value === secondCard.value) {
            let hasGameBeenWon = true;
            cards.forEach(card => (card.flipped ? card.opacity = 0 : (hasGameBeenWon = false)));
            setGameWon(hasGameBeenWon);
            setModalWinActive(true);
        } else {
            const newCards = cards.map((card) => {
                if (card.id === firstCard.id || card.id === secondCard.id) {
                    const newCard = {...card, flipped: false};
                    return newCard;
                } else {
                    return card;
                }
            });
            setCards(newCards);
            setTries(tries + 1);
        }
        setSelectedCards([]);
    };

    const flipCard = (id) => {
        setStartGame(true)
        const newCardData = cards.map((card) => {
            if (card.id === id && !card.flipped) {
                const newCard = {...card, flipped: true};
                setSelectedCards([...selectedCards, newCard]);
                return newCard;
            } else {
                return card;
            }
        });
        setCards(newCardData);
    };

    return (
        <>
            {
                modalLoginActive &&
                <ModalLogin modalLoginActive={modalLoginActive}
                            setModalLoginActive={setModalLoginActive}
                            setNickName={setNickName}
                            nickName={nickName}
                            lastName={lastName}
                            setLastName={setLastName}
                            email={email}
                            setEmail={setEmail}
                />
            }
            <Navbar setDiffLevel={setDiffLevel} refreshGame={refreshGame} setLookImg={setLookImg}/>


            <Route path='/game'>
                <GamePlay modalWinActive={modalWinActive}
                          setModalWinActive={setModalWinActive}
                          refreshGame={refreshGame}
                          gameWon={gameWon}
                          tries={tries}
                          seconds={seconds}
                          cards={cards}
                          flipCard={flipCard}
                          lookImg={lookImg}
                />
            </Route>
            <Route path='/topscore'>
                <TopScore localStorageData={localStorageData}/>
            </Route>
        </>
    )
}

export default App;

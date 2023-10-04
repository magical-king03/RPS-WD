import hand from '../img/hand1.png'
import Rock from '../img/rock.png'
import Paper from '../img/paper.png'
import Scissors from '../img/scissors.png'
import { useState } from 'react'

const values = ['Rock', 'Paper', 'Scissors'];

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Home() {
    let [playerPoint, setPlayerPoint] = useState(0);
    let [compPoint, setCompPoint] = useState(0);
    var randomNum = generateRandomNumber(0, 2);
    let [compValue, setCompValue] = useState('')
    let [playerValue, setPlayerValue] = useState('')
    const [userHand, setUserHand] = useState(hand)
    let [compHand, setCompHand] = useState(hand)
    
    function rockHandler() {
        setCompValue(values[randomNum])
        assign()
        setPlayerValue('Rock')
        check()
    }
    function paperHandler() {
        setCompValue(values[randomNum])
        setPlayerValue('Paper')
        assign()
        check()
    }
    function scissorsHandler() {
        setCompValue(values[randomNum])
        setPlayerValue('Scissors')
        assign()
        check()
    }

    function assign() {
        if (compValue === 'Rock')
            setCompHand(Rock)
        else if (compValue === 'Paper')
            setCompHand(Paper)
        else if (compValue === 'Scissors')
            setCompHand(Scissors)
        else
            setCompHand(Rock)
            if (playerValue === 'Rock')
            setUserHand(Rock)
        else if (playerValue === 'Paper')
            setUserHand(Paper)
        else if (playerValue === 'Scissors')
            setUserHand(Scissors)
        else
            setUserHand(Rock)
    }

    function check() {
        if (playerValue === 'Rock' && compValue === 'Scissors')
            setPlayerPoint(playerPoint + 1)
        else if (playerValue === 'Paper' && compValue === 'Rock')
            setPlayerPoint(playerPoint + 1)
        else if (playerValue === 'Scissors' && compValue === 'Paper')
            setPlayerPoint(playerPoint + 1)
        else if (playerValue === compValue) {
            setPlayerPoint(playerPoint)
            setCompPoint(compPoint)
        }
        else
            setCompPoint(compPoint + 1)
    }
    
    return (
        <div>
            <h3>RPS game</h3>
            <div className='points'>
                <h2>Player point: {playerPoint} </h2>
                <h2>Computer point: {compPoint} </h2>
            </div>
            <div className='hand'>
                <div>
                    <h3>User</h3>
                    {/* <p>{playerValue}</p> */}
                    <img src={userHand} className='lhand' alt='userHand' />
                </div>
                <div>
                    <h3>Computer</h3>
                    {/* <p>{compValue}</p> */}
                    <img src={compHand} className='rhand' alt='compHand' />
                </div>
            </div>
            <br />
            <h3>Next move?</h3>
            <div className='symbol-container'>
                <div>
                    <img src={Rock} className='rock symbol' alt='rock' onClick={rockHandler} />
                    <p>Rock</p>
                </div>
                <div>
                    <img src={Paper} className='paper symbol' alt='paper' onClick={paperHandler} />
                    <p>Paper</p>
                </div>
                <div>
                    <img src={Scissors} className='scissors symbol' alt='scissors' onClick={scissorsHandler} />
                    <p>Scissors</p>
                </div>
            </div>
        </div>
    )
}

export default Home
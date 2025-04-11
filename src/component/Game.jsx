import { useState } from "react";
import PlayerInput from "./PlayerInput";
import RoundResult from "./RoundResult";

const initialPlayers = [
    {"name": 'You', hp: 10, isPlayer: true},
    {"name": "chisiya", hp: 10},
    {"name": "NPC2", hp: 10},
    {"name": "Kuzuryu", hp: 10},
]

function Game() {

    const [players, setPlayers] = useState(initialPlayers)
    const [roundData, setRoundData] = useState(null)
    const [inputValue, setInputValue] = useState('')


    const playRound = (playerChoice) => {

        const choices = players.map((p) => {
            if (p.isPlayer){
                return {...p, choice: playerChoice}
            }

            return {...p, choice: Math.floor(Math.random() * 101)}
        })

        const average = choices.reduce((sum, p) => sum + p.choice, 0) / choices.length;
        const target = average * 0.8;

            const closest = choices.reduce((prev, curr) => 
                Math.abs(curr.choice - target) < Math.abs(prev.choice - target) ? curr : prev
            );

            const updatePlayers = choices.map((p) => {
                if (p.name !== closest.name){
                    return {...p, hp: p.hp - 1}
                };

                return p
            })
            
            setPlayers(updatePlayers.filter(p => p.hp > 0))
            setRoundData({choices, target, winner: closest.name})
            setInputValue('')
    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () =>{
    
        const num = parseInt(inputValue, 10)
        
        if (isNaN(num) || num < 0 || num > 100) return;
        
        playRound(num)
    }

    if (players.length === 1) {
        return <h2>Game over! Winner: {players[0].name}</h2>
    }

    

    return (
        <div>
            <PlayerInput
                value={inputValue}
                onChange={handleInput}
                onSubmit={handleSubmit}
             />
             { roundData && < RoundResult data={roundData}/>}

             <div className="mt-[20px]">{
                players.map(p => (
                    <p key={p.name}>{p.name} - HP: {p.hp}</p>
                ))}</div>
        </div>
    )
    
}

export default Game;


/*

const playRound = (playerChoice)=> {

        const choices = players.map((p) => {
            if (p.isPlayer){
                return {...p, choice: playerChoice}
            }

            return {...p, choice: Math.floor(Math.random * 101)}
        })

        const average = choices.reduce((sum, p) => sum + p.choice, 0) / choices.length;
        const target = average * 0.8;

            const closest = choices.reduce((prev, curr) => 
                Math.abs(curr.choice - target) < Math.abs(prev.choice - target) ? curr : prev
            );

            const updatePlayers = choices.map((p) => {
                if (p.name !== closest.name){
                    return {...p, hp: hp - 1}
                };

                return p
            })
            
            setPlayers(updatePlayers.filter(p => p.hp > 0))
            setRoundData({choices, target, winner: closest.name})
            setInputValue('')
            }

            const handleInput = (e) => {
                setInputValue(e.target.value)
            }

            const handleSubmit = () =>{
                const num = parseInt(inputValue, 10)
                
                if (isNaN(num) || num < 0 || num > 100) return;
                
                playRound(num)
            }

            if (players.length === 1) {
                return <h2>Game over! Winner: {players[0].name}</h2>
            }

*/
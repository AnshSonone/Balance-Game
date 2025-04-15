function RoundResult({data}) {
    
    return (
        <div className="">
            <h2 className="h2">Round Result</h2>
            <h4 className="h4">Target (80% of avg): {data.target.toFixed(2)}</h4>
            <h5 className="h5">Winner: {data.winner}</h5>
            <ul className="grid-container">
                {data.choices.map(p => (
                    <p key={p.name} className="">{p.name}: <br/> Predicted : <span className="PredictedScore">{p.choice}</span></p>
                ))}
            </ul>
        </div>
    )
}

export default RoundResult;
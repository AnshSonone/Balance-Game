function RoundResult({data}) {
    
    return (
        <div className="mt-[20px]">
            <h3>Round Result</h3>
            <p>Target (80% of avg): {data.target.toFixed(2)}</p>
            <p>Winner: {data.winner}</p>
            <ul>
                {data.choices.map(p => (
                    <li key={p.name}>{p.name}: {p.choice}</li>
                ))}
            </ul>
        </div>
    )
}

export default RoundResult;
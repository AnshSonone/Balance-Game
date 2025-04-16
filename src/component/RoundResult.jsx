import React from "react";

function RoundResult({data}) {
    
    return (
        <div className="">
            <h2 className="text-[25px] py-[5px] ">Round Result</h2>
            <h4 className="text-[25px] py-[5px]">Target (80% of avg): {data.target.toFixed(2)}</h4>
            <h5 className="text-xl bg-yellow-200 p-4 my-4 font-bold">Winner: {data.winner}</h5>
            <ul className="grid-container mt-4">
                {data.choices.map(p => (
                    <p key={p.name} className="">{p.name}: <br/> Predicted : <span className="bg-black text-white p-[5px] mt-[16px]">{p.choice}</span></p>
                ))}
            </ul>
        </div>
    )
}

export default RoundResult;
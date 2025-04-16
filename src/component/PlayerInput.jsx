import React from "react";

function PlayerInput({value, onChange, onSubmit}) {
    return (
        <div className="">
            <input
                className="w-[210px] sm:w-[26vw] md:w-[18vw] h-[45px] text-center rounded-3xl outline-none border-[1px] border-black p-2 appearance-none"
                type="number"
                min={0}
                max={100}
                value={value}
                onChange={onChange}
                placeholder="Pick a number ( 0 - 100 )"
            />

            {/* <div className="bg-black text-white px-4 py-2 rounded text-blue-200">Submit</div> */}

            <button onClick={onSubmit} className="my-8 mx-4 bg-black text-white py-[10px] px-[20px] rounded-3xl">Submit</button>
        </div>
    )
}

export default PlayerInput;
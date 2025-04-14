function PlayerInput({value, onChange, onSubmit}) {
    return (
        <div className="">
            <input
                className="InputBox"
                type="number"
                min={0}
                max={100}
                value={value}
                onChange={onChange}
                placeholder="Pick a number ( 0 - 100 )"
            />

            {/* <div className="bg-black text-white px-4 py-2 rounded text-blue-200">Submit</div> */}

            <button onClick={onSubmit} className="submitBtn">Submit</button>
        </div>
    )
}

export default PlayerInput;
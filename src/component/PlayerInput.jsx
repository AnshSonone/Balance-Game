function PlayerInput({value, onChange, onSubmit}) {
    return (
        <div>
            <input
                className="p-[8px] mr-[8px]"
                type="number"
                min={0}
                max={100}
                value={value}
                onChange={onChange}
                placeholder="Pick a number (0-100)"
            />

            <button onClick={onSubmit} className="px-[8px] py-[16px]">Submit</button>
        </div>
    )
    
}

export default PlayerInput;
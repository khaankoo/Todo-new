const AddTask = () => {
    return (
        <div className="h-96 w-72 bg-slate-800 p-2">
            <div className="h-screen w-screen"></div>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Description"/>
            <select name="" id="">
                <option value="">High</option>
                <option value="">Medium</option>
                <option value="">Low</option>
            </select>
            <button>Submit</button>
        </div>
    )
}

export default AddTask
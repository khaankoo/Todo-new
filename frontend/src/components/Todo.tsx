import Menu from "@/images/Menu";
import Plus from "@/images/Plus";

const Todo = () => {
    return (
        <div className="flex flex-col w-72 p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">To do</h1>
                <Menu />
            </div>
            <button className="flex items-center p-1 w-full bg-white gap-3 justify-center rounded-md">Add Task <Plus /></button>
        </div>
    )
}

export default Todo
import React,{useState} from "react"

function AddTransaction(){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    return(
        <form>
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="number" placeholder="Amount" value={amount}/>

        </form>
    )
}

export default AddTransaction
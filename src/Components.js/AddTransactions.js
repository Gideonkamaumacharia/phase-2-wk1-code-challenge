import React,{useState} from "react"

function AddTransaction(){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [submittedForms, setSubmittedForms] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const newForm = {date, description, category, amount}
        setSubmittedForms([...submittedForms, newForm])
        setDate('')
        setDescription('')
        setCategory('')
        setAmount('')

    }

    return(
        <form  onSubmit={handleSubmit}>
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="number" placeholder="Amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <button type="submit">Add Transactions</button>


        </form>
    )
}

export default AddTransaction
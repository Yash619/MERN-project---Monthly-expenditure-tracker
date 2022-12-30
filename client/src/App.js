import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/transaction",{
      method: "POST",
      body: form,
    });
  }
  function handleInput(e){
    setForm({...form,[e.target.name]:e.target.value});
  }
  return <div>
     <form onSubmit={handleSubmit}>
      <input 
        type="number"  
        name="amount"
        value = {form.amount}
        onChange={handleInput}
        placeholder="Enter transaction amout"
        />
      <input 
        type="description" 
        name = "description"
        value = {form.description}
        onChange={handleInput}
        placeholder="Enter transaction details"/>
      <input 
        type="date"
        name = "date"
        value = {form.date}
        onChange={handleInput}
        />
      <button type="submit">Submit</button>
     </form>
    </div>;
}

export default App;

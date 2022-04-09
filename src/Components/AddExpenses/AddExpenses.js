import '../AddExpenses/AddExpenses.css'
import Expenses from '../Expenses/Expenses';
import { useState } from 'react';

const AddExpenses = (props) => {

    const [currentTitle, setTitle] = useState('');
    const [currentAmount, setAmount] = useState(0);

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountHandler = (event) =>{
        setAmount(Number(event.target.value));
    }

    const sendValues = {
        ExpenseTitle : currentTitle,
        ExpensePrice : currentAmount
    }

    const addExpensesHandler = () => {
        props.addExpense(sendValues)
    }


    return (
        <div  className='Form'>
            <input placeholder='Add Expense title' type='text' onChange={titleHandler}></input>
            <input placeholder='Add Expense amount' type='number' onChange={amountHandler}></input>
            <button onClick={addExpensesHandler}>Add Expense</button>
            {/* <button>Cancel</button> */}
        </div>

    )
}

export default AddExpenses;
import '../AddExpenses/AddExpenses.css'
import Expenses from '../Expenses/Expenses';
import { useState } from 'react';

const AddExpenses = (props) => {

    const [currentTitle, setTitle] = useState('');
    const [currentAmount, setAmount] = useState(0);
    const [currentForm, setForm] = useState(false)



    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountHandler = (event) => {
        setAmount(Number(event.target.value));
    }

    const sendValues = {
        ExpenseTitle: currentTitle,
        ExpensePrice: currentAmount
    }

    const addExpensesHandler = () => {
        props.addExpense(sendValues)
        setForm(false)
    }

    const formForButtonHandler = () => {
        setForm(true);
    }
    const cancelExpensesHandler = () => {
            setForm(false)
    }

    const buttonForm = <button onClick={formForButtonHandler} className='AddExpenseButton'>Add New Expense</button>

    const form = <div className='Form'>
        <input placeholder='Add Expense title' type='text' onChange={titleHandler}></input>
        <input placeholder='Add Expense amount' type='number' onChange={amountHandler}></input>
        <button onClick={addExpensesHandler}>Add Expense</button>
        <button onClick={cancelExpensesHandler}>Cancel</button>
    </div>


    return (!currentForm && buttonForm || currentForm && form)

}

export default AddExpenses;
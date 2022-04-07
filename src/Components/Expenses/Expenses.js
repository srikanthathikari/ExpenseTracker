import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ExpensesList from "../ExpensesList/ExpensesList";
import AddExpenses from "../AddExpenses/AddExpenses";
import "../Expenses/Expenses.css";
import { useState } from "react";

const Expenses = () => {

    const ExpenseData = [
      
    ]

    const [existingData, newData] = useState(ExpenseData);

    const addExpenseHandler = (getValues) => {
        newData( previousExpenses=>{
           return [getValues, ...previousExpenses ]
        });
    }

    return (
        <div className='ExpensesParent'>
            <HeaderTitle></HeaderTitle>
            <AddExpenses addExpense={addExpenseHandler}></AddExpenses>
            <ExpensesList data={existingData} />
        </div>
    )

}

export default Expenses;
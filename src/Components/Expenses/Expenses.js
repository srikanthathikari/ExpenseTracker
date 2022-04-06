import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ExpensesList from "../ExpensesList/ExpensesList";
import AddExpenses from "../AddExpenses/AddExpenses";
import "../Expenses/Expenses.css";

const Expenses = () => {

    const ExpenseData = [
        
    ]

    const addExpenseHandler = (getValues) =>{
       ExpenseData.push({getValues});
    }

    return (
        <div className = 'ExpensesParent'>
            <HeaderTitle></HeaderTitle>
            <AddExpenses addExpense = {addExpenseHandler}></AddExpenses>
            <ExpensesList data = {ExpenseData}/>
        </div>
    )

}

export default Expenses;
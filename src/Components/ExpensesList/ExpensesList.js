import Expenses from "../Expenses/Expenses"
import "./ExpensesList.css"

const ExpensesList = props => {

    return (
        <div className='ExpensesBoxParent'>
            {props.data.map((dataItem) => {
                return (
                    <div  className='ExpenseBox'>
                        <h4>{dataItem.ExpenseTitle}</h4>
                        <h4>{dataItem.ExpensePrice}$</h4>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ExpensesList;


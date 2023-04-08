import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);  
    }
    return (
        <div className="card">
            <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;
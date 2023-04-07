import './Expense.css';
import ExpenseDate from './ExpenseDate';

const Expense = (props) => {
    return (
        <div className='container'> 
            <ExpenseDate expenseDate={props.expenseDate} />
            <div className='details'>
                <h2 className='detail'>{props.expenseTitle}</h2>
                <div className='price'>${props.expensePrice}</div>
            </div>
        </div>
    )
}

export default Expense;
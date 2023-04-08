import './Expense.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';


const Expense = (props) => {
    const [title, setTitle] = useState(props.expenseTitle);

    const clickHandler = () => {
        setTitle("Hello man");
    }

    return (
        <div className='container'> 
            <ExpenseDate expenseDate={props.expenseDate} />
            <div className='details'>
                <h2 className='detail'>{props.expenseTitle}</h2>
                <div className='price'>${props.expensePrice}</div>
            </div>
            <button onClick={clickHandler}>Title Changed</button>
        </div>
    )
}

export default Expense;
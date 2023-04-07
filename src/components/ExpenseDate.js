import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.expenseDate.toLocaleString(('en-US'), {month: 'long'});
    const day = props.expenseDate.toLocaleString(('eb-US'), {day : '2-digit'});
    const year = props.expenseDate.getFullYear();
    return (
        <div className='date'>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
            
        </div>
    )
}

export default ExpenseDate;
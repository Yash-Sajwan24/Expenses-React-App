import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.expenseDate.toLocaleString(('en-US'), {month: 'long'});
    const day = props.expenseDate.toLocaleString(('eb-US'), {day : '2-digit'});
    const year = props.expenseDate.getFullYear();
    return (
        <div className='date'>
            <div className='monthday'>{month}</div>
            <div className='monthday day'>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (event) => {
        setFilterYear(event);
        props.onFilterChange(event);
    }
    return (
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>

    )
}

export default Expenses;
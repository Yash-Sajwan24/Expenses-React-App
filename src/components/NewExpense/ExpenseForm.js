import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    const [changeTitle, setchangeTitle] = useState('');
    const [changeAmount, setchangeAmount] = useState('');
    const [changeDate, setchangeDate] = useState('');

    // const [userInput , setUserInput] = useState({
    //     changeTitle: '',
    //     changeAmount : '',
    //     changeDate: '',
    // })

    const TitleHandler = (event) => {
        setchangeTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     changeTitle: event.target.value,
        // })


        // setUserInput((prevState) => {
        //     return {...prevState, changeTitle: event.target.value};
        // })
    }
    const AmountHandler = (event) => {
        setchangeAmount(event.target.value);
    }
    const DateHandler = (event) => {
        setchangeDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();//prevent the page from reloading after form submitted
        const expenseData = {
            title: changeTitle,
            price: changeAmount, 
            date: new Date(changeDate),
        };
        props.onSaveExpense(expenseData);

        setchangeAmount('');
        setchangeDate('');
        setchangeTitle('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="form" >
                <div className="fields">
                    <label >Title</label>
                    {/* value is used for clearing after submission */}
                    <input value={changeTitle}  onChange={TitleHandler} required className="if" type="text" />
                </div>
                <div className="fields">
                    <label>Amount</label>
                    <input value={changeAmount} onChange={AmountHandler} required  className="if" type="number" min="0.01" step="0.01" />
                </div>
                <div className="fields">
                    <label>Date</label>
                    <input  value={changeDate} className="if" onChange={DateHandler} required type="date" min="2019-01-01" max="2023-12-31" />
                </div>

                <div>
                    <button className="btn1" type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
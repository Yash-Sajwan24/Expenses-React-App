import './App.css';
import AllExpenses from './components/AllExpenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const DUMMY_EXPENSES = [
    {
        title: 'Car Insurance', 
        price: '267.8',
        date: new Date(2021, 1, 8),
    },
    {
        title: 'House Rental', 
        price: '500.8',
        date: new Date(2022, 5, 10),
    },
    {
        title: 'Healt Insurance', 
        price: '200.8',
        date: new Date(2023, 2, 12),
    }

];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const AddExpenseHandler = (addedExpense) => {
        // setExpenses([addedExpense, ...expenses]);
        setExpenses((prevExpenses) => {
            return [addedExpense, ...prevExpenses];
        });
    }

    return (
        <div>
            <h1 className='heading'>Expenses List</h1>
            < NewExpense onAddExpense={AddExpenseHandler}/>
            <AllExpenses items={expenses}/>
            
        </div>
    )
}

export default App;
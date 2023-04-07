import './App.css';
import Expense from './components/Expense';
import Card from './components/Card';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
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
        },
        {
            title: 'Healt Insurance', 
            price: '200.8',
            date: new Date(2023, 2, 12),
        }

    ];
    return (
        <div>
            <h1 className='heading'>Expenses List</h1>
            < NewExpense />
            <Card>
                <Expense expenseTitle={expenses[0].title} expensePrice={expenses[0].price}  expenseDate={expenses[0].date} />
                <Expense expenseTitle={expenses[1].title} expensePrice={expenses[1].price}  expenseDate={expenses[1].date} />
                <Expense expenseTitle={expenses[2].title} expensePrice={expenses[2].price}  expenseDate={expenses[2].date} />
            </Card>
            
        </div>
    )
}

export default App;
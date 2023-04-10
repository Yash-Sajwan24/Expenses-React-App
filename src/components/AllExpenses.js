import "./AllExpenses.css";
import Expenses from "./NewExpense/Expenses";
import Card from "./Card";
import {useState} from 'react';
import ExepensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const AllExpenses = (props) => {

  const [year, setYear] = useState('2020');//initial year

  const addedFilterHandler = (addedYear) => {
    setYear(addedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });


  return (
    <Card>
      {/* fliter by year */}
      <Expenses onFilterChange={addedFilterHandler} />

      <ExpensesChart expenses={filteredExpenses} />
      <ExepensesList items ={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No expenses are found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <Expense
          key={expense.id}//added this key so that the addtion is done productively
          expenseTitle={expense.title}
          expensePrice={expense.price}
          expenseDate={expense.date}
        />
      ))} */}


    </Card>
  );
};

export default AllExpenses;

import "./AllExpenses.css";
import Expenses from "./NewExpense/Expenses";
import Expense from "./Expense";
import Card from "./Card";
import {useState} from 'react';

const AllExpenses = (props) => {

  const [year, setYear] = useState('2020');//initial year

  const addedFilterHandler = (addedYear) => {
    setYear(addedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No expenses are found.</p>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <Expense
        key={expense.id}//added this key so that the addtion is done productively
        expenseTitle={expense.title}
        expensePrice={expense.price}
        expenseDate={expense.date}
      />
    ))
  }

  return (
    <Card>
      {/* fliter by year */}
      <Expenses onFilterChange={addedFilterHandler} />

      {expensesContent}
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

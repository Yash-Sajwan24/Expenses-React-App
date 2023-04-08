import "./AllExpenses.css";
import Expenses from "./NewExpense/Expenses";
import Expense from "./Expense";
import Card from "./Card";

const AllExpenses = (props) => {
  const addedFilterHandler = (addedYear) => {
    console.log(addedYear);
  };
  return (
    <Card>
      {/* fliter by year */}
      <Expenses onFilterChange={addedFilterHandler} />
      {props.items.map((expense) => (
        <Expense
          expenseTitle={expense.title}
          expensePrice={expense.price}
          expenseDate={expense.date}
        />
      ))}
    </Card>
  );
};

export default AllExpenses;

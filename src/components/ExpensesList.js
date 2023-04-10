import "./ExpensesList.css";
import Expense from "./Expense";

const ExepensesList = (props) => {
  if(props.items.length === 0) {
    return <p>No expenses are found.</p>;
  }

  return (
    <div>
      {props.items.map((expense) => (
        <Expense
          key={expense.id} //added this key so that the addtion is done productively
          expenseTitle={expense.title}
          expensePrice={expense.price}
          expenseDate={expense.date}
        />
      ))}
    </div>
  );
};

export default ExepensesList;

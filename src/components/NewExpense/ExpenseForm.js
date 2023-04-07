import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="form">
                <div className="fields">
                    <label >Title</label>
                    <input placeholder="Enter the Title" className="if" type="text" />
                </div>
                <div className="fields">
                    <label>Amount</label>
                    <input placeholder="Enter the Amount" className="if" type="number" min="0.01" step="0.01" />
                </div>
                <div className="fields">
                    <label>Date</label>
                    <input className="if" type="date" min="2019-01-01" max="2022-12-31" />
                </div>

                <div>
                    <button className="btn1" type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
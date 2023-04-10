import Charts from "./Charts/Charts";

const ExpensesChart = (props) => {

    const chartDataPoints = [
        {label : 'Jan', value:0},
        {label : 'Feb', value:0},
        {label : 'Apr', value:0},
        {label : 'Mar', value:0},
        {label : 'May', value:0},
        {label : 'Jun', value:0},
        {label : 'Jul', value:0},
        {label : 'Aug', value:0},
        {label : 'Sep', value:0},
        {label : 'Oct', value:0},
        {label : 'Nov', value:0},
        {label : 'Dec', value:0},
    ];
    console.log(chartDataPoints);

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();//starting at 0 -> January
        chartDataPoints[expenseMonth].value = parseInt(chartDataPoints[expenseMonth].value, 10) + parseInt(expense.price, 10) ;
        //parseInt to convert string to integer so that same month can add value 
        //parseInt(value, base)
    }

    return (
        <Charts dataPoints={chartDataPoints} />
    )
}

export default ExpensesChart;
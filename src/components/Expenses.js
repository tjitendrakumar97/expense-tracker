import Card from './Card';
import ExpenseItems from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React, {useState} from 'react';

function Expenses(props){

    const [enteredYear, setYear] = useState('2019');
    const changedYearHandler = (yearChanged) =>
    {
      setYear(yearChanged);
      //console.log(yearChanged);
    }

    const filteredExpenses = props.expenses.filter( expns =>
      {return expns.date.getFullYear().toString()===enteredYear;}
    );

    let expenseContent = <p>No expenses found!</p>;

    if (filteredExpenses.length > 0){
      expenseContent = filteredExpenses.map(exp => (<ExpenseItems key = {exp.id} title = {exp.title} amount = {exp.amount} date = {exp.date}/>));
    }

    return(
        <Card className='expenses'>
        <ExpenseFilter selected = {enteredYear} onChangedYear = {changedYearHandler}></ExpenseFilter>
        {expenseContent}
        </Card>
    )
}

export default Expenses;
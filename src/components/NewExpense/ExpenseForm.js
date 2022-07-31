import './ExpenseForm.css';
import React, {useState} from 'react';

function ExpenseForm(props){

    const [newTitle, setEnteredTitle] = useState('');
    const [newDate, setEnteredDate] = useState('');
    const [newAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);    
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        };

        //console.log(expenseData);
       props.onEnteredSavedFields(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    return <div className="new-expense__controls">
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <label>Expense Title</label>
                <input type="text" value = {newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" value={newDate} onChange={dateChangeHandler}></input>
            </div>
            <div className="new-expense__controls">
                <label>Expense Amount</label>
                <input type="text" value={newAmount} onChange={amountChangeHandler}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
}

export default ExpenseForm;
import './ExpenseItems.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, {useState} from 'react';

function ExpenseItems(props){

    // const [title, setTitle] = useState(props.title);
    // function clickHandler(){
    //     setTitle("Updated "+ title);
    // }
    // function removeHandler(){
    //     setTitle(props.title);
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className = 'expense-item__price'>{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Add Button</button>
            <button onClick={removeHandler}>Remove Button</button> */}
        </Card>
    )
}

export default ExpenseItems;
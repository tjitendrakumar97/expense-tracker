import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const enteredSavedFields = (enteredData) =>{
        const expenseData = 
        {...enteredData,
        id: Math.random().toString()
        };
        props.onEnteredData(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onEnteredSavedFields = {enteredSavedFields}></ExpenseForm>
    </div>
}

export default NewExpense;
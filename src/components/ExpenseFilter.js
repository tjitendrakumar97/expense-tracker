import './ExpenseFilter.css';

function ExpenseFilter(props){

    const yearChangeHandler = (event) =>{
        props.onChangedYear(event.target.value);
        console.log(props.selected);
    }

    return(
    <div className="expenses-filter">
        <div className = "expenses-filter__control">
            <label>Year</label>
            <select value = {props.selected} onChange={yearChangeHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
    );
}

export default ExpenseFilter;
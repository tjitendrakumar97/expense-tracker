import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

function App(props) {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [data, setData] = useState(expenses);

  const appEnteredData = (dataEntered) =>
  {
    console.log(dataEntered);
    setData((prevData) =>{
      console.log(prevData);
      return [dataEntered, ...prevData];
      //return prevData.push(dataEntered);
    });
    console.log(data);
    console.log(expenses);
  }

  return (
    <div>
    <NewExpense onEnteredData = {appEnteredData}></NewExpense>
    <Expenses expenses = {data}></Expenses>
    </div>
  );
}

export default App;

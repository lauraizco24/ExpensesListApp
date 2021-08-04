import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpensesItemBase from "./components/Expenses/ExpensesItemBase";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
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
    }
];
const App =() => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) =>{
            return [expense, ...prevExpenses];
        });
    };


    //-------*Asi era como se usaba el codigo en react antes de usar JSX*--------//
// return React.createElement('div',{},
//     React.createElement('h2',{},"Let's get started"),
//     React.createElement(ExpensesItemBase,{data:expenses}));
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpensesItemBase data={expenses}/>
        </div>
    );
}

export default App;

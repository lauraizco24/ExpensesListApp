import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesItemBase.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpensesItemBase(props) {
    const [enteredYear, setEnteredYear] = useState('2020');

    const selectedYearHandler = selectedYear => {
        setEnteredYear(selectedYear)
    };

    const filteredExpensesPerYear = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    });


    return (
        <li>

            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onSelectedYear={selectedYearHandler}/>
                <ExpensesChart expenses={filteredExpensesPerYear}/>
                <ExpensesList items={filteredExpensesPerYear}/>
            </Card>
        </li>
    )
        ;
}

export default ExpensesItemBase;
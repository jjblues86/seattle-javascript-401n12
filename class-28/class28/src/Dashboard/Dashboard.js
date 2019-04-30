import React from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.expenses = [];
    }
    renderExpenses = () => {
        return(
            <ul>
                {
                    this.state.expenses.map(currentExpense => {
                        return <li key={currentExpense.id}>
                            {currentExpense.title} : {currentExpense.price}
                        </li>
                    })
                }
            </ul>
        )

    };

    handleAddExpense = expense => {
        expense.id = Math.random();
        expense.createdOn = new Date();

        this.setState((previousState) => {
            return {
                expenses: [...previousState.expenses, expense],
            }
        });
    };

    render() {
        return(
            <div>
                <h2>Expense Dashboard</h2>
                { this.renderExpenses()}
                <ExpenseForm handleAddExpense={this.handleAddExpense}/>
            </div>
        );
    }
}


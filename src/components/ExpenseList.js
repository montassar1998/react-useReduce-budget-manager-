import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import my_css from './DepenseList.module.css'
const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);
	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<div className={my_css.ExpenseList}>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
						date={expense.date}
					/>
				))}
			</ul>
		</div>
	);
};

export default ExpenseList;

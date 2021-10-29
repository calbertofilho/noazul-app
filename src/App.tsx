import React from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './functions/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

function App() {
  const [list, setList] = React.useState<Item[]>(items);
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  React.useEffect(() => {
	setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  React.useEffect(() => {
	let incomeCount = 0;
	let expenseCount = 0;
	for(let i in filteredList) {
	  if(categories[filteredList[i].category].expense) {
		expenseCount += filteredList[i].value;
	  } else {
		incomeCount += filteredList[i].value;
	  }
	}
	setIncome(incomeCount);
	setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
	setCurrentMonth(newMonth)
  };

  const handleAddItem = (item: Item) => {
	let newList = [...list];
	newList.push(item);
	setList(newList);
  };

  return (
    <C.Container>
	  <C.Header>
	    <C.HeaderText>NoAzul</C.HeaderText>
		<C.HeaderSubText>Sistema Financeiro Pessoal</C.HeaderSubText>
	  </C.Header>

	  <C.Body>
	    <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense} />
	    <InputArea onAddItem={handleAddItem} />
	    <TableArea list={filteredList} />
	  </C.Body>
    </C.Container>
  );
}

export default App;

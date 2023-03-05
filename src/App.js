import ExpenseList from "./components/expenseList";
import Budget from "./components/budget";
import Remaining from "./components/remaining";
import SpentsoFar from "./components/spentsoFar";
import AddExpenseForm from "./components/addExpenseForm";
import { AppProvider } from "./contexts";
function App() {
  return (
    <AppProvider>
       <div className="main-container">
        <h1>My Budget Planner</h1>
      <div className="budget-detail-container">
         <Budget />
         <Remaining />
         <SpentsoFar />
      </div>
      <div>
        <h1>Expenses:</h1>
       <ExpenseList />
      </div>
      <div className="form-container">
       <AddExpenseForm />
      </div>      
    </div>
    </AppProvider>
  );
}

export default App;

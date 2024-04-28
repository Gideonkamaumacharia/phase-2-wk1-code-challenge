import AddTransactions from './AddTransactions';
import Header from "./Header"
import TransactionsTable from "./TransactionsTable"
import SearchBar from "./SearchBar"

const transactions = [
  {
    category: "Income", amount: 2000, description: "paycheks from Bob's Buggers"
  },
  {category: "movies", amount: 20, description: "entertainment"},
  {category: "chiplto", amount: 16, description: "food"}
]

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddTransactions category={transactions.category} amount={transactions.amount} description={transactions.description} date={transactions.date}/>
      <TransactionsTable category={transactions.category} amount={transactions.amount} description={transactions.description} date={transactions.date}/>
      
    </div>
  );
}

export default App;

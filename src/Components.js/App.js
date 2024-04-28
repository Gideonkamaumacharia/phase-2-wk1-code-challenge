import './App.css';
import Header from "./Header"

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
      
    </div>
  );
}

export default App;

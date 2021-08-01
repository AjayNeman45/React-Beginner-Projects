import './App.css';
import Balance from './components/Balance';
import Income from './components/Income';
import Expense from './components/Expense';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import GlobalStorage from './GlobalStorage';

function App()
{
  return (
    <GlobalStorage>
      <div>
        <div className="upper">
          <div className="left">
            <Balance />
          </div>
          <div className="right">
            <Income />
            <Expense />
          </div>
        </div>

        <div className="lower">
          <AddTransaction />
          <TransactionHistory />
        </div>
      </div>
      </GlobalStorage>
  );
}

export default App;

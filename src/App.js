import Form from './Form';
import Items from './Items';
import TodoFooter from './TodoFooter';
import CompletedItems from './CompletedItems';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import Attribution from './Attribution';
import CompletedBtn from './CompletedBtn';
import ActiveItems from './ActiveItems';

const App = () => {
  return (
    <main className="main">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="wrapper">
        <Header />
        <Form />
        <Items />
        <ActiveItems />
        <CompletedItems />
        <div className="grid">
          <CompletedBtn />
          <TodoFooter />
        </div>
      </div>
      <Attribution />
    </main>
  );
};

export default App;

import { useState } from 'react';
import { useGlobalContext } from './context';
import { toast } from 'react-toastify';
const Form = () => {
  const { addItem } = useGlobalContext();
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return toast.error('pls provide a value');
    addItem(newTodo);
    setNewTodo('');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        name="text"
        id=""
        placeholder="Create a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div
        className="todo__check"
        style={{ top: '-2.4rem', left: '1.2rem' }}
      ></div>
    </form>
  );
};
export default Form;

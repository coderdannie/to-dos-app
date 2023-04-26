import { useGlobalContext } from './context';

const TodoFooter = () => {
  const {
    removeAllTodo,
    handleCurrentItems,
    handleShowActiveItems,
    handleShowCompleted,
  } = useGlobalContext();
  return (
    <div
      className="todo__footer flex flex-jc-sb 
          flex-ai-c"
    >
      <button
        id="itemsBtn"
        className="todo__completed-list"
        onClick={handleCurrentItems}
      >
        All
      </button>
      <button
        id="itemsBtn"
        className="todo__completed-list"
        onClick={handleShowActiveItems}
      >
        Active
      </button>
      <button
        id="completedBtn"
        className="todo__completed-list"
        onClick={handleShowCompleted}
      >
        <i className="fa-solid fa-check"></i>
        Completed
      </button>
      <button
        id="btn-removeAll"
        className="todo__remove-all-btn"
        onClick={removeAllTodo}
      >
        <i className="fa-solid fa-trash"></i> Clear All
      </button>
    </div>
  );
};
export default TodoFooter;

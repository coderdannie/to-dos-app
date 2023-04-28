import { useGlobalContext } from './context';
const CompletedBtn = () => {
  const { items, comp, removeAllCompletedItems } = useGlobalContext();
  const length = items.length - comp.length;
  let item;
  if (length > 1) {
    item = `${length} items left`;
  } else {
    item = `${length} item left`;
  }
  return (
    <div
      className="todo__footer flex flex-jc-sb todo__footer-completed
          flex-ai-c"
      style={{ paddingTop: '1.2rem', paddingBottom: '1.2rem' }}
    >
      <p id="itemsBtn" className="todo__completed-list">
        {item}
      </p>
      <button
        id="completedBtn" 
        className="todo__completed-list"
        onClick={removeAllCompletedItems}
      >
        <i className="fa-solid fa-trash"></i>
        Clear Completed
      </button>
    </div>
  );
};
export default CompletedBtn;

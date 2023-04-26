import { useGlobalContext } from './context';
import './index.css';
const SingleItem = ({ item }) => {
  const { removeTodo, markAsCompleted, deleteCompleted } = useGlobalContext();
  const handleChange = () => {
    if (!item.completed) {
      markAsCompleted(item.id);
    } else {
      deleteCompleted(item.id);
    }
  };
  return (
    <div className="todo__list flex flex-jc-sb flex-ai-c">
      <div className="todo__wrapper  flex flex-ai-c">
        <div
          className={
            item.completed
              ? 'todo__check flex flex-jc-c active'
              : 'todo__check flex flex-jc-c'
          }
        >
          <input
            type="checkbox"
            checked={!item.completed}
            onChange={handleChange}
          />
          <i className="fa-solid fa-check checkbtn"></i>
        </div>
        <div
          className={item.completed ? 'date__active todo__date' : 'todo__date'}
        >
          <span className="todo__month">{item.month}</span>
          <span className="todo__day">{item.day}</span>
          <span className="todo__year"> {item.year} </span>
          <div className="todo__divider"></div>
        </div>
        <div className="todo__text ">
          <p className={item.completed ? 'completed-indicator' : 'undefined'}>
            {item.name}
          </p>
        </div>
      </div>
      <button className="todo__cancelbtn" onClick={() => removeTodo(item.id)}>
        <i className="todo__cancel-icon fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
export default SingleItem;

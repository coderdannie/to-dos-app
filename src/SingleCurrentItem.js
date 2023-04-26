import { useGlobalContext } from './context';

const SingleCurrentItem = ({ item }) => {
  const { removeTodo } = useGlobalContext();
  return (
    <div className="todo__list flex flex-jc-sb flex-ai-c" key={item.id}>
      <div className="todo__wrapper  flex flex-ai-c">
        <div className="todo__check flex flex-jc-c">
          <input type="checkbox" />
        </div>
        <div className="todo__date ">
          <span className="todo__month">{item.month}</span>
          <span className="todo__day">{item.day}</span>
          <span className="todo__year"> {item.year} </span>
          <div className="todo__divider"></div>
        </div>
        <div className="todo__text ">
          <p>{item.name}</p>
        </div>
      </div>
      <button className="todo__cancelbtn" onClick={() => removeTodo(item.id)}>
        <i className="todo__cancel-icon fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
export default SingleCurrentItem;

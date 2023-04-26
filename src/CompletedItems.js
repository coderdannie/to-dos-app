import CompletedEmpty from './CompletedEmpty';
import { useGlobalContext } from './context';

const CompletedItems = () => {
  const { showCompleted, comp } = useGlobalContext();
  if (comp.length === 0) {
    return <CompletedEmpty />;
  }
  return (
    <div id="completedTodoModal" className="todo__completed-modal">
      {showCompleted &&
        comp.map((item) => {
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
              <button className="todo__cancelbtn">
                <i className="fa-solid fa-check todo__cancel-icon"></i>
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default CompletedItems;

const CompletedEmpty = () => {
  return (
    <div id="completedTodoModal" className="todo__completed-modal">
      <div className="todo__empty-message flex flex-ai-c flex-jc-c">
        <i className="fa-solid fa-calendar-check"></i>
        Completed to-dos
      </div>
    </div>
  );
};
export default CompletedEmpty;

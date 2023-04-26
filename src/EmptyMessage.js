const EmptyMessage = () => {
  return (
    <div className="todo">
      <div className="todo__empty-message flex flex-ai-c flex-jc-c">
        <i className="fa-solid fa-calendar-check"></i>
        Active to-dos
      </div>
    </div>
  );
};
export default EmptyMessage;

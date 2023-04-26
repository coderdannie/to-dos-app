import EmptyMessage from './EmptyMessage';
import SingleCurrentItem from './SingleCurrentItem';
import { useGlobalContext } from './context';

const ActiveItems = () => {
  const { activeItems, activeItem } = useGlobalContext();
  if (activeItems.length === 0) {
    return <EmptyMessage />;
  } else {
    return (
      <div className="todo">
        {activeItem &&
          activeItems.map((item) => {
            return <SingleCurrentItem key={item.id} item={item} />;
          })}
      </div>
    );
  }
};
export default ActiveItems;

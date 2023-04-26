import { useGlobalContext } from './context';
import SingleItem from './SingleItem';

const Items = () => {
  const { items, currentItems } = useGlobalContext();
  if (items.length === 0) {
    return '';
  } else {
    return (
      <div className="todo">
        {currentItems &&
          items.map((item) => {
            return <SingleItem key={item.id} item={item} />;
          })}
      </div>
    );
  }
};
export default Items;

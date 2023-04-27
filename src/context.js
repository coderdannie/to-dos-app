import { createContext, useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const AppContext = createContext();
const month = new Date().toLocaleString('en-US', {
  month: 'long',
});
const day = new Date().toLocaleString('en-US', {
  day: '2-digit',
});
const year = new Date().getFullYear();
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list - JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const setLocalStorage2 = (items) => {
  localStorage.setItem('lists', JSON.stringify(items));
};
const setLocalStorage3 = (items) => {
  localStorage.setItem('activeLists', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
const defaultList2 = JSON.parse(localStorage.getItem('lists') || '[]');
const defaultList3 = JSON.parse(localStorage.getItem('activeLists') || '[]');
export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(defaultList);
  const [comp, setComp] = useState(defaultList2);
  const [showCompleted, setShowCompleted] = useState(false);
  const [currentItems, setCurrentItems] = useState(true);
  const [activeItems, setActiveItems] = useState(defaultList3);
  const [activeItem, setActiveItem] = useState(false);
  const handleCurrentItems = () => {
    setShowCompleted(false);
    setCurrentItems(true);
    setActiveItem(false);
  };
  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
    setCurrentItems(false);
    setActiveItem(false);
  };
  const handleShowActiveItems = () => {
    setActiveItem(true);
    setCurrentItems(false);
    setShowCompleted(false);
  };
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
      day: day,
      year: year,
      month: month,
    };
    const newItems = [newItem, ...items];
    setItems(newItems);
    setActiveItems(newItems);
    setLocalStorage3(newItems);
    setLocalStorage(newItems);
    toast.success('todo added to current list');
  };
  const removeTodo = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setActiveItems(newItems);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('todo deleted');
  };
  const removeAllCompletedItems = () => {
    setComp([]);
    setLocalStorage2([]);
    toast.success('completed to-dos emptied');
  };
  const removeAllTodo = () => {
    setItems([]);
    setActiveItems([]);
    setLocalStorage3([]);
    setLocalStorage([]);
    setComp([]);
    setLocalStorage2([]);
    toast.success('No to-dos');
  };
  const deleteCompleted = function (id) {
    const index = comp.findIndex((el) => el.id === id);
    comp.splice(index, 1);
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: false };
        setLocalStorage2(comp);
        activeItems.push(newItem);
        setLocalStorage3(activeItems);
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Todo unmarked');
  };

  const markAsCompleted = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: true };
        comp.push(newItem);
        setLocalStorage2(comp);
        return newItem;
      }
      return item;
    });
    const activeNewItems = activeItems.filter((item) => item.id !== id);
    setActiveItems(activeNewItems);
    setLocalStorage3(activeNewItems);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Todo completed');
  };

  return (
    <AppContext.Provider
      value={{
        items,
        removeAllTodo,
        removeTodo,
        markAsCompleted,
        addItem,
        handleShowCompleted,
        showCompleted,
        currentItems,
        handleCurrentItems,
        comp,
        deleteCompleted,
        activeItems,
        activeItem,
        handleShowActiveItems,
        removeAllCompletedItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

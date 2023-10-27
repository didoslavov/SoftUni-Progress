import { useSelector } from 'react-redux';

import ListItemAttributes from '../ListItemAttributes/ListItemAttributes.jsx';
import ListActionIcons from '../ListActionIcons/ListActionIcons.jsx';
import { ListsTypes } from '../../shared/propTypes.js';

const TodoList = ({ handleSubmit, register, onAddItem, items, handleGoBack, handleClickDelete, handleCheckItem }) => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="todo-list-container">
            <img src="/todo-list.jpg" alt="list image" className="list-image" />
            <div className="list-container">
                <h2 className="welcome-list">TODO List</h2>
                <div className="form-container">
                    {user && (
                        <form className="todo-form-list" onSubmit={handleSubmit(onAddItem)}>
                            <label className="list-form-label">
                                <span>Todo</span>
                            </label>
                            <input type="text" className="input todo-item-input" {...register('text')} />
                            <input type="submit" className="submit button list-submit" value={'Add todo'} />
                        </form>
                    )}
                    <h4>Items</h4>
                    <ul className="lists">
                        {items.length ? (
                            items.map((item) => (
                                <li className="list" key={item._id}>
                                    <span className="list-span-name">{item.text}</span>
                                    {user && <ListItemAttributes handleCheckItem={handleCheckItem} itemId={item._id} />}
                                </li>
                            ))
                        ) : (
                            <p>No items</p>
                        )}
                    </ul>
                </div>
            </div>
            <ListActionIcons handleGoBack={handleGoBack} handleClickDelete={handleClickDelete} user={user} />
        </div>
    );
};

TodoList.propTypes = ListsTypes;

export default TodoList;

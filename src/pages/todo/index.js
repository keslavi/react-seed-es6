// a little sophistry to make the index use the connected component for components with store connections

import todos from './todos';
import todo from './todo';

//ensuring index uses the connected component instead of unconnected
export const Todos = todos;
export const Todo = todo;

//no default export





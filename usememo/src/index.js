import ReactDOM from 'react-dom';
import { FilteredList } from './FilteredList';

const people = [
  { name: 'James', age: 15, id: 1 },
  { name: 'Lebron', age: 31, id: 2 },
  { name: 'Paul', age: 17, id: 3 },
  { name: 'Kobe', age: 56, id: 4 },
  { name: 'Derrik', age: 68, id: 5 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilteredList people={people} />)

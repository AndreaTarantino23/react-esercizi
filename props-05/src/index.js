import ReactDOM from 'react-dom';
import { Welcome } from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name={<strong>Gabriele</strong>} age={38} />)

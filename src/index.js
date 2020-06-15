import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.css';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();

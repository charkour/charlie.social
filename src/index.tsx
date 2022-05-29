/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { App } from './components';

render(() => <App />, document.getElementById('root') as HTMLElement);

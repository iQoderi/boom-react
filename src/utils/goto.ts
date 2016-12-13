import {hashHistory} from 'react-router';

const goto = (path: string): void=> {
    hashHistory.push(path);
}

export default goto;

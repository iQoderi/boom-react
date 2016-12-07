require('normalize.css/normalize.css');
import React,{Component} from 'react';
import Loding from './plugins/loading';
import Tip from './plugins/tip';

class AppComponent extends Component {
  render() {
    return (
      <div>
        {/*<Loding/>*/}
        <Tip/>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

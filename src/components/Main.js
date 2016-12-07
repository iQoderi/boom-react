require('normalize.css/normalize.css');
import React,{Component} from 'react';
import Loding from './plugins/loading';

class AppComponent extends Component {
  render() {
    return (
      <div>
        {/*<Loding/>*/}
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

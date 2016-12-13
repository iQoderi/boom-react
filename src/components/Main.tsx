/**
 * Created by qoder on 16/12/12.
 */
///<reference path='../../typings/modules/react/index.d.ts'/>
import * as React from 'react';
import Loding from './plugins/loading/index.ts';
import Tip from './plugins/tip/index.ts';
import DevTools from 'mobx-react-devtools';

class AppComponent extends React.Component<any,any> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="vh">
        {this.props.children}
        <DevTools/>
      </div>
    );
  }
}

export default AppComponent;

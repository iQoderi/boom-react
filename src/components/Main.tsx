/**
 * Created by qoder on 16/12/12.
 */
///<reference path='../../typings/modules/react/index.d.ts'/>
import * as React from 'react';
import Loding from './plugins/loading/index.ts';
import Tip from './plugins/tip/index.ts';

class AppComponent extends React.Component<any,any> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="vh">
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

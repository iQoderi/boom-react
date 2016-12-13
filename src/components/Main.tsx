/**
 * Created by qoder on 16/12/12.
 */
///<reference path='../../typings/modules/react/index.d.ts'/>
import * as React from 'react';
import {observer, inject} from 'mobx-react';
import Loding from './plugins/loading/index';
import Tip from './plugins/tip/index';
import DevTools from 'mobx-react-devtools';

@inject('UIStore')
@observer
class AppComponent extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {UIStore}=this.props;
    return (
      <div className="vh">
        <Tip tip={UIStore.tip}/>
        {this.props.children}
        <DevTools/>
      </div>
    );
  }
}

export default AppComponent;

/**
 * Created by qoder on 16/12/12.
 */
import * as React from 'react';
import Loding from './plugins/loading/index.ts';
import Tip from './plugins/tip/index.ts';


class AppComponent extends React.Component<any,any> {
  constructor(props:any){
    super(props);
  }
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

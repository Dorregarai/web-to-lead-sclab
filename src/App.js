import React, { Component } from 'react';
import BrandBand from '@salesforce/design-system-react/components/brand-band';
import Address from './Components/Address';
import Customer from './Components/Customer'

class App extends Component {
  render() {
    return (
        <div>
          <BrandBand className="slds-align_absolute-center">
            <Address />
            <Customer isActive={true} />
          </BrandBand>
        </div>
    );
  }
}

export default App;

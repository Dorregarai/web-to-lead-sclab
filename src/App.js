import React, { Component } from 'react';
import BrandBand from "@salesforce/design-system-react/components/brand-band";
import Address from "./Components/Address";

class App extends Component {
  render() {
    return (
        <div>
          <BrandBand className="slds-align_absolute-center">
            <Address />
          </BrandBand>
        </div>
    );
  }
}

export default App;

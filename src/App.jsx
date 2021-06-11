import React, { useState } from 'react';
import BrandBand from '@salesforce/design-system-react/components/brand-band';
import Address from './Components/Address';
import Customer from './Components/Customer';
import Check from './Components/Check';

export default function App() {
  const [ isCustomerActive, setIsCustomerActive ] = useState(true);
  const [ isAddressActive, setIsAddressActive ] = useState(false);
  const [ isCheckActive, setIsCheckActive ] = useState(false);
  const [ data, setData ] = useState({});

  return (
      <div>
        <BrandBand className="slds-align_absolute-center">
          <Customer
            isCustomerActive={isCustomerActive}
            setIsAddressActive={setIsAddressActive}
            setIsCustomerActive={setIsCustomerActive}
            data={data}
            setData={setData}
          />

          <Address
            setIsCustomerActive={setIsCustomerActive}
            setIsAddressActive={setIsAddressActive}
            isAddressActive={isAddressActive}
            setIsCheckActive={setIsCheckActive}
            data={data}
            setData={setData}
          />

          <Check
            isCheckActive={isCheckActive}
            setIsAddressActive={setIsAddressActive}
            setIsCheckActive={setIsCheckActive}
            data={data}
          />
        </BrandBand>
      </div>
  );
}

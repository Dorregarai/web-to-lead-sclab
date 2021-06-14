import React, { useState } from "react";
import Input from "@salesforce/design-system-react/components/input";
import Button from "@salesforce/design-system-react/components/button";
import Checkbox from '@salesforce/design-system-react/components/checkbox';

export default function Address(props) {
    const [check, setCheck] = useState(false);

    const handlePrevClick = () => {
        props.setIsAddressActive(false);
        props.setIsCustomerActive(true);
    }

    const handleNextClick = () => {
        props.setIsCheckActive(true);
        props.setIsAddressActive(false);
    }

    const handleCheckChange = () => {
        setCheck(!check);
        console.log(check);
    }

    const handleBCountryChange = (event) => {
        props.setData({ ...props.data, 'bCountry': event.target.value });
    }

    const handleBStateChange = (event) => {
        props.setData({ ...props.data, 'bState': event.target.value });
    }

    const handleBZipChange = (event) => {
        props.setData({ ...props.data, 'bZip': event.target.value });
    }
    
    const handleBCityChange = (event) => {
        props.setData({ ...props.data, 'bCity': event.target.value });
    }
    
    const handleBStreetChange = (event) => {
        props.setData({ ...props.data, 'bStreet': event.target.value });
    }

    if(props.isAddressActive) {
        return(
                <div className="slds-box slds-theme_default slds-size_4-of-12">
                    <h3 className="slds-text-heading_large slds-truncate slds-p-bottom--large">Address Information</h3>
                    <form onSubmit={handleNextClick}>
                        <Input label="Billing Country" defaultValue={props.data.bCountry} required onChange={handleBCountryChange} />
                        <Input label="Billing State / Province" defaultValue={props.data.bState} required onChange={handleBStateChange} />
                        <Input label="Billing Zip / Postal Code" defaultValue={props.data.bZip} type="number " required onChange={handleBZipChange} />
                        <Input label="Billing City" defaultValue={props.data.bCity} required onChange={handleBCityChange} />
                        <Input label="Billing Street" defaultValue={props.data.bStreet} required onChange={handleBStreetChange} />
                        <Checkbox
							assistiveText={{
								label: 'Add shiping address',
							}}
							id="checkbox-example"
							labels={{
								label: 'Default',
							}}
							onChange={handleCheckChange}
						/>

                        <div className="slds-p-top--large slds-float_right">
                            <Button label="Prev" variant="neutral" onClick={handlePrevClick} />
                            <Button label="Next" variant="brand" type="submit" />
                        </div>
                    </form>
                </div>
        )
    } else {
        return(<div></div>)
    }
}
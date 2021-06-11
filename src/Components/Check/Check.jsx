import React from "react";
import Button from "@salesforce/design-system-react/components/button";
import ActionForm from '../ActionForm';

export default function Check(props) {
    const handlePrevClick = () => {
        props.setIsCheckActive(false);
        props.setIsAddressActive(true);
    }

    const handleFinishClick = () => {
        //  https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8
        console.log(props.data);
    }

    if(props.isCheckActive) {
        return(
            <div className="slds-box slds-theme_default slds-size_4-of-12">
                    <h3 className="slds-text-heading_large slds-truncate slds-p-bottom--large">Check & Submit</h3>
                <div>

                    <table>
                        <tbody>
                        <tr>
                            <td>Company name</td>
                            <td>{props.data.cName}</td>
                        </tr>
                        <tr>
                            <td>Company site</td>
                            <td>{props.data.cSite}</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>{props.data.fName}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{props.data.lName}</td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>{props.data.Birthday}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{props.data.Email}</td>
                        </tr>
                        <tr>
                            <td>Billing Country</td>
                            <td>{props.data.bCountry}</td>
                        </tr>
                        <tr>
                            <td>Billing State / Province</td>
                            <td>{props.data.bState}</td>
                        </tr>
                        <tr>
                            <td>Billing Zip / Postal Code</td>
                            <td>{props.data.bZip}</td>
                        </tr>
                        <tr>
                            <td>Billing City</td>
                            <td>{props.data.bCity}</td>
                        </tr>
                        <tr>
                            <td>Billing Street</td>
                            <td>{props.data.bStreet}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="slds-p-top--large slds-float_right">
                        <Button label="Prev" variant="neutral" onClick={handlePrevClick} />
                        <Button label="Submit" variant="brand" onClick={handleFinishClick} />
                    </div>
                </div>

                <ActionForm data={props.data} />

            </div>
        )
    } else {
        return(<div></div>)
    }
}
import React from "react";
import Button from "@salesforce/design-system-react/components/button";

export default function Check(props) {
    const handlePrevClick = () => {
        props.setIsCheckActive(false);
        props.setIsAddressActive(true);
    }

    const handleFinishClick = () => {
        console.log(ren);
    }

    let ren = [];

    for (const [key, value] of Object.entries(props.data)) {
        ren.push(<div key={key}>{key} : {value}</div>);
    }

    if(props.isCheckActive) {
        return(
            <div className="slds-box slds-theme_default slds-size_4-of-12">
                    <h3 className="slds-text-heading_large slds-truncate slds-p-bottom--large">Check & Submit</h3>
                <div>

                    {ren}

                    <div className="slds-p-top--large slds-float_right">
                        <Button label="Prev" variant="neutral" onClick={handlePrevClick} />
                        <Button label="Submit" variant="brand" onClick={handleFinishClick} />
                    </div>
                </div>
            </div>
        )
    } else {
        return(<div></div>)
    }
}
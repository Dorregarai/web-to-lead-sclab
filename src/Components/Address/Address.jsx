import React from "react";
import Input from "@salesforce/design-system-react/components/input";
import Button from "@salesforce/design-system-react/components/button";

export default function Address() {
    return(
            <div className="slds-box slds-theme_default slds-size_4-of-12">
                <h3 className="slds-text-heading_large slds-truncate slds-p-bottom--large">Address Information</h3>
                <div>
                    <Input label="Company name" required={true} />
                    <Input label="Company site" />
                    <Input label="First name" required={true} />
                    <Input label="Last name" required={true} />
                    <Input label="Birthday" required={true} />
                    <Input label="Email" required={true} />
                    <div className="slds-p-top--large slds-float_right">
                        <Button label="Next" variant="brand" />
                    </div>
                </div>
            </div>
    )
}
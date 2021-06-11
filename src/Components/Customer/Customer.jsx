import React from "react";
import Input from "@salesforce/design-system-react/components/input";
import Button from "@salesforce/design-system-react/components/button";
import Datepicker from '@salesforce/design-system-react/components/date-picker';
import moment from 'moment';

export default function Customer(props) {
    const handleNextClick = () => {
        props.setIsCustomerActive(false);
        props.setIsAddressActive(true);
    }

    const handleNameChange = (event) => {
        props.setData({ ...props.data, 'cName': event.target.value });
    }

    const handleSiteChange = (event) => {
        props.setData({ ...props.data, 'cSite': event.target.value });
    }

    const handleFNameChange = (event) => {
        props.setData({ ...props.data, 'fName': event.target.value });
    }
    
    const handleLNameChange = (event) => {
        props.setData({ ...props.data, 'lName': event.target.value });
    }
    
    const handleBirthdayChange = (event, data) => {
        props.setData({ ...props.data, 'Birthday': data.formattedDate });
    }

    const handleEmailChange = (event) => {
        props.setData({ ...props.data, 'Email': event.target.value });
    }

    if(props.isCustomerActive) {
        return (
            <div className="slds-box slds-theme_default slds-size_4-of-12">
                    <h3 className="slds-text-heading_large slds-truncate slds-p-bottom--large">Customer Information</h3>
                    <form onSubmit={handleNextClick}>
                        <Input label="Company name" defaultValue={props.data.cName} required onChange={handleNameChange} />
                        <Input label="Company site" defaultValue={props.data.cSite} type="url" onChange={handleSiteChange} />
                        <Input label="First name" defaultValue={props.data.fName} required onChange={handleFNameChange} />
                        <Input label="Last name" defaultValue={props.data.lName} required onChange={handleLNameChange} />
                        
                        <Datepicker
                            label="Birthday" required
                            onChange={(event, data) => {
                                handleBirthdayChange(event, data);

                                if (props.action) {
                                    const dataAsArray = Object.keys(data).map((key) => data[key]);
                                    props.action('onChange')(event, data, ...dataAsArray);
                                } 
                            }}
                            onCalendarFocus={(event, data) => {
                                if (props.action) {
                                    const dataAsArray = Object.keys(data).map((key) => data[key]);
                                    props.action('onCalendarFocus')(event, data, ...dataAsArray);
                                }
                            }}
                            formatter={(date) => {
                                return date ? moment(date).format('YYYY-MM-DD') : '';
                            }} 
                            parser={(dateString) => {
                                return moment(dateString, 'MM-DD-YYYY').toDate();
                            }}
                            value={moment(props.data.Birthday).toDate()}
                        />

                        <Input label="Email" type="email" defaultValue={props.data.Email} required onChange={handleEmailChange} />

                        <div className="slds-p-top--large slds-float_right">
                            <Button label="Next" variant="brand" type="submit" />
                        </div>
                    </form>
                </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
import React, {useState} from "react";
import Button from "@salesforce/design-system-react/components/button";
import ReCAPTCHA from "react-recaptcha";

export default function Check(props) {
    const [ isVerified, setIsVerified ] = useState(false);

    const handlePrevClick = () => {
        props.setIsCheckActive(false);
        props.setIsAddressActive(true);
    }

    const handleFinishClick = () => {
        if(isVerified) {
            document.getElementById('form').submit();
        } else {
            alert('I guess you are robot? Check reCAPTCHA please');
        }
    }

    const onReCaptchaLoad = () => {
        console.log('captcha loaded!');
    }

    const verifyCallback = () => {
        setIsVerified(true);
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

                            <br />

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

                            <br />

                            <tr>
                                <td>Shipping Country</td>
                                <td>{props.data.sCountry}</td>
                            </tr>
                            <tr>
                                <td>Shipping State / Province</td>
                                <td>{props.data.sState}</td>
                            </tr>
                            <tr>
                                <td>Shipping Zip / Postal Code</td>
                                <td>{props.data.sZip}</td>
                            </tr>
                            <tr>
                                <td>Shipping City</td>
                                <td>{props.data.sCity}</td>
                            </tr>
                            <tr>
                                <td>Shipping Street</td>
                                <td>{props.data.sStreet}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="slds-p-top--large slds-float_right">
                        <Button label="Prev" variant="neutral" onClick={handlePrevClick} />
                        <Button label="Submit" variant="brand" onClick={handleFinishClick} />
                    </div>
                </div>
                
                <ReCAPTCHA
                    sitekey="6Le0RjQbAAAAAF_IZUVNv8rytwwGQ8atg4D-aHWX"
                    render="explicit"
                    onloadCallback={onReCaptchaLoad}
                    verifyCallback={verifyCallback}
                />

                <div style={{"display": "none"}}>
                        <form id="form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                            <input type="hidden" name="oid" value="00D5g000005IJxW" />
                            <input type="hidden" name="retURL" value="https://webtolead-dev-ed.lightning.force.com/lightning/page/home" />

                            <input value={props.data.cName} id="company" maxLength="40" name="company" size="20" type="text" />

                            <input value={props.data.cSite} id="url" maxLength="80" name="url" size="20" type="text" />

                            <input value={props.data.fName} id="first_name" maxLength="40" name="first_name" size="20" type="text" />

                            <input value={props.data.lName} id="last_name" maxLength="80" name="last_name" size="20" type="text" />

                            <input value={props.data.Birthday} id="00N5g00000DsdjE" name="00N5g00000DsdjE" size="12" type="text" />

                            <input value={props.data.Email} id="email" maxLength="80" name="email" size="20" type="text" />

                            <input value={props.data.bCountry} id="country" maxLength="40" name="country" size="20" type="text" />

                            <input value={props.data.bState} id="state" maxLength="20" name="state" size="20" type="text" />

                            <input value={props.data.bZip} id="zip" maxLength="20" name="zip" size="20" type="text" />

                            <input value={props.data.bCity} id="city" maxLength="40" name="city" size="20" type="text" />

                            <textarea value={props.data.bStreet} name="street" />


                            <input value={props.data.sCountry} id="00N5g00000DtAfk" maxLength="50" name="00N5g00000DtAfk" size="20" type="text" />

                            <input value={props.data.sState} id="00N5g00000DtAfp" maxLength="50" name="00N5g00000DtAfp" size="20" type="text" />

                            <input value={props.data.sZip} id="00N5g00000DtAfu" maxLength="50" name="00N5g00000DtAfu" size="20" type="text" />

                            <input value={props.data.sCity} id="00N5g00000DtAfv" maxLength="50" name="00N5g00000DtAfv" size="20" type="text" />

                            <input value={props.data.sStreet} id="00N5g00000DtAg4" maxLength="50" name="00N5g00000DtAg4" size="20" type="text" />

                        </form>
                    </div>

            </div>
        )
    } else {
        return(<div/>)
    }
}
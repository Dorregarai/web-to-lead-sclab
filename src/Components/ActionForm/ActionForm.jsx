import React from "react";

export default function ActionForm(props) {
    return(
        <form id="action-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" onSubmit={props.handleSubmit} method="POST">

            <input type="hidden" name="oid" value="00D5g000005IJxW" />
            <input type="hidden" name="retURL" value="http://google.com" />

            <input value={props.data.cName} id="company" maxLength="40" name="company" size="20" type="text" /><br/>

            <input value={props.data.cSite} id="url" maxLength="80" name="url" size="20" type="text" /><br/>

            <input value={props.data.fName} id="first_name" maxLength="40" name="first_name" size="20" type="text" /><br/>

            <input value={props.data.lName} id="last_name" maxLength="80" name="last_name" size="20" type="text" /><br/>

            <input value={props.data.Birthday} id="00N5g00000DsdjE" name="00N5g00000DsdjE" size="12" type="text" /><br/>

            <input value={props.data.Email} id="email" maxLength="80" name="email" size="20" type="text" /><br/>

            <input value={props.data.bCountry} id="country" maxLength="40" name="country" size="20" type="text" /><br/>

            <input value={props.data.bState} id="state" maxLength="20" name="state" size="20" type="text" /><br/>

            <input value={props.data.bZip} id="zip" maxLength="20" name="zip" size="20" type="text" /><br/>

            <input value={props.data.bCity} id="city" maxLength="40" name="city" size="20" type="text" /><br/>

            <textarea value={props.data.bStreet} name="street"></textarea><br/>

        </form>

    )
}
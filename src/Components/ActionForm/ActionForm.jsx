import React from "react";

export default function ActionForm(props) {
    return(
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

            <input type="hidden" name="oid" value="00D5g000005IJxW" />
            <input type="hidden" name="retURL" value="http://google.com" />

            <label for="company">Company</label><input value={props.data.cName} id="company" maxlength="40" name="company" size="20" type="text" /><br/>

            <label for="url">Website</label><input value={props.data.cSite} id="url" maxlength="80" name="url" size="20" type="text" /><br/>

            <label for="first_name">First Name</label><input value={props.data.fName} id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br/>

            <label for="last_name">Last Name</label><input value={props.data.lName} id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br/>

            Birthday:<span class="dateInput dateOnlyInput"><input value={props.data.Birthday} id="00N5g00000DsdjE" name="00N5g00000DsdjE" size="12" type="text" /></span><br/>

            <label for="email">Email</label><input value={props.data.Email} id="email" maxlength="80" name="email" size="20" type="text" /><br/>

            <label for="country">Country</label><input value={props.data.bCountry} id="country" maxlength="40" name="country" size="20" type="text" /><br/>

            <label for="state">State/Province</label><input value={props.data.bState} id="state" maxlength="20" name="state" size="20" type="text" /><br/>

            <label for="zip">Zip</label><input value={props.data.bZip} id="zip" maxlength="20" name="zip" size="20" type="text" /><br/>

            <label for="city">City</label><input value={props.data.bCity} id="city" maxlength="40" name="city" size="20" type="text" /><br/>

            <label for="street">Street</label><textarea value={props.data.bStreet} name="street"></textarea><br/>

            <input type="submit" name="submit" />

        </form>

    )
}
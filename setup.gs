/**
 * This setup function must be configured with your information, then run once to create script/user properties.
 * Afterwards, your values can be cleared for (nominal) security benefit.
 *
 * Required values to set are USERNAME, TOKEN, CUSTOMER_SHORTNAME.
 *
 * USERNAME - The StarRez username of a SecurityUser who will call the API to run the reports. I recommend creating a user for this script, to isolate permissions.
 * TOKEN - A web service token. See: https://support.starrez.com/hc/en-us/articles/208606766-Create-Token-for-REST-API-calls
 * CUSTOMER_SHORTNAME - The short name assigned to your organization by StarRez that appears before '.starrezhousing.com' in your URLs.
 *
 *
 * Note: The first time you attempt to access a Google Sheet, you will need to run from Google Scripts and authorize the request using the prompts.
 */
function setupScriptProperties() {
    "use strict";

    // Configurable variables
    const USERNAME = "";
    const TOKEN = "";
    const CUSTOMER_SHORTNAME = "";


    var scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperty("STARREZ_API_ENDPOINT", "https://" + CUSTOMER_SHORTNAME + ".starrezhousing.com/StarRezRest/");

    var userProperties = PropertiesService.getUserProperties();
    var credentials = Utilities.base64Encode(USERNAME + ":" + TOKEN, Utilities.Charset.UTF_8);
    userProperties.setProperty("STARREZ_CREDENTIALS", "Basic " + credentials);
}
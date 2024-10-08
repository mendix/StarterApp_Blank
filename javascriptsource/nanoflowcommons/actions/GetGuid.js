// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Get the Mendix Object GUID.
 * @param {MxObject} entityObject - This field is required.
 * @returns {Promise.<string>}
 */
async function GetGuid(entityObject) {
    // BEGIN USER CODE
    if (!entityObject) {
        return Promise.reject(new Error("Input parameter 'Entity object' is required."));
    }
    return Promise.resolve(entityObject.getGuid());
    // END USER CODE
}

export { GetGuid };

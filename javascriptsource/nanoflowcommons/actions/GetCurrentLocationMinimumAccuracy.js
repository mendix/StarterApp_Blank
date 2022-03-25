// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * This action retrieves the current geographical position of a user/device with a minimum accuracy as parameter. If a position is not acquired with minimum accuracy within a specific timeout it will retrieve the last most precise location.
 * 
 * Since this can compromise privacy, the position is not available unless the user approves it. The web browser will request the permission at the first time the location is requested. When denied by the user it will not prompt a second time.
 * 
 * On hybrid and native platforms the permission can be requested with the `RequestLocationPermission` action.
 * 
 * Best practices:
 * https://developers.google.com/web/fundamentals/native-hardware/user-location/
 * @param {Big} timeout - The maximum length of time (in milliseconds) the device is allowed to take in order to return a location. If set as empty, default value will be 30 second timeout.
 * @param {Big} maximumAge - The maximum age (in milliseconds) of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. By default the device will always return a cached position regardless of its age.
 * @param {boolean} highAccuracy - Use a higher accuracy method to determine the current location. Setting this to false saves battery life.
 * @param {Big} minimumAccuracy - The minimum accuracy to be received in meters. Less amount of meters, more precise is the location.
 * @returns {Promise.<MxObject>}
 */
export async function GetCurrentLocationMinimumAccuracy(timeout, maximumAge, highAccuracy, minimumAccuracy) {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
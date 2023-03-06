import CustomAPIError from "./custom-error.js";
import { StatusCodes } from "http-status-codes";

class AuthorizationFailure extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default AuthorizationFailure;

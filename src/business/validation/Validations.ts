import { CustomError } from "../../error/BaseError";

export class Validations {
  emailIsValid(email: string): void {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      throw new CustomError(404, "Incorrect email format");
    }
  }
}

export default new Validations()
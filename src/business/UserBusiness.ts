import { UserInputDTO, LoginInputDTO } from "../model/User";
import userDatabase from "../data/UserDatabase";
import idGenerator from "../services/IdGenerator";
import hashManager from "../services/HashManager";
import authenticator from "../services/Authenticator";
import { CustomError } from "../error/BaseError";

export class UserBusiness {
  async createUser(user: UserInputDTO) {
    if (!user.role || !user.name || !user.password || !user.role) {
      throw new CustomError(
        400,
        "'name', 'email', 'password' and 'role' are required"
      );
    }

    if (!["NORMAL", "ADMIN"].includes(user.role.toUpperCase())) {
      throw new CustomError(400, "role can only be 'NORMAL' or 'ADMIN'");
    }

    const id = idGenerator.generate();

    const hashPassword = await hashManager.hash(user.password);

    await userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.role
    );

    const accessToken = authenticator.generateToken({ id, role: user.role });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    if (!user.email || !user.password) {
      throw new CustomError(400, "'name' and 'password' are required");
    }

    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );
    if (!hashCompare) {
      throw new CustomError(400, "Incorrect password!");
    }

    const accessToken = authenticator.generateToken({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    return accessToken;
  }
}

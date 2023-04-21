import { ILoginFormData } from "./iLoginFormData";
import { IRegisterFormData } from "./iRegisterFormData";
import { IUser } from "./iUser";

export interface IUserContext {
  user: IUser | null;
  logIn: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  logOut: () => void;
}

import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
export declare class ProfileCreateWithoutCountryInput {
    id?: string | undefined;
    phone: string;
    address: string;
    image: string;
    gender: string;
    user: UserCreateNestedOneWithoutProfileInput;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

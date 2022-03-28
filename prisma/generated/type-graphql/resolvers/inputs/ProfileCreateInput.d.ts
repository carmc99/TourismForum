import { CountryCreateNestedOneWithoutProfilesInput } from "../inputs/CountryCreateNestedOneWithoutProfilesInput";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
export declare class ProfileCreateInput {
    id?: string | undefined;
    phone: string;
    address: string;
    image: string;
    gender: string;
    user: UserCreateNestedOneWithoutProfileInput;
    country: CountryCreateNestedOneWithoutProfilesInput;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

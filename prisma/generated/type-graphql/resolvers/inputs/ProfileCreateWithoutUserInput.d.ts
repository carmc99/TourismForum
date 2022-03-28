import { CountryCreateNestedOneWithoutProfilesInput } from "../inputs/CountryCreateNestedOneWithoutProfilesInput";
export declare class ProfileCreateWithoutUserInput {
    id?: string | undefined;
    phone: string;
    address: string;
    image: string;
    gender: string;
    country: CountryCreateNestedOneWithoutProfilesInput;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

import { LocationCreateNestedManyWithoutCountryInput } from "../inputs/LocationCreateNestedManyWithoutCountryInput";
export declare class CountryCreateWithoutProfilesInput {
    id?: string | undefined;
    name: string;
    locations?: LocationCreateNestedManyWithoutCountryInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

import { ProfileCreateNestedManyWithoutCountryInput } from "../inputs/ProfileCreateNestedManyWithoutCountryInput";
export declare class CountryCreateWithoutLocationsInput {
    id?: string | undefined;
    name: string;
    profiles?: ProfileCreateNestedManyWithoutCountryInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

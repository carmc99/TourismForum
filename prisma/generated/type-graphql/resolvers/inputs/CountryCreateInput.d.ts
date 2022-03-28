import { LocationCreateNestedManyWithoutCountryInput } from "../inputs/LocationCreateNestedManyWithoutCountryInput";
import { ProfileCreateNestedManyWithoutCountryInput } from "../inputs/ProfileCreateNestedManyWithoutCountryInput";
export declare class CountryCreateInput {
    id?: string | undefined;
    name: string;
    profiles?: ProfileCreateNestedManyWithoutCountryInput | undefined;
    locations?: LocationCreateNestedManyWithoutCountryInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

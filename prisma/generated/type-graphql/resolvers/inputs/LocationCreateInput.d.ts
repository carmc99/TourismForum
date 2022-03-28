import { CountryCreateNestedOneWithoutLocationsInput } from "../inputs/CountryCreateNestedOneWithoutLocationsInput";
import { PostCreateNestedManyWithoutLocationInput } from "../inputs/PostCreateNestedManyWithoutLocationInput";
export declare class LocationCreateInput {
    id?: string | undefined;
    name: string;
    posts?: PostCreateNestedManyWithoutLocationInput | undefined;
    country: CountryCreateNestedOneWithoutLocationsInput;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

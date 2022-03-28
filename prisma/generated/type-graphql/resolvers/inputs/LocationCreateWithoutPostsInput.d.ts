import { CountryCreateNestedOneWithoutLocationsInput } from "../inputs/CountryCreateNestedOneWithoutLocationsInput";
export declare class LocationCreateWithoutPostsInput {
    id?: string | undefined;
    name: string;
    country: CountryCreateNestedOneWithoutLocationsInput;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

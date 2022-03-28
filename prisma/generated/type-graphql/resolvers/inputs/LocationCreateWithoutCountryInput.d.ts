import { PostCreateNestedManyWithoutLocationInput } from "../inputs/PostCreateNestedManyWithoutLocationInput";
export declare class LocationCreateWithoutCountryInput {
    id?: string | undefined;
    name: string;
    posts?: PostCreateNestedManyWithoutLocationInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

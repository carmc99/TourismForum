import { RoleCreateNestedManyWithoutPagesInput } from "../inputs/RoleCreateNestedManyWithoutPagesInput";
export declare class PagesCreateInput {
    id?: string | undefined;
    name: string;
    path: string;
    roles?: RoleCreateNestedManyWithoutPagesInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}

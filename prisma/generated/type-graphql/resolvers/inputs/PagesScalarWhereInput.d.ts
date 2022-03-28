import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PagesScalarWhereInput {
    AND?: PagesScalarWhereInput[] | undefined;
    OR?: PagesScalarWhereInput[] | undefined;
    NOT?: PagesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    path?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}

import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBiomeFilter } from "../inputs/EnumBiomeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    locationId?: StringFilter | undefined;
    biome?: EnumBiomeFilter | undefined;
    hotelId?: StringNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    image?: StringFilter | undefined;
    average_score?: IntFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}

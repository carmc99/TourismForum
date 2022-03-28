import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBiomeWithAggregatesFilter } from "../inputs/EnumBiomeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PostScalarWhereWithAggregatesInput {
    AND?: PostScalarWhereWithAggregatesInput[] | undefined;
    OR?: PostScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PostScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    locationId?: StringWithAggregatesFilter | undefined;
    biome?: EnumBiomeWithAggregatesFilter | undefined;
    hotelId?: StringNullableWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    average_score?: IntWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}

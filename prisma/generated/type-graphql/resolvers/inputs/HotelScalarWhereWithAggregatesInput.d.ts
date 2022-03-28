import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class HotelScalarWhereWithAggregatesInput {
    AND?: HotelScalarWhereWithAggregatesInput[] | undefined;
    OR?: HotelScalarWhereWithAggregatesInput[] | undefined;
    NOT?: HotelScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    price_per_night?: IntWithAggregatesFilter | undefined;
    lunch_included?: BoolWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}

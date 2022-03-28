import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class HotelWhereInput {
    AND?: HotelWhereInput[] | undefined;
    OR?: HotelWhereInput[] | undefined;
    NOT?: HotelWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    price_per_night?: IntFilter | undefined;
    lunch_included?: BoolFilter | undefined;
    image?: StringFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}

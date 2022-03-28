import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBiomeFilter } from "../inputs/EnumBiomeFilter";
import { HotelRelationFilter } from "../inputs/HotelRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    author?: UserRelationFilter | undefined;
    locationId?: StringFilter | undefined;
    location?: LocationRelationFilter | undefined;
    biome?: EnumBiomeFilter | undefined;
    hotelId?: StringNullableFilter | undefined;
    hotel?: HotelRelationFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    image?: StringFilter | undefined;
    average_score?: IntFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}

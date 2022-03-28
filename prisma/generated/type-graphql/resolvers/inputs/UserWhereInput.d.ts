import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    emailVerified?: DateTimeFilter | undefined;
    role?: RoleRelationFilter | undefined;
    roleId?: StringFilter | undefined;
    profile?: ProfileRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}

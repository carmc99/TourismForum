import { Pages } from "../../../models/Pages";
import { Role } from "../../../models/Role";
import { PagesRolesArgs } from "./args/PagesRolesArgs";
export declare class PagesRelationsResolver {
    roles(pages: Pages, ctx: any, args: PagesRolesArgs): Promise<Role[]>;
}

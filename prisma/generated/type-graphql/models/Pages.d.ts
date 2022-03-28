import { Role } from "../models/Role";
import { PagesCount } from "../resolvers/outputs/PagesCount";
export declare class Pages {
    id: string;
    name: string;
    path: string;
    roles?: Role[];
    created_at: Date;
    updated_at: Date;
    _count?: PagesCount | null;
}

import { Pages } from "../models/Pages";
import { User } from "../models/User";
import { RoleCount } from "../resolvers/outputs/RoleCount";
export declare class Role {
    id: string;
    name: string;
    users?: User[];
    pages?: Pages[];
    _count?: RoleCount | null;
}

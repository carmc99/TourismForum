import { ProfileCountAggregate } from "../outputs/ProfileCountAggregate";
import { ProfileMaxAggregate } from "../outputs/ProfileMaxAggregate";
import { ProfileMinAggregate } from "../outputs/ProfileMinAggregate";
export declare class ProfileGroupBy {
    id: string;
    phone: string;
    address: string;
    image: string;
    gender: string;
    countryId: string;
    userId: string;
    created_at: Date;
    updated_at: Date;
    _count: ProfileCountAggregate | null;
    _min: ProfileMinAggregate | null;
    _max: ProfileMaxAggregate | null;
}

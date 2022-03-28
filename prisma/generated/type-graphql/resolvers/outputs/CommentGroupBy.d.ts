import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";
export declare class CommentGroupBy {
    id: string;
    userId: string;
    postId: string;
    description: string;
    score: number;
    created_at: Date;
    updated_at: Date;
    _count: CommentCountAggregate | null;
    _avg: CommentAvgAggregate | null;
    _sum: CommentSumAggregate | null;
    _min: CommentMinAggregate | null;
    _max: CommentMaxAggregate | null;
}

import { GraphQLResolveInfo } from "graphql";
import { AggregateLocationArgs } from "./args/AggregateLocationArgs";
import { CreateLocationArgs } from "./args/CreateLocationArgs";
import { CreateManyLocationArgs } from "./args/CreateManyLocationArgs";
import { DeleteLocationArgs } from "./args/DeleteLocationArgs";
import { DeleteManyLocationArgs } from "./args/DeleteManyLocationArgs";
import { FindFirstLocationArgs } from "./args/FindFirstLocationArgs";
import { FindManyLocationArgs } from "./args/FindManyLocationArgs";
import { FindUniqueLocationArgs } from "./args/FindUniqueLocationArgs";
import { GroupByLocationArgs } from "./args/GroupByLocationArgs";
import { UpdateLocationArgs } from "./args/UpdateLocationArgs";
import { UpdateManyLocationArgs } from "./args/UpdateManyLocationArgs";
import { UpsertLocationArgs } from "./args/UpsertLocationArgs";
import { Location } from "../../../models/Location";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLocation } from "../../outputs/AggregateLocation";
import { LocationGroupBy } from "../../outputs/LocationGroupBy";
export declare class LocationCrudResolver {
    location(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLocationArgs): Promise<Location | null>;
    findFirstLocation(ctx: any, info: GraphQLResolveInfo, args: FindFirstLocationArgs): Promise<Location | null>;
    locations(ctx: any, info: GraphQLResolveInfo, args: FindManyLocationArgs): Promise<Location[]>;
    createLocation(ctx: any, info: GraphQLResolveInfo, args: CreateLocationArgs): Promise<Location>;
    createManyLocation(ctx: any, info: GraphQLResolveInfo, args: CreateManyLocationArgs): Promise<AffectedRowsOutput>;
    deleteLocation(ctx: any, info: GraphQLResolveInfo, args: DeleteLocationArgs): Promise<Location | null>;
    updateLocation(ctx: any, info: GraphQLResolveInfo, args: UpdateLocationArgs): Promise<Location | null>;
    deleteManyLocation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLocationArgs): Promise<AffectedRowsOutput>;
    updateManyLocation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLocationArgs): Promise<AffectedRowsOutput>;
    upsertLocation(ctx: any, info: GraphQLResolveInfo, args: UpsertLocationArgs): Promise<Location>;
    aggregateLocation(ctx: any, info: GraphQLResolveInfo, args: AggregateLocationArgs): Promise<AggregateLocation>;
    groupByLocation(ctx: any, info: GraphQLResolveInfo, args: GroupByLocationArgs): Promise<LocationGroupBy[]>;
}

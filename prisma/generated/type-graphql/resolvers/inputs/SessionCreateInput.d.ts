import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
    id?: string | undefined;
    expires: Date;
    sessionToken: string;
    user: UserCreateNestedOneWithoutSessionsInput;
}

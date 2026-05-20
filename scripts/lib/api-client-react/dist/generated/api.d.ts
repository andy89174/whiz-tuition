import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AdminGetUsersParams, AuthResponse, Bid, CreateBidRequest, CreateQuestionRequest, CreateReviewRequest, CreateSessionRequest, ErrorResponse, GetBidsParams, GetQuestionsParams, GetReviewsParams, GetSessionsParams, HealthStatus, LoginRequest, Notification, Question, RegisterRequest, Review, Session, StudentDashboard, SuspendUserRequest, TutorDashboard, TutorProfile, UpdateBidRequest, UpdateQuestionRequest, UpdateSessionRequest, UpdateTutorProfileRequest, UpdateUserRequest, User } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register a new user
 */
export declare const getRegisterUserUrl: () => string;
export declare const registerUser: (registerRequest: RegisterRequest, options?: RequestInit) => Promise<AuthResponse>;
export declare const getRegisterUserMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof registerUser>>, TError, {
        data: BodyType<RegisterRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof registerUser>>, TError, {
    data: BodyType<RegisterRequest>;
}, TContext>;
export type RegisterUserMutationResult = NonNullable<Awaited<ReturnType<typeof registerUser>>>;
export type RegisterUserMutationBody = BodyType<RegisterRequest>;
export type RegisterUserMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Register a new user
 */
export declare const useRegisterUser: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof registerUser>>, TError, {
        data: BodyType<RegisterRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof registerUser>>, TError, {
    data: BodyType<RegisterRequest>;
}, TContext>;
/**
 * @summary Login
 */
export declare const getLoginUserUrl: () => string;
export declare const loginUser: (loginRequest: LoginRequest, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginUserMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginUser>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof loginUser>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type LoginUserMutationResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>;
export type LoginUserMutationBody = BodyType<LoginRequest>;
export type LoginUserMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Login
 */
export declare const useLoginUser: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginUser>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof loginUser>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user by ID
 */
export declare const getGetUserUrl: (userId: number) => string;
export declare const getUser: (userId: number, options?: RequestInit) => Promise<User>;
export declare const getGetUserQueryKey: (userId: number) => readonly [`/api/users/${number}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<ErrorResponse>>(userId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get user by ID
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<ErrorResponse>>(userId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update user
 */
export declare const getUpdateUserUrl: (userId: number) => string;
export declare const updateUser: (userId: number, updateUserRequest: UpdateUserRequest, options?: RequestInit) => Promise<User>;
export declare const getUpdateUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        userId: number;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
    userId: number;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
export type UpdateUserMutationResult = NonNullable<Awaited<ReturnType<typeof updateUser>>>;
export type UpdateUserMutationBody = BodyType<UpdateUserRequest>;
export type UpdateUserMutationError = ErrorType<unknown>;
/**
 * @summary Update user
 */
export declare const useUpdateUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        userId: number;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateUser>>, TError, {
    userId: number;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
/**
 * @summary Get tutor profile
 */
export declare const getGetTutorProfileUrl: (tutorId: number) => string;
export declare const getTutorProfile: (tutorId: number, options?: RequestInit) => Promise<TutorProfile>;
export declare const getGetTutorProfileQueryKey: (tutorId: number) => readonly [`/api/tutor-profiles/${number}`];
export declare const getGetTutorProfileQueryOptions: <TData = Awaited<ReturnType<typeof getTutorProfile>>, TError = ErrorType<ErrorResponse>>(tutorId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTutorProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTutorProfile>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTutorProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getTutorProfile>>>;
export type GetTutorProfileQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get tutor profile
 */
export declare function useGetTutorProfile<TData = Awaited<ReturnType<typeof getTutorProfile>>, TError = ErrorType<ErrorResponse>>(tutorId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTutorProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update tutor profile
 */
export declare const getUpdateTutorProfileUrl: (tutorId: number) => string;
export declare const updateTutorProfile: (tutorId: number, updateTutorProfileRequest: UpdateTutorProfileRequest, options?: RequestInit) => Promise<TutorProfile>;
export declare const getUpdateTutorProfileMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTutorProfile>>, TError, {
        tutorId: number;
        data: BodyType<UpdateTutorProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTutorProfile>>, TError, {
    tutorId: number;
    data: BodyType<UpdateTutorProfileRequest>;
}, TContext>;
export type UpdateTutorProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateTutorProfile>>>;
export type UpdateTutorProfileMutationBody = BodyType<UpdateTutorProfileRequest>;
export type UpdateTutorProfileMutationError = ErrorType<unknown>;
/**
 * @summary Update tutor profile
 */
export declare const useUpdateTutorProfile: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTutorProfile>>, TError, {
        tutorId: number;
        data: BodyType<UpdateTutorProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTutorProfile>>, TError, {
    tutorId: number;
    data: BodyType<UpdateTutorProfileRequest>;
}, TContext>;
/**
 * @summary List questions
 */
export declare const getGetQuestionsUrl: (params?: GetQuestionsParams) => string;
export declare const getQuestions: (params?: GetQuestionsParams, options?: RequestInit) => Promise<Question[]>;
export declare const getGetQuestionsQueryKey: (params?: GetQuestionsParams) => readonly ["/api/questions", ...GetQuestionsParams[]];
export declare const getGetQuestionsQueryOptions: <TData = Awaited<ReturnType<typeof getQuestions>>, TError = ErrorType<unknown>>(params?: GetQuestionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQuestions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getQuestions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetQuestionsQueryResult = NonNullable<Awaited<ReturnType<typeof getQuestions>>>;
export type GetQuestionsQueryError = ErrorType<unknown>;
/**
 * @summary List questions
 */
export declare function useGetQuestions<TData = Awaited<ReturnType<typeof getQuestions>>, TError = ErrorType<unknown>>(params?: GetQuestionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQuestions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a question
 */
export declare const getCreateQuestionUrl: () => string;
export declare const createQuestion: (createQuestionRequest: CreateQuestionRequest, options?: RequestInit) => Promise<Question>;
export declare const getCreateQuestionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError, {
        data: BodyType<CreateQuestionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError, {
    data: BodyType<CreateQuestionRequest>;
}, TContext>;
export type CreateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof createQuestion>>>;
export type CreateQuestionMutationBody = BodyType<CreateQuestionRequest>;
export type CreateQuestionMutationError = ErrorType<unknown>;
/**
 * @summary Create a question
 */
export declare const useCreateQuestion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createQuestion>>, TError, {
        data: BodyType<CreateQuestionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createQuestion>>, TError, {
    data: BodyType<CreateQuestionRequest>;
}, TContext>;
/**
 * @summary Get question by ID
 */
export declare const getGetQuestionUrl: (questionId: number) => string;
export declare const getQuestion: (questionId: number, options?: RequestInit) => Promise<Question>;
export declare const getGetQuestionQueryKey: (questionId: number) => readonly [`/api/questions/${number}`];
export declare const getGetQuestionQueryOptions: <TData = Awaited<ReturnType<typeof getQuestion>>, TError = ErrorType<ErrorResponse>>(questionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQuestion>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getQuestion>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetQuestionQueryResult = NonNullable<Awaited<ReturnType<typeof getQuestion>>>;
export type GetQuestionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get question by ID
 */
export declare function useGetQuestion<TData = Awaited<ReturnType<typeof getQuestion>>, TError = ErrorType<ErrorResponse>>(questionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQuestion>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update question
 */
export declare const getUpdateQuestionUrl: (questionId: number) => string;
export declare const updateQuestion: (questionId: number, updateQuestionRequest: UpdateQuestionRequest, options?: RequestInit) => Promise<Question>;
export declare const getUpdateQuestionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateQuestion>>, TError, {
        questionId: number;
        data: BodyType<UpdateQuestionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateQuestion>>, TError, {
    questionId: number;
    data: BodyType<UpdateQuestionRequest>;
}, TContext>;
export type UpdateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof updateQuestion>>>;
export type UpdateQuestionMutationBody = BodyType<UpdateQuestionRequest>;
export type UpdateQuestionMutationError = ErrorType<unknown>;
/**
 * @summary Update question
 */
export declare const useUpdateQuestion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateQuestion>>, TError, {
        questionId: number;
        data: BodyType<UpdateQuestionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateQuestion>>, TError, {
    questionId: number;
    data: BodyType<UpdateQuestionRequest>;
}, TContext>;
/**
 * @summary List bids
 */
export declare const getGetBidsUrl: (params?: GetBidsParams) => string;
export declare const getBids: (params?: GetBidsParams, options?: RequestInit) => Promise<Bid[]>;
export declare const getGetBidsQueryKey: (params?: GetBidsParams) => readonly ["/api/bids", ...GetBidsParams[]];
export declare const getGetBidsQueryOptions: <TData = Awaited<ReturnType<typeof getBids>>, TError = ErrorType<unknown>>(params?: GetBidsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBids>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBids>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBidsQueryResult = NonNullable<Awaited<ReturnType<typeof getBids>>>;
export type GetBidsQueryError = ErrorType<unknown>;
/**
 * @summary List bids
 */
export declare function useGetBids<TData = Awaited<ReturnType<typeof getBids>>, TError = ErrorType<unknown>>(params?: GetBidsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBids>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a bid
 */
export declare const getCreateBidUrl: () => string;
export declare const createBid: (createBidRequest: CreateBidRequest, options?: RequestInit) => Promise<Bid>;
export declare const getCreateBidMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBid>>, TError, {
        data: BodyType<CreateBidRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBid>>, TError, {
    data: BodyType<CreateBidRequest>;
}, TContext>;
export type CreateBidMutationResult = NonNullable<Awaited<ReturnType<typeof createBid>>>;
export type CreateBidMutationBody = BodyType<CreateBidRequest>;
export type CreateBidMutationError = ErrorType<unknown>;
/**
 * @summary Submit a bid
 */
export declare const useCreateBid: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBid>>, TError, {
        data: BodyType<CreateBidRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBid>>, TError, {
    data: BodyType<CreateBidRequest>;
}, TContext>;
/**
 * @summary Get bid by ID
 */
export declare const getGetBidUrl: (bidId: number) => string;
export declare const getBid: (bidId: number, options?: RequestInit) => Promise<Bid>;
export declare const getGetBidQueryKey: (bidId: number) => readonly [`/api/bids/${number}`];
export declare const getGetBidQueryOptions: <TData = Awaited<ReturnType<typeof getBid>>, TError = ErrorType<unknown>>(bidId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBid>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBid>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBidQueryResult = NonNullable<Awaited<ReturnType<typeof getBid>>>;
export type GetBidQueryError = ErrorType<unknown>;
/**
 * @summary Get bid by ID
 */
export declare function useGetBid<TData = Awaited<ReturnType<typeof getBid>>, TError = ErrorType<unknown>>(bidId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBid>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Accept or reject a bid
 */
export declare const getUpdateBidUrl: (bidId: number) => string;
export declare const updateBid: (bidId: number, updateBidRequest: UpdateBidRequest, options?: RequestInit) => Promise<Bid>;
export declare const getUpdateBidMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBid>>, TError, {
        bidId: number;
        data: BodyType<UpdateBidRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateBid>>, TError, {
    bidId: number;
    data: BodyType<UpdateBidRequest>;
}, TContext>;
export type UpdateBidMutationResult = NonNullable<Awaited<ReturnType<typeof updateBid>>>;
export type UpdateBidMutationBody = BodyType<UpdateBidRequest>;
export type UpdateBidMutationError = ErrorType<unknown>;
/**
 * @summary Accept or reject a bid
 */
export declare const useUpdateBid: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBid>>, TError, {
        bidId: number;
        data: BodyType<UpdateBidRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateBid>>, TError, {
    bidId: number;
    data: BodyType<UpdateBidRequest>;
}, TContext>;
/**
 * @summary List sessions
 */
export declare const getGetSessionsUrl: (params?: GetSessionsParams) => string;
export declare const getSessions: (params?: GetSessionsParams, options?: RequestInit) => Promise<Session[]>;
export declare const getGetSessionsQueryKey: (params?: GetSessionsParams) => readonly ["/api/sessions", ...GetSessionsParams[]];
export declare const getGetSessionsQueryOptions: <TData = Awaited<ReturnType<typeof getSessions>>, TError = ErrorType<unknown>>(params?: GetSessionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof getSessions>>>;
export type GetSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List sessions
 */
export declare function useGetSessions<TData = Awaited<ReturnType<typeof getSessions>>, TError = ErrorType<unknown>>(params?: GetSessionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a session
 */
export declare const getCreateSessionUrl: () => string;
export declare const createSession: (createSessionRequest: CreateSessionRequest, options?: RequestInit) => Promise<Session>;
export declare const getCreateSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<CreateSessionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<CreateSessionRequest>;
}, TContext>;
export type CreateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof createSession>>>;
export type CreateSessionMutationBody = BodyType<CreateSessionRequest>;
export type CreateSessionMutationError = ErrorType<unknown>;
/**
 * @summary Create a session
 */
export declare const useCreateSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<CreateSessionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<CreateSessionRequest>;
}, TContext>;
/**
 * @summary Get session by ID
 */
export declare const getGetSessionUrl: (sessionId: number) => string;
export declare const getSession: (sessionId: number, options?: RequestInit) => Promise<Session>;
export declare const getGetSessionQueryKey: (sessionId: number) => readonly [`/api/sessions/${number}`];
export declare const getGetSessionQueryOptions: <TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<ErrorResponse>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getSession>>>;
export type GetSessionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get session by ID
 */
export declare function useGetSession<TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<ErrorResponse>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update session
 */
export declare const getUpdateSessionUrl: (sessionId: number) => string;
export declare const updateSession: (sessionId: number, updateSessionRequest: UpdateSessionRequest, options?: RequestInit) => Promise<Session>;
export declare const getUpdateSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
        sessionId: number;
        data: BodyType<UpdateSessionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
    sessionId: number;
    data: BodyType<UpdateSessionRequest>;
}, TContext>;
export type UpdateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof updateSession>>>;
export type UpdateSessionMutationBody = BodyType<UpdateSessionRequest>;
export type UpdateSessionMutationError = ErrorType<unknown>;
/**
 * @summary Update session
 */
export declare const useUpdateSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
        sessionId: number;
        data: BodyType<UpdateSessionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSession>>, TError, {
    sessionId: number;
    data: BodyType<UpdateSessionRequest>;
}, TContext>;
/**
 * @summary List reviews for a tutor
 */
export declare const getGetReviewsUrl: (params: GetReviewsParams) => string;
export declare const getReviews: (params: GetReviewsParams, options?: RequestInit) => Promise<Review[]>;
export declare const getGetReviewsQueryKey: (params?: GetReviewsParams) => readonly ["/api/reviews", ...GetReviewsParams[]];
export declare const getGetReviewsQueryOptions: <TData = Awaited<ReturnType<typeof getReviews>>, TError = ErrorType<unknown>>(params: GetReviewsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReviews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getReviews>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetReviewsQueryResult = NonNullable<Awaited<ReturnType<typeof getReviews>>>;
export type GetReviewsQueryError = ErrorType<unknown>;
/**
 * @summary List reviews for a tutor
 */
export declare function useGetReviews<TData = Awaited<ReturnType<typeof getReviews>>, TError = ErrorType<unknown>>(params: GetReviewsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReviews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a review
 */
export declare const getCreateReviewUrl: () => string;
export declare const createReview: (createReviewRequest: CreateReviewRequest, options?: RequestInit) => Promise<Review>;
export declare const getCreateReviewMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
        data: BodyType<CreateReviewRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
    data: BodyType<CreateReviewRequest>;
}, TContext>;
export type CreateReviewMutationResult = NonNullable<Awaited<ReturnType<typeof createReview>>>;
export type CreateReviewMutationBody = BodyType<CreateReviewRequest>;
export type CreateReviewMutationError = ErrorType<unknown>;
/**
 * @summary Submit a review
 */
export declare const useCreateReview: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
        data: BodyType<CreateReviewRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createReview>>, TError, {
    data: BodyType<CreateReviewRequest>;
}, TContext>;
/**
 * @summary Get notifications for current user
 */
export declare const getGetNotificationsUrl: () => string;
export declare const getNotifications: (options?: RequestInit) => Promise<Notification[]>;
export declare const getGetNotificationsQueryKey: () => readonly ["/api/notifications"];
export declare const getGetNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof getNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getNotifications>>>;
export type GetNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary Get notifications for current user
 */
export declare function useGetNotifications<TData = Awaited<ReturnType<typeof getNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark notification as read
 */
export declare const getMarkNotificationReadUrl: (notificationId: number) => string;
export declare const markNotificationRead: (notificationId: number, options?: RequestInit) => Promise<Notification>;
export declare const getMarkNotificationReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        notificationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    notificationId: number;
}, TContext>;
export type MarkNotificationReadMutationResult = NonNullable<Awaited<ReturnType<typeof markNotificationRead>>>;
export type MarkNotificationReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark notification as read
 */
export declare const useMarkNotificationRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        notificationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    notificationId: number;
}, TContext>;
/**
 * @summary Mark all notifications as read
 */
export declare const getMarkAllNotificationsReadUrl: () => string;
export declare const markAllNotificationsRead: (options?: RequestInit) => Promise<void>;
export declare const getMarkAllNotificationsReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
export type MarkAllNotificationsReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAllNotificationsRead>>>;
export type MarkAllNotificationsReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark all notifications as read
 */
export declare const useMarkAllNotificationsRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
/**
 * @summary Get student dashboard summary
 */
export declare const getGetStudentDashboardUrl: (studentId: number) => string;
export declare const getStudentDashboard: (studentId: number, options?: RequestInit) => Promise<StudentDashboard>;
export declare const getGetStudentDashboardQueryKey: (studentId: number) => readonly [`/api/dashboard/student/${number}`];
export declare const getGetStudentDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getStudentDashboard>>, TError = ErrorType<unknown>>(studentId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudentDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStudentDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStudentDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getStudentDashboard>>>;
export type GetStudentDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Get student dashboard summary
 */
export declare function useGetStudentDashboard<TData = Awaited<ReturnType<typeof getStudentDashboard>>, TError = ErrorType<unknown>>(studentId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudentDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get tutor dashboard summary
 */
export declare const getGetTutorDashboardUrl: (tutorId: number) => string;
export declare const getTutorDashboard: (tutorId: number, options?: RequestInit) => Promise<TutorDashboard>;
export declare const getGetTutorDashboardQueryKey: (tutorId: number) => readonly [`/api/dashboard/tutor/${number}`];
export declare const getGetTutorDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getTutorDashboard>>, TError = ErrorType<unknown>>(tutorId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTutorDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTutorDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTutorDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getTutorDashboard>>>;
export type GetTutorDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Get tutor dashboard summary
 */
export declare function useGetTutorDashboard<TData = Awaited<ReturnType<typeof getTutorDashboard>>, TError = ErrorType<unknown>>(tutorId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTutorDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin - list all users
 */
export declare const getAdminGetUsersUrl: (params?: AdminGetUsersParams) => string;
export declare const adminGetUsers: (params?: AdminGetUsersParams, options?: RequestInit) => Promise<User[]>;
export declare const getAdminGetUsersQueryKey: (params?: AdminGetUsersParams) => readonly ["/api/admin/users", ...AdminGetUsersParams[]];
export declare const getAdminGetUsersQueryOptions: <TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<unknown>>(params?: AdminGetUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminGetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetUsers>>>;
export type AdminGetUsersQueryError = ErrorType<unknown>;
/**
 * @summary Admin - list all users
 */
export declare function useAdminGetUsers<TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<unknown>>(params?: AdminGetUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin - suspend or unsuspend a user
 */
export declare const getAdminSuspendUserUrl: (userId: number) => string;
export declare const adminSuspendUser: (userId: number, suspendUserRequest: SuspendUserRequest, options?: RequestInit) => Promise<User>;
export declare const getAdminSuspendUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminSuspendUser>>, TError, {
        userId: number;
        data: BodyType<SuspendUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminSuspendUser>>, TError, {
    userId: number;
    data: BodyType<SuspendUserRequest>;
}, TContext>;
export type AdminSuspendUserMutationResult = NonNullable<Awaited<ReturnType<typeof adminSuspendUser>>>;
export type AdminSuspendUserMutationBody = BodyType<SuspendUserRequest>;
export type AdminSuspendUserMutationError = ErrorType<unknown>;
/**
 * @summary Admin - suspend or unsuspend a user
 */
export declare const useAdminSuspendUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminSuspendUser>>, TError, {
        userId: number;
        data: BodyType<SuspendUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminSuspendUser>>, TError, {
    userId: number;
    data: BodyType<SuspendUserRequest>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map
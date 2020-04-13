import * as either from 'fp-ts/lib/Either';
import * as option from 'fp-ts/lib/Option';

// These are only needed for emitting TypeScript declarations
/* tslint:disable no-unused-variable */
// @ts-ignore
import {
    ValidationError,
    TypeOfProps,
    ArrayType,
    InterfaceType,
    NumberType,
    StringType,
} from 'io-ts';
/* tslint:enable no-unused-variable */

// tslint:disable-next-line no-duplicate-imports
import { ErrorResponse, OAuthOptions, Response, StatusesHomeTimelineQueryT, StatusesUserTimelineQueryT } from './types';

export const createErrorResponse = <T>(errorResponse: ErrorResponse): Response<T> =>
    either.left(errorResponse);

export const typecheck = <A>(a: A) => a;

// Defaults

export const defaultOAuthOptions: Pick<
    OAuthOptions,
    'callback' | 'verifier' | 'token' | 'tokenSecret'
> = {
    callback: option.none,
    verifier: option.none,
    token: option.none,
    tokenSecret: option.none,
};

export const defaultStatusesHomeTimelineQuery: Pick<
    StatusesHomeTimelineQueryT,
    'count' | 'since_id' | 'max_id' | 'trim_user' | 'exclude_replies' | 'include_entities'
> = {
    count: option.none,
    since_id: option.none,
    max_id: option.none,
    trim_user: option.none,
    exclude_replies: option.none,
    include_entities: option.none,
};

export const defaultStatusesUserTimelineQuery: Pick<
    StatusesUserTimelineQueryT,
    'user_id' | 'screen_name' | 'since_id' | 'count' | 'max_id' | 'trim_user' | 'exclude_replies' | 'include_entities'
> = {
    user_id: option.none,
    screen_name: option.none,
    since_id: option.none,
    count: option.none,
    max_id: option.none,
    trim_user: option.none,
    exclude_replies: option.none,
    include_entities: option.none,
};

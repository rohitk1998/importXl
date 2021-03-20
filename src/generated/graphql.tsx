import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  subs: PaginatedSubs;
  sub?: Maybe<Sub>;
  quotes: PaginatedQuotes;
  quote?: Maybe<Quote>;
};


export type QuerySubsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySubArgs = {
  id: Scalars['Int'];
};


export type QueryQuotesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryQuoteArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
  role: Scalars['String'];
  inviteLink: Scalars['String'];
  customer: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedSubs = {
  __typename?: 'PaginatedSubs';
  subs: Array<Sub>;
  hasMore: Scalars['Boolean'];
};

export type Sub = {
  __typename?: 'Sub';
  id: Scalars['Float'];
  name: Scalars['String'];
  email: Scalars['String'];
  unsubscribeToken: Scalars['String'];
  subscribed: Scalars['Boolean'];
  creatorId: Scalars['Float'];
  frequency: Scalars['Float'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedQuotes = {
  __typename?: 'PaginatedQuotes';
  quotes: Array<Quote>;
  hasMore: Scalars['Boolean'];
};

export type Quote = {
  __typename?: 'Quote';
  id: Scalars['Float'];
  name: Scalars['String'];
  creatorId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  updateUser: UserResponse;
  updateAuth: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createSub: SubResponse;
  createSubFromInvite: SubResponse;
  acceptInvite: SubResponse;
  updateSub?: Maybe<Sub>;
  unsubscribeSub: SubResponse;
  deleteSub: Scalars['Boolean'];
  createQuote: QuoteResponse;
  updateQuote?: Maybe<Quote>;
  deleteQuote: Scalars['Boolean'];
  Addfile: Scalars['Boolean'];
  uploadValues: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationUpdateAuthArgs = {
  input: UserAuthInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateSubArgs = {
  input: SubInput;
};


export type MutationCreateSubFromInviteArgs = {
  input: SubInviteInput;
};


export type MutationAcceptInviteArgs = {
  frequency: Scalars['Float'];
  subscribed: Scalars['Boolean'];
  token: Scalars['String'];
};


export type MutationUpdateSubArgs = {
  subscribed: Scalars['Boolean'];
  email: Scalars['String'];
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUnsubscribeSubArgs = {
  token: Scalars['String'];
};


export type MutationDeleteSubArgs = {
  id: Scalars['Int'];
};


export type MutationCreateQuoteArgs = {
  input: QuoteInput;
};


export type MutationUpdateQuoteArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteQuoteArgs = {
  id: Scalars['Int'];
};


export type MutationAddfileArgs = {
  details: Scalars['Upload'];
};


export type MutationUploadValuesArgs = {
  input: FileInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type UserAuthInput = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  confirm?: Maybe<Scalars['String']>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SubResponse = {
  __typename?: 'SubResponse';
  errors?: Maybe<Array<FieldError>>;
  sub?: Maybe<Sub>;
};

export type SubInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type SubInviteInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  frequency: Scalars['Float'];
  token: Scalars['String'];
};

export type QuoteResponse = {
  __typename?: 'QuoteResponse';
  errors?: Maybe<Array<FieldError>>;
  quote?: Maybe<Quote>;
};

export type QuoteInput = {
  name: Scalars['String'];
};


export type FileInput = {
  FirstName: Scalars['String'];
  LastName: Scalars['String'];
  Email: Scalars['String'];
  Contact: Scalars['String'];
};

export type QuoteSnippetFragment = (
  { __typename?: 'Quote' }
  & Pick<Quote, 'id' | 'name' | 'createdAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularQuoteFragment = (
  { __typename?: 'Quote' }
  & Pick<Quote, 'id'>
);

export type RegularSubFragment = (
  { __typename?: 'Sub' }
  & Pick<Sub, 'id'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'inviteLink' | 'name' | 'email' | 'address' | 'city' | 'state' | 'zip' | 'role'>
);

export type RegularQuoteResponseFragment = (
  { __typename?: 'QuoteResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, quote?: Maybe<(
    { __typename?: 'Quote' }
    & RegularQuoteFragment
  )> }
);

export type RegularSubResponseFragment = (
  { __typename?: 'SubResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, sub?: Maybe<(
    { __typename?: 'Sub' }
    & RegularSubFragment
  )> }
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type SubSnippetFragment = (
  { __typename?: 'Sub' }
  & Pick<Sub, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'email' | 'subscribed'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type AddfileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type AddfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'Addfile'>
);

export type UploadValuesMutationVariables = Exact<{
  input: FileInput;
}>;


export type UploadValuesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadValues'>
);

export type AcceptInviteMutationVariables = Exact<{
  token: Scalars['String'];
  subscribed: Scalars['Boolean'];
  frequency: Scalars['Float'];
}>;


export type AcceptInviteMutation = (
  { __typename?: 'Mutation' }
  & { acceptInvite: (
    { __typename?: 'SubResponse' }
    & RegularSubResponseFragment
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateQuoteMutationVariables = Exact<{
  input: QuoteInput;
}>;


export type CreateQuoteMutation = (
  { __typename?: 'Mutation' }
  & { createQuote: (
    { __typename?: 'QuoteResponse' }
    & RegularQuoteResponseFragment
  ) }
);

export type CreateSubMutationVariables = Exact<{
  input: SubInput;
}>;


export type CreateSubMutation = (
  { __typename?: 'Mutation' }
  & { createSub: (
    { __typename?: 'SubResponse' }
    & RegularSubResponseFragment
  ) }
);

export type CreateSubFromInviteMutationVariables = Exact<{
  input: SubInviteInput;
}>;


export type CreateSubFromInviteMutation = (
  { __typename?: 'Mutation' }
  & { createSubFromInvite: (
    { __typename?: 'SubResponse' }
    & RegularSubResponseFragment
  ) }
);

export type DeleteQuoteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteQuoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuote'>
);

export type DeleteSubMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSubMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteSub'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UnsubscribeSubMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type UnsubscribeSubMutation = (
  { __typename?: 'Mutation' }
  & { unsubscribeSub: (
    { __typename?: 'SubResponse' }
    & RegularSubResponseFragment
  ) }
);

export type UpdateQuoteMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateQuoteMutation = (
  { __typename?: 'Mutation' }
  & { updateQuote?: Maybe<(
    { __typename?: 'Quote' }
    & Pick<Quote, 'id' | 'name'>
  )> }
);

export type UpdateSubMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  subscribed: Scalars['Boolean'];
}>;


export type UpdateSubMutation = (
  { __typename?: 'Mutation' }
  & { updateSub?: Maybe<(
    { __typename?: 'Sub' }
    & Pick<Sub, 'id' | 'name' | 'email' | 'subscribed'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateUserAuthMutationVariables = Exact<{
  input: UserAuthInput;
}>;


export type UpdateUserAuthMutation = (
  { __typename?: 'Mutation' }
  & { updateAuth: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type QuotesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type QuotesQuery = (
  { __typename?: 'Query' }
  & { quotes: (
    { __typename?: 'PaginatedQuotes' }
    & Pick<PaginatedQuotes, 'hasMore'>
    & { quotes: Array<(
      { __typename?: 'Quote' }
      & QuoteSnippetFragment
    )> }
  ) }
);

export type SubsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type SubsQuery = (
  { __typename?: 'Query' }
  & { subs: (
    { __typename?: 'PaginatedSubs' }
    & Pick<PaginatedSubs, 'hasMore'>
    & { subs: Array<(
      { __typename?: 'Sub' }
      & SubSnippetFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const QuoteSnippetFragmentDoc = gql`
    fragment QuoteSnippet on Quote {
  id
  name
  user {
    id
    username
  }
  createdAt
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularQuoteFragmentDoc = gql`
    fragment RegularQuote on Quote {
  id
}
    `;
export const RegularQuoteResponseFragmentDoc = gql`
    fragment RegularQuoteResponse on QuoteResponse {
  errors {
    ...RegularError
  }
  quote {
    ...RegularQuote
  }
}
    ${RegularErrorFragmentDoc}
${RegularQuoteFragmentDoc}`;
export const RegularSubFragmentDoc = gql`
    fragment RegularSub on Sub {
  id
}
    `;
export const RegularSubResponseFragmentDoc = gql`
    fragment RegularSubResponse on SubResponse {
  errors {
    ...RegularError
  }
  sub {
    ...RegularSub
  }
}
    ${RegularErrorFragmentDoc}
${RegularSubFragmentDoc}`;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  inviteLink
  name
  email
  address
  city
  state
  zip
  role
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const SubSnippetFragmentDoc = gql`
    fragment SubSnippet on Sub {
  id
  createdAt
  updatedAt
  name
  email
  subscribed
  creator {
    id
    username
  }
}
    `;
export const AddfileDocument = gql`
    mutation Addfile($file: Upload!) {
  Addfile(details: $file)
}
    `;
export type AddfileMutationFn = Apollo.MutationFunction<AddfileMutation, AddfileMutationVariables>;

/**
 * __useAddfileMutation__
 *
 * To run a mutation, you first call `useAddfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addfileMutation, { data, loading, error }] = useAddfileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useAddfileMutation(baseOptions?: Apollo.MutationHookOptions<AddfileMutation, AddfileMutationVariables>) {
        return Apollo.useMutation<AddfileMutation, AddfileMutationVariables>(AddfileDocument, baseOptions);
      }
export type AddfileMutationHookResult = ReturnType<typeof useAddfileMutation>;
export type AddfileMutationResult = Apollo.MutationResult<AddfileMutation>;
export type AddfileMutationOptions = Apollo.BaseMutationOptions<AddfileMutation, AddfileMutationVariables>;
export const UploadValuesDocument = gql`
    mutation uploadValues($input: FileInput!) {
  uploadValues(input: $input)
}
    `;
export type UploadValuesMutationFn = Apollo.MutationFunction<UploadValuesMutation, UploadValuesMutationVariables>;

/**
 * __useUploadValuesMutation__
 *
 * To run a mutation, you first call `useUploadValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadValuesMutation, { data, loading, error }] = useUploadValuesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadValuesMutation(baseOptions?: Apollo.MutationHookOptions<UploadValuesMutation, UploadValuesMutationVariables>) {
        return Apollo.useMutation<UploadValuesMutation, UploadValuesMutationVariables>(UploadValuesDocument, baseOptions);
      }
export type UploadValuesMutationHookResult = ReturnType<typeof useUploadValuesMutation>;
export type UploadValuesMutationResult = Apollo.MutationResult<UploadValuesMutation>;
export type UploadValuesMutationOptions = Apollo.BaseMutationOptions<UploadValuesMutation, UploadValuesMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($token: String!, $subscribed: Boolean!, $frequency: Float!) {
  acceptInvite(token: $token, subscribed: $subscribed, frequency: $frequency) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      token: // value for 'token'
 *      subscribed: // value for 'subscribed'
 *      frequency: // value for 'frequency'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, baseOptions);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateQuoteDocument = gql`
    mutation CreateQuote($input: QuoteInput!) {
  createQuote(input: $input) {
    ...RegularQuoteResponse
  }
}
    ${RegularQuoteResponseFragmentDoc}`;
export type CreateQuoteMutationFn = Apollo.MutationFunction<CreateQuoteMutation, CreateQuoteMutationVariables>;

/**
 * __useCreateQuoteMutation__
 *
 * To run a mutation, you first call `useCreateQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuoteMutation, { data, loading, error }] = useCreateQuoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuoteMutation, CreateQuoteMutationVariables>) {
        return Apollo.useMutation<CreateQuoteMutation, CreateQuoteMutationVariables>(CreateQuoteDocument, baseOptions);
      }
export type CreateQuoteMutationHookResult = ReturnType<typeof useCreateQuoteMutation>;
export type CreateQuoteMutationResult = Apollo.MutationResult<CreateQuoteMutation>;
export type CreateQuoteMutationOptions = Apollo.BaseMutationOptions<CreateQuoteMutation, CreateQuoteMutationVariables>;
export const CreateSubDocument = gql`
    mutation CreateSub($input: SubInput!) {
  createSub(input: $input) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;
export type CreateSubMutationFn = Apollo.MutationFunction<CreateSubMutation, CreateSubMutationVariables>;

/**
 * __useCreateSubMutation__
 *
 * To run a mutation, you first call `useCreateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubMutation, { data, loading, error }] = useCreateSubMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubMutation, CreateSubMutationVariables>) {
        return Apollo.useMutation<CreateSubMutation, CreateSubMutationVariables>(CreateSubDocument, baseOptions);
      }
export type CreateSubMutationHookResult = ReturnType<typeof useCreateSubMutation>;
export type CreateSubMutationResult = Apollo.MutationResult<CreateSubMutation>;
export type CreateSubMutationOptions = Apollo.BaseMutationOptions<CreateSubMutation, CreateSubMutationVariables>;
export const CreateSubFromInviteDocument = gql`
    mutation CreateSubFromInvite($input: SubInviteInput!) {
  createSubFromInvite(input: $input) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;
export type CreateSubFromInviteMutationFn = Apollo.MutationFunction<CreateSubFromInviteMutation, CreateSubFromInviteMutationVariables>;

/**
 * __useCreateSubFromInviteMutation__
 *
 * To run a mutation, you first call `useCreateSubFromInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubFromInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubFromInviteMutation, { data, loading, error }] = useCreateSubFromInviteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubFromInviteMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubFromInviteMutation, CreateSubFromInviteMutationVariables>) {
        return Apollo.useMutation<CreateSubFromInviteMutation, CreateSubFromInviteMutationVariables>(CreateSubFromInviteDocument, baseOptions);
      }
export type CreateSubFromInviteMutationHookResult = ReturnType<typeof useCreateSubFromInviteMutation>;
export type CreateSubFromInviteMutationResult = Apollo.MutationResult<CreateSubFromInviteMutation>;
export type CreateSubFromInviteMutationOptions = Apollo.BaseMutationOptions<CreateSubFromInviteMutation, CreateSubFromInviteMutationVariables>;
export const DeleteQuoteDocument = gql`
    mutation DeleteQuote($id: Int!) {
  deleteQuote(id: $id)
}
    `;
export type DeleteQuoteMutationFn = Apollo.MutationFunction<DeleteQuoteMutation, DeleteQuoteMutationVariables>;

/**
 * __useDeleteQuoteMutation__
 *
 * To run a mutation, you first call `useDeleteQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuoteMutation, { data, loading, error }] = useDeleteQuoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuoteMutation, DeleteQuoteMutationVariables>) {
        return Apollo.useMutation<DeleteQuoteMutation, DeleteQuoteMutationVariables>(DeleteQuoteDocument, baseOptions);
      }
export type DeleteQuoteMutationHookResult = ReturnType<typeof useDeleteQuoteMutation>;
export type DeleteQuoteMutationResult = Apollo.MutationResult<DeleteQuoteMutation>;
export type DeleteQuoteMutationOptions = Apollo.BaseMutationOptions<DeleteQuoteMutation, DeleteQuoteMutationVariables>;
export const DeleteSubDocument = gql`
    mutation DeleteSub($id: Int!) {
  deleteSub(id: $id)
}
    `;
export type DeleteSubMutationFn = Apollo.MutationFunction<DeleteSubMutation, DeleteSubMutationVariables>;

/**
 * __useDeleteSubMutation__
 *
 * To run a mutation, you first call `useDeleteSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubMutation, { data, loading, error }] = useDeleteSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubMutation, DeleteSubMutationVariables>) {
        return Apollo.useMutation<DeleteSubMutation, DeleteSubMutationVariables>(DeleteSubDocument, baseOptions);
      }
export type DeleteSubMutationHookResult = ReturnType<typeof useDeleteSubMutation>;
export type DeleteSubMutationResult = Apollo.MutationResult<DeleteSubMutation>;
export type DeleteSubMutationOptions = Apollo.BaseMutationOptions<DeleteSubMutation, DeleteSubMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UnsubscribeSubDocument = gql`
    mutation UnsubscribeSub($token: String!) {
  unsubscribeSub(token: $token) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;
export type UnsubscribeSubMutationFn = Apollo.MutationFunction<UnsubscribeSubMutation, UnsubscribeSubMutationVariables>;

/**
 * __useUnsubscribeSubMutation__
 *
 * To run a mutation, you first call `useUnsubscribeSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeSubMutation, { data, loading, error }] = useUnsubscribeSubMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUnsubscribeSubMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeSubMutation, UnsubscribeSubMutationVariables>) {
        return Apollo.useMutation<UnsubscribeSubMutation, UnsubscribeSubMutationVariables>(UnsubscribeSubDocument, baseOptions);
      }
export type UnsubscribeSubMutationHookResult = ReturnType<typeof useUnsubscribeSubMutation>;
export type UnsubscribeSubMutationResult = Apollo.MutationResult<UnsubscribeSubMutation>;
export type UnsubscribeSubMutationOptions = Apollo.BaseMutationOptions<UnsubscribeSubMutation, UnsubscribeSubMutationVariables>;
export const UpdateQuoteDocument = gql`
    mutation UpdateQuote($id: Int!, $name: String!) {
  updateQuote(id: $id, name: $name) {
    id
    name
  }
}
    `;
export type UpdateQuoteMutationFn = Apollo.MutationFunction<UpdateQuoteMutation, UpdateQuoteMutationVariables>;

/**
 * __useUpdateQuoteMutation__
 *
 * To run a mutation, you first call `useUpdateQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuoteMutation, { data, loading, error }] = useUpdateQuoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateQuoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuoteMutation, UpdateQuoteMutationVariables>) {
        return Apollo.useMutation<UpdateQuoteMutation, UpdateQuoteMutationVariables>(UpdateQuoteDocument, baseOptions);
      }
export type UpdateQuoteMutationHookResult = ReturnType<typeof useUpdateQuoteMutation>;
export type UpdateQuoteMutationResult = Apollo.MutationResult<UpdateQuoteMutation>;
export type UpdateQuoteMutationOptions = Apollo.BaseMutationOptions<UpdateQuoteMutation, UpdateQuoteMutationVariables>;
export const UpdateSubDocument = gql`
    mutation UpdateSub($id: Int!, $name: String!, $email: String!, $subscribed: Boolean!) {
  updateSub(id: $id, name: $name, email: $email, subscribed: $subscribed) {
    id
    name
    email
    subscribed
  }
}
    `;
export type UpdateSubMutationFn = Apollo.MutationFunction<UpdateSubMutation, UpdateSubMutationVariables>;

/**
 * __useUpdateSubMutation__
 *
 * To run a mutation, you first call `useUpdateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubMutation, { data, loading, error }] = useUpdateSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      subscribed: // value for 'subscribed'
 *   },
 * });
 */
export function useUpdateSubMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubMutation, UpdateSubMutationVariables>) {
        return Apollo.useMutation<UpdateSubMutation, UpdateSubMutationVariables>(UpdateSubDocument, baseOptions);
      }
export type UpdateSubMutationHookResult = ReturnType<typeof useUpdateSubMutation>;
export type UpdateSubMutationResult = Apollo.MutationResult<UpdateSubMutation>;
export type UpdateSubMutationOptions = Apollo.BaseMutationOptions<UpdateSubMutation, UpdateSubMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserInput!) {
  updateUser(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserAuthDocument = gql`
    mutation UpdateUserAuth($input: UserAuthInput!) {
  updateAuth(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type UpdateUserAuthMutationFn = Apollo.MutationFunction<UpdateUserAuthMutation, UpdateUserAuthMutationVariables>;

/**
 * __useUpdateUserAuthMutation__
 *
 * To run a mutation, you first call `useUpdateUserAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAuthMutation, { data, loading, error }] = useUpdateUserAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAuthMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAuthMutation, UpdateUserAuthMutationVariables>) {
        return Apollo.useMutation<UpdateUserAuthMutation, UpdateUserAuthMutationVariables>(UpdateUserAuthDocument, baseOptions);
      }
export type UpdateUserAuthMutationHookResult = ReturnType<typeof useUpdateUserAuthMutation>;
export type UpdateUserAuthMutationResult = Apollo.MutationResult<UpdateUserAuthMutation>;
export type UpdateUserAuthMutationOptions = Apollo.BaseMutationOptions<UpdateUserAuthMutation, UpdateUserAuthMutationVariables>;
export const QuotesDocument = gql`
    query Quotes($limit: Int!, $cursor: String) {
  quotes(limit: $limit, cursor: $cursor) {
    hasMore
    quotes {
      ...QuoteSnippet
    }
  }
}
    ${QuoteSnippetFragmentDoc}`;

/**
 * __useQuotesQuery__
 *
 * To run a query within a React component, call `useQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuotesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useQuotesQuery(baseOptions: Apollo.QueryHookOptions<QuotesQuery, QuotesQueryVariables>) {
        return Apollo.useQuery<QuotesQuery, QuotesQueryVariables>(QuotesDocument, baseOptions);
      }
export function useQuotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuotesQuery, QuotesQueryVariables>) {
          return Apollo.useLazyQuery<QuotesQuery, QuotesQueryVariables>(QuotesDocument, baseOptions);
        }
export type QuotesQueryHookResult = ReturnType<typeof useQuotesQuery>;
export type QuotesLazyQueryHookResult = ReturnType<typeof useQuotesLazyQuery>;
export type QuotesQueryResult = Apollo.QueryResult<QuotesQuery, QuotesQueryVariables>;
export const SubsDocument = gql`
    query Subs($limit: Int!, $cursor: String) {
  subs(limit: $limit, cursor: $cursor) {
    hasMore
    subs {
      ...SubSnippet
    }
  }
}
    ${SubSnippetFragmentDoc}`;

/**
 * __useSubsQuery__
 *
 * To run a query within a React component, call `useSubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSubsQuery(baseOptions: Apollo.QueryHookOptions<SubsQuery, SubsQueryVariables>) {
        return Apollo.useQuery<SubsQuery, SubsQueryVariables>(SubsDocument, baseOptions);
      }
export function useSubsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubsQuery, SubsQueryVariables>) {
          return Apollo.useLazyQuery<SubsQuery, SubsQueryVariables>(SubsDocument, baseOptions);
        }
export type SubsQueryHookResult = ReturnType<typeof useSubsQuery>;
export type SubsLazyQueryHookResult = ReturnType<typeof useSubsLazyQuery>;
export type SubsQueryResult = Apollo.QueryResult<SubsQuery, SubsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
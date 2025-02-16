import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type CreateOrderInput = {
  customerId: Scalars['Int']['input'];
  details: Array<OrderDetailInput>;
  shippingAddress: Scalars['String']['input'];
  totalAmount: Scalars['Float']['input'];
};

export type CreateProductInput = {
  categoryId: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateUserInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createProduct: Product;
  createUser: User;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Float']['output']>;
  details?: Maybe<Array<OrderDetail>>;
  id: Scalars['Float']['output'];
  shippingAddress: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalAmount: Scalars['Float']['output'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Float']['output']>;
  price: Scalars['String']['output'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Float']['output']>;
  quantity: Scalars['Float']['output'];
  totalAmount: Scalars['String']['output'];
};

export type OrderDetailInput = {
  price: Scalars['Float']['input'];
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  stock: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  customers: Array<Customer>;
  orders: Array<Order>;
  products: Array<Product>;
  user: User;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
};

export type ListCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCustomerQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'Customer', id: number, firstName: string, lastName: string, email: string, phone: string, createdAt: any }> };

export type CreateOrderMutationVariables = Exact<{
  totalAmount: Scalars['Float']['input'];
  shippingAddress: Scalars['String']['input'];
  customerId: Scalars['Int']['input'];
  details: Array<OrderDetailInput> | OrderDetailInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: number, createdAt: any } };

export type ListCustomersOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCustomersOptionsQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'Customer', id: number, firstName: string, lastName: string }> };

export type ListOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: number, totalAmount: number, shippingAddress: string, status: string, createdAt: any, customer?: { __typename?: 'Customer', id: number, firstName: string, lastName: string } | null }> };

export type ListProductsOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProductsOptionsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, price: string }> };

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  categoryId: Scalars['Int']['input'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: number, name: string, description?: string | null, price: string, createdAt: any } };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type ListProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, description?: string | null, price: string, createdAt: any, category?: { __typename?: 'Category', name: string } | null }> };

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, createdAt: any } };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, firstName: string, lastName: string, createdAt: any }> };

export const ListCustomerDocument = gql`
    query ListCustomer {
  customers {
    id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListCustomerGQL extends Apollo.Query<ListCustomerQuery, ListCustomerQueryVariables> {
    override document = ListCustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrderDocument = gql`
    mutation CreateOrder($totalAmount: Float!, $shippingAddress: String!, $customerId: Int!, $details: [OrderDetailInput!]!) {
  createOrder(
    input: {totalAmount: $totalAmount, shippingAddress: $shippingAddress, customerId: $customerId, details: $details}
  ) {
    id
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderGQL extends Apollo.Mutation<CreateOrderMutation, CreateOrderMutationVariables> {
    override document = CreateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListCustomersOptionsDocument = gql`
    query ListCustomersOptions {
  customers {
    id
    firstName
    lastName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListCustomersOptionsGQL extends Apollo.Query<ListCustomersOptionsQuery, ListCustomersOptionsQueryVariables> {
    override document = ListCustomersOptionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListOrdersDocument = gql`
    query ListOrders {
  orders {
    id
    totalAmount
    shippingAddress
    status
    createdAt
    customer {
      id
      firstName
      lastName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListOrdersGQL extends Apollo.Query<ListOrdersQuery, ListOrdersQueryVariables> {
    override document = ListOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListProductsOptionsDocument = gql`
    query ListProductsOptions {
  products {
    id
    name
    price
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListProductsOptionsGQL extends Apollo.Query<ListProductsOptionsQuery, ListProductsOptionsQueryVariables> {
    override document = ListProductsOptionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateProductDocument = gql`
    mutation CreateProduct($name: String!, $description: String!, $price: Float!, $categoryId: Int!) {
  createProduct(
    input: {name: $name, description: $description, price: $price, categoryId: $categoryId}
  ) {
    id
    name
    description
    price
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProductGQL extends Apollo.Mutation<CreateProductMutation, CreateProductMutationVariables> {
    override document = CreateProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListCategoriesDocument = gql`
    query ListCategories {
  categories {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListCategoriesGQL extends Apollo.Query<ListCategoriesQuery, ListCategoriesQueryVariables> {
    override document = ListCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListProductsDocument = gql`
    query ListProducts {
  products {
    id
    name
    description
    price
    createdAt
    category {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListProductsGQL extends Apollo.Query<ListProductsQuery, ListProductsQueryVariables> {
    override document = ListProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
  createUser(
    input: {firstName: $firstName, lastName: $lastName, username: $username, password: $password}
  ) {
    id
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    override document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListUsersDocument = gql`
    query ListUsers {
  users {
    id
    firstName
    lastName
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListUsersGQL extends Apollo.Query<ListUsersQuery, ListUsersQueryVariables> {
    override document = ListUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
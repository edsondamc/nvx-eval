import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloClient, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {NgModule, PLATFORM_ID} from '@angular/core';
import {environment} from '@environment';

const uri = `${environment.graphqlUri}/graphql`;

export function createApollo(httpLink: HttpLink): ApolloClient<any> {
  const http = httpLink.create({
    uri: uri
  });

  return new ApolloClient<any>({
    link: ApolloLink.from([http]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      }
    }
  });
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, PLATFORM_ID]
    }
  ]
})
export class GraphqlModule {
}

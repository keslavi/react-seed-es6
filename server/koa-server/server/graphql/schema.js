import {GraphQLSchema, GraphQLObjectType} from 'graphql';

import {gadgets, gadget, gadgetC, gadgetU, gadgetD} from './gadget.gql';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadgets,
    gadget
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    gadgetC,
    gadgetU,
    gadgetD
  }  
})

const schema = new GraphQLSchema({
  query,
  mutation
});

/*
{
    "_id" : ObjectId("5dd58bb58352444065e7ddf3"),
    "name" : "iphone",
    "release_date" : "21 September,2018",
    "by_company" : "Apple",
    "price" : 999
}
*/

export default schema;

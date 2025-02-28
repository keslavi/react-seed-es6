import Gadget from "../model/gadget.schema";

const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

export const Gadget_got = new GraphQLObjectType({
  name: "Gadget",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  })
});

export const gadget = {
  type: Gadget_got,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return Gadget.findById(args.id);
  }
};

export const gadgets = {
  type: new GraphQLList(Gadget_got),
  resolve(parent, args) {
    return Gadget.find();
  }
}

export const gadgetC = {
  type: Gadget_got,
  args: {
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  },
  resolve(parent, args) {
    const newGadget = new Gadget({
      name: args.name,
      release_date: args.release_date,
      by_company: args.by_company,
      price: args.price
    });

    return newGadget.save();
  }
}

export const gadgetU = {
  type: Gadget_got,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Gadget(args.id)
      .then(gadget => {
        gadget.name;
        (gadget.release_date = args.release_date),
          (gadget.by_company = args.by_company),
          (gadget.price = args.price);

        return gadget.save();
      })
      .then(item => item)
      .catch(err => console.log(err));
  }
}

export const gadgetD = {
  type: Gadget_got,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Gadget.findOneAndDelete(args.id).exec()
      .then(gadget => gadget.remove())
      .then(deletedGadget => deletedGadget)
      .catch(err => console.log(err))
  }
}
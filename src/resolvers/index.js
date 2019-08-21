import { extractFragmentReplacements } from 'prisma-binding'
// resolvers
import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
// custom types resolvers
import User from './custom-types/User'

const resolvers = {
  Query,
  Mutation,
  // Subscription,
  User
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }
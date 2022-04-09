import { extendType, nonNull, objectType, stringArg } from 'nexus'
import { Movie } from './Movie'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('email')
    t.nullable.string('name')
    t.list.field('movies', {
      type: Movie,
      resolve: (parent, _args, ctx) =>
        ctx.prisma.movies.findMany({
          where: { userId: parent.id },
        }),
    })
  },
})

export const userQueries = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve: async (_parent, _args, ctx) => {
        const users = await ctx.prisma.user.findMany()
        if (!users) return null
        return users
      },
    })

    t.list.field('currentUser', {
      type: 'User',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_parent, args, ctx) => {
        const user = await ctx.prisma.user.findUnique({
          where: { id: args.userId },
        })
        if (!user) return null
        return user
      },
    })
  },
})

export const userMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        //TODO:
      },
      resolve: async (parent, args, ctx) => {
        return null
        //TODO:
      },
    })
    t.field('updateUser', {
      type: 'User',
      args: {
        //TODO:
      },
      resolve: async (parent, args, ctx) => {
        return null
        //TODO:
      },
    })
    t.field('deleteUser', {
      type: 'User',
      args: {
        //TODO:
      },
      resolve: async (parent, args, ctx) => {
        return null
        //TODO:
      },
    })
  },
})

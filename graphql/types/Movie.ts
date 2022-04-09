import { extendType, nonNull, objectType, stringArg } from 'nexus'
import { User } from './User'

export const Movie = objectType({
  name: 'Movie',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.nullable.string('overview')
    t.nullable.string('imageUrl')
    t.nullable.field('user', {
      type: User,
      resolve: (parent, _args, ctx) =>
        ctx.prisma.user.findUnique({
          where: { id: parent.userId },
        }),
    })
  },
})

export const movieQueries = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allMovies', {
      type: 'Movie',
      resolve: async (_parent, _args, ctx) => {
        const movies = await ctx.prisma.movies.findMany()
        if (!movies) return null
        return movies
      },
    })
    t.list.field('userMovies', {
      type: 'Movie',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_parent, args, ctx) => {
        const movies = await ctx.prisma.movies.findMany({
          where: { userId: args.userId },
        })
        if (!movies) return null
        return movies
      },
    })
  },
})

export const movieMutations = extendType({
  type: 'Mutation',
  definition(t) {
      t.field('createMovie', {
          type: 'Movie',
          args: {
              //TODO:
          },
          resolve: async (parent, args, ctx) => {
            return null
              //TODO:
          },
      })
      t.field('updateMovie', {
        type: 'Movie',
        args: {
            //TODO:
        },
        resolve: async (parent, args, ctx) => {
          return null
            //TODO:
        },
    })
    t.field('deleteMovie', {
        type: 'Movie',
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

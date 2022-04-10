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
    t.list.field('movies', {
      type: 'Movie',
      resolve: async (_parent, _args, ctx) => {
        const movies = await ctx.prisma.movie.findMany()
        if (!movies) return null
        return movies
      },
    })
    t.list.field('moviesForUser', {
      type: 'Movie',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_parent, args, ctx) => {
        const movies = await ctx.prisma.movie.findMany({
          where: { userId: args.userId },
        })
        if (!movies) return null
        return movies
      },
    })
    t.field('movie', {
      type: 'Movie',
      args: {
        movieId: nonNull(stringArg()),
      },
      resolve: async (_parent, args, ctx) => {
        const movie = await ctx.prisma.movie.findUnique({
          where: { id: args.movieId },
        })
        if (!movie) return null
        return movie
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
        title: nonNull(stringArg()),
        overview: stringArg(),
        imageUrl: stringArg(),
        userId: stringArg(),
      },
      resolve: async (_parent, args, ctx) => {
        return await ctx.prisma.movie.create({
          data: {
            title: args.title,
            overview: args.overview,
            imageUrl: args.imageUrl,
            userId: args.userId,
          },
        })
      },
    })
    t.field('updateMovie', {
      type: 'Movie',
      args: {
        movieId: nonNull(stringArg()),
        title: nonNull(stringArg()),
        overview: stringArg(),
        imageUrl: stringArg(),
      },
      resolve: async (_parent, args, ctx) => {
        return await ctx.prisma.movie.update({
          where: { id: args.movieId },
          data: {
            title: args.title,
            overview: args.overview,
            imageUrl: args.imageUrl,
          },
        })
      },
    })
    t.field('deleteMovie', {
      type: 'Movie',
      args: {
        movieId: nonNull(stringArg()),
      },
      resolve: async (_parent, args, ctx) => {
        return await ctx.prisma.movie.delete({
          where: { id: args.movieId },
        })
      },
    })
  },
})

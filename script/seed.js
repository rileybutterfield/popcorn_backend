'use strict'

const db = require('../server/db')
const {User, Movie, Match, Like} = require('../server/db/models')
const moviesArray = require('./movieSeed')

const likesArray = [
  {
    userId: 1,
    movieId: 1
  },
  {
    userId: 2,
    movieId: 1
  },
  {
    userId: 2,
    movieId: 2
  },
  {
    userId: 1,
    movieId: 3
  },
  {
    userId: 1,
    movieId: 4
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({name: 'cody', email: 'cody@email.com', password: '12345'}),
    User.create({name: 'murphy', email: 'murphy@email.com', password: '12345'})
  ])

  const movies = await Promise.all(
    moviesArray.map(movie => {
      return Movie.create(movie)
    })
  )

  const likes = await Promise.all(
    likesArray.map(like => {
      return Like.create(like)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${movies.length} movies`)
  console.log(`seeded ${likes.length} likes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

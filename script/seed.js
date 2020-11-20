'use strict'

const db = require('../server/db')
const {User, Movie} = require('../server/db/models')

const moviesArray = [
  {
    title: 'Ratatouille',
    image:
      'https://sites.psu.edu/favoriteanimatedmovies/files/2017/03/ratatouille-25z0vgo.jpg',
    runtime: '120 minutes',
    genre: 'Kids',
    description: 'This is the ratatouille description'
  },
  {
    title: "She's All That",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51Iuj5srm4L._SX342_.jpg',
    runtime: '120 minutes',
    genre: "90's Teen",
    description: "This is the She's All That description"
  },
  {
    title: 'Lord of the Rings',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    runtime: '120 minutes',
    genre: 'Fantasy',
    description: 'This is the Lord of the Rings description'
  },
  {
    title: 'Batman',
    image: 'https://i.ytimg.com/vi/8BIObSCQWLs/maxresdefault.jpg',
    runtime: '120 minutes',
    genre: 'Superhero',
    description: 'This is the Batman description'
  },
  {
    title: 'The Grudge',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/91/The_Grudge_movie.jpg',
    runtime: '120 minutes',
    genre: 'Horror',
    description: 'This is the The Grudge description'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const movies = await Promise.all(
    moviesArray.map(movie => {
      return Movie.create(movie)
    })
  )

  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${movies.length} movies`)
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

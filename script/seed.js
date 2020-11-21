'use strict'

const db = require('../server/db')
const {User, Movie, Match, Like} = require('../server/db/models')

const moviesArray = [
  {
    title: 'Ratatouille',
    image:
      'https://sites.psu.edu/favoriteanimatedmovies/files/2017/03/ratatouille-25z0vgo.jpg',
    runtime: '120 minutes',
    genre: 'Kids',
    description:
      "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau."
  },
  {
    title: "She's All That",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51Iuj5srm4L._SX342_.jpg',
    runtime: '120 minutes',
    genre: "90's Teen",
    description:
      "A high school jock makes a bet that he can turn an unattractive girl into the school's prom queen. She's All That is your typical high school prom king and queen story and the run in defending the star status in the upcoming election."
  },
  {
    title: 'Lord of the Rings',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    runtime: '120 minutes',
    genre: 'Fantasy',
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore."
  },
  {
    title: 'Batman',
    image: 'https://i.ytimg.com/vi/8BIObSCQWLs/maxresdefault.jpg',
    runtime: '120 minutes',
    genre: 'Superhero',
    description:
      "The film reboots the Batman film series, telling the origin story of Bruce Wayne from the death of his parents to his journey to become Batman and his fight to stop Ra's al Ghul and the Scarecrow from plunging Gotham City into chaos."
  },
  {
    title: 'The Grudge',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/91/The_Grudge_movie.jpg',
    runtime: '120 minutes',
    genre: 'Horror',
    description:
      'The Grudge describes a curse that is born when someone dies in the grip of extreme rage or sorrow. The curse is an entity created where the person died. Those who encounter this supernatural force die, and the curse is reborn repeatedly, passing from victim to victim in an endless, growing chain of horror.'
  },
  {
    title: 'Inception',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/912AErFSBHL._SL1500_.jpg',
    runtime: '120 minutes',
    genre: 'Sci-Fi Thriller',
    description:
      "The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious."
  }
]

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
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
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

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
    title: "She's All That!",
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
  },
  {
    title: 'The Seven Samurai',
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Bonnie and Clyde',
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/99_bonnie_and_clyde_p.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Reservoir Dogs',
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/reservoir8hinpeters.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Airplane!',
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/97_Airplane.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: "Pan's Labyrinth",
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/96_Pans_Labyrinth.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Deer Hunter',
    image:
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/94_The_Deer_Hunter.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Big Hero 6',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia-186x117.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Pinocchio',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/01/2-pinocchio-186x117.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Snow White',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/01/1-snow-white-186x117.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Frozen',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/01/53-frozen-186x117.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Wreck-It Ralph',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/01/52-wreck-it-ralph.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Winnie the Pooh',
    image:
      'https://ohmy.disney.com/wp-content/uploads/2014/01/51-winnie-the-pooh.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Zootopia',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgKg3rROj1ggMNIzi5fwmgdZMWb_Eqam65g2rng8&s=0',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Little Mermaid',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJY1_IxOBW5CrCYTTVjB8mCH-wKbG68ccnkDU8adU&s=0',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Moana',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVwmM_XoaqiHDfGwHj9VA7ypNBMs4QlQiDBlwJx4&s=0',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Frozen II',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbuJdxKAs50gBUqqHqwOxZrocKBEBPsSKgFHPnW8&s=0',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Moonlight',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Joker',
    image:
      'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Us',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91jatiUZjtL._AC_SL1500_.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Bad Boys For Life',
    image:
      'https://cdn11.bigcommerce.com/s-yshlhd/images/stencil/1280x1280/products/22036/167222/full.badboysforlife_28858__15292.1589660739.jpg?c=2?imbypass=on',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'After',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Avengers: Endgame',
    image:
      'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Hill',
    image:
      'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Baby Driver',
    image:
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Project Power',
    image:
      'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Enormity of Life',
    image:
      'https://upload.wikimedia.org/wikipedia/en/4/43/Enormity_of_Life_Movie_Poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Big Sonia',
    image:
      'https://bigsonia.com/wp-content/uploads/IMDB_BigSoniaPoster27x40.jpeg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Dunkirk',
    image:
      'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Nightingale',
    image:
      'https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'This Gun For Hire',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Drive',
    image:
      'https://www.shortlist.com/media/images/2019/05/the-30-coolest-alternative-movie-posters-ever-2-1556670563-K61a-column-width-inline.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Replicas',
    image:
      'https://www.shortlist.com/media/images/2019/05/the-30-coolest-alternative-movie-posters-ever-2-1556670563-K61a-column-width-inline.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'One Year In Love',
    image:
      'https://cdn.shopify.com/s/files/1/0290/5663/0868/products/OneYearInLove_999x667_0a291051-f07b-4ceb-b37b-4c2a386683c4-134529_1200x.jpg?v=1598789683',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Jaws',
    image:
      'https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Archer',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Parasite',
    image:
      'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'A Star Is Born',
    image:
      'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Assassin',
    image:
      'https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Dora and The Lost City of Gold',
    image:
      'https://images.moviepostershop.com/dora-and-the-lost-city-of-gold-movie-poster-1000779403.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Burn',
    image:
      'https://cdn.shopify.com/s/files/1/0188/6986/products/BURN_poster1.13final_1024x1024.jpg?v=1552936407',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Bird of Prey',
    image:
      'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/birds-of-prey-and-the-fantabulous-emancipation-of-one-harley-quinn_framed1.jpg?v=1578326076',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Once Upon A Time In Hollywood',
    image:
      'https://mendolaart.com/wp-content/uploads/2019/07/Once-Upon-a-Time-in-Hollywood-Key-Art-864x1280.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    image: 'https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Back to the Future',
    image:
      'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/gdv2pu6io6ekpg5r8mta/back-to-the-future',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Rudy',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51plfB1lQzL._AC_SY450_.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'After Midnight',
    image:
      'https://lh3.googleusercontent.com/proxy/8ejhAYu47L_lFcp87xDA0PaH-AC3_mD4zL7O_vrAnm9aIAtGzCM2BZ4afr5-ipmkniXsRqogncjCTJZTv2ZfmrRxshGuYae35dLFxIm0sApqx5jB',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'IO',
    image:
      'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Apocalypse Now',
    image:
      'https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/171/202/171-202-101P/Apocalypse-Now-Retro-Movie-Poster-Vintage-Photography-Archive-Poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Pulp Fiction',
    image:
      'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_240x360_crop_center.progressive.jpg?v=1573588746',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Amelie',
    image:
      'https://www.jovoto.com/wp-content/uploads/2016/09/Amelie-movie-poster-1.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Star Wars',
    image:
      'https://imgc.allpostersimages.com/img/print/posters/star-wars-episode-iv-new-hope-classic-movie-poster_a-G-9385455-0.jpg?w=632&h=950',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Hamilton',
    image: 'https://sir.wdwnt.com/wdwnt.com/2020/06/hamilton-poster-7.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Midway',
    image:
      'https://cdn.shopify.com/s/files/1/0969/9128/products/Midway_2019_-_Ed_Skrein_-_Hollywood_War_WW2_Movie_Poster_0af83096-a476-4b09-841f-eec4a7fa52f2.jpg?v=1582782843',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Akira',
    image:
      'https://cdn.shopify.com/s/files/1/1057/4964/products/akira-vintage-movie-poster-original-1-sheet-27x41-8118.jpg?v=1581800494',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Titanic',
    image:
      'https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_styleA_original_film_art_1200x.jpg?v=1591898438',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Breakfast Club',
    image:
      'https://cdn.shopify.com/s/files/1/1416/8662/products/breakfast_club_1985_original_film_art_f_f9ed4617-238c-4365-a3e2-8c3152d831c4_1200x.jpg?v=1591481131',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Sunshine',
    image:
      'https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/no947-my-sunshine-minimal-movie-poster-chungkong-art.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Love Jones',
    image:
      'https://cdn.shopify.com/s/files/1/0510/3737/products/love-jones-movie-poster.jpg?v=1416005672',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: '2 Fast 2 Furious',
    image:
      'https://secure.img1-fg.wfcdn.com/im/14486573/compr-r85/4866/48663899/2-fast-2-furious-framed-autographed-movie-poster-framed-wall-art.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: '1917',
    image:
      'https://cdn.cinematerial.com/p/297x/haeorwgk/1917-british-movie-poster-md.jpg?v=1579166770',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'GoodFellas',
    image:
      'https://www.hollywoodmegastore.com/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/4/2/4234-4286.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Miranda',
    image:
      'https://cdn.shopify.com/s/files/1/0290/5663/0868/products/Miranda_666x999-min_1200x.jpg?v=1598791514',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Hacker',
    image:
      'https://www.arthipo.com/image/cache/catalog/poster/movie/759-1554/pfilm1491-hacker_7cf19a97-poster-movie-film-1000x1000.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'A Wrinkle In Time',
    image:
      'https://www.shockya.com/news/wp-content/uploads/disney-a-wrinkle-in-time-movie-poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Beauty and the Beast',
    image:
      'https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Risky Business',
    image:
      'https://images.photowall.com/products/51082/movie-poster-risky-business.jpg?h=699&q=85',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Brave',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51zXp3R9dpL._AC_.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Little Mermaid',
    image:
      'https://cdn.shopify.com/s/files/1/1523/1900/products/il_570xN.1540775324_c3rr_580x.jpg?v=1571496991',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Princess and the Frog',
    image:
      'https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Enchanted',
    image:
      'https://dyn1.heritagestatic.com/lf?set=path%5B2%2F2%2F4%2F6%2F3%2F22463557%5D&call=url%5Bfile%3Aproduct.chain%5D',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Coco',
    image:
      'https://i5.walmartimages.com/asr/6cfb35df-205f-4e68-aa26-676a3212837c_1.32b9a1ad3fcbc69b2daa5d62c7e3b652.jpeg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Aladdin',
    image:
      'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_6203_1024x1024@2x.JPG?v=1558522172',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Artemis Fowl',
    image:
      'https://www.disneyeveryday.com/wp-content/uploads/2020/03/Artemis-Fowl-movie-poster-330x489.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Peter Pan: Return to Neverland',
    image:
      'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/87266/88386/Return-To-Neverland-Original-movie-poster-buy-now-at-starstills__49778.1420569774.jpg?c=2',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Incredibles',
    image:
      'https://i5.walmartimages.com/asr/4d0d70ca-7443-4449-892b-6dc10a8fa38b_1.c1da46d3a912b7f0a31df916ea7c0637.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Onward',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71YwxjfhEiL._AC_SL1303_.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Bambi',
    image:
      'https://cdn.shopify.com/s/files/1/1416/8662/products/bambi_1940_R91_daybill_originakl_film_art_a_600x.jpg?v=1562542338',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'Lady and the Tramp',
    image:
      'https://media1.popsugar-assets.com/files/thumbor/_VtpwwRwkuPY0vZmK1mOvmr5xhk/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/23/664/n/1922283/d757d5715d5ffe9d6d1459.81019005_/i/Lady-Tramp-Live-Action-Remake-Movie-Poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  },
  {
    title: 'The Jungle Book',
    image:
      'https://allears.net/wp-content/uploads/2019/10/jungle-cruise-movie-poster.jpg',
    runtime: '120 minutes',
    genre: 'Sample Genre',
    description: 'This is a dummy description.'
  }
]

module.exports = moviesArray

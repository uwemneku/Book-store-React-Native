

export default function getRandomMovies(count: number) {
    const array = titles;
    const randomArray = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        console.log(randomIndex);
        randomArray.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return randomArray;
}

export const titles:string[] = [
    "Peter Rabbit",
    "Spongebob",
    "Dune",
    "Avengers",
    "The matrix",
    "Spider-man",
    "the greatest showman",
    "sound of music",
    "venom",
    "free guy",
    "black widow",
    "Big bang theory",
    "The office",
    "Superman",
    "Captain America",
    "Batman",
    "The grinch",
    "Time",
    "Social",
    "Titanic",
    "The dark knight",
    "The hobbit",
    "Friends",
    "Toy story",
    "Joker",
    "Annie",
    "The Devil wears prada",
    "The dark knight rises",
    "The simpsons",
    "Family guy",
    "Avatar",
    "Frozen",
    "Jurassic park",
    "Logan",
    "Up",
    "Ozark",
    "Pulp fiction",
    "Once upon a time in hollywood",
    "Zootopia",
    "Narnia",
    "Quantum of solace",
    "Kung fu panda",
    "Rambo",
    "Nemo",
    "E.T.",
    "Dumb and dumber",
    "Bourne",
    "Quarantine",
    "Wedding crashers",
    "Shrek",
  ]

  //create an array of movie titles

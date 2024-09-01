# Keeping Up With the Javascripts - Part 1: ES6

## Homework #12: Object Oriented Programming

Object-oriented Programming is a sort of computer programming in which programmers specify not only the data type of a data structure, but also the operations that may be performed on it.

As a result, the data structure is transformed into an object containing both data and functions. Additionally, developers have the ability to build connections between objects. Items, for example, can take up properties from other objects.

Developers may use object-oriented patterns to design modules that don't need to be updated every time a new type of object is added. A developer may easily build a new object inheriting many of the characteristics of current objects. Object-oriented applications will be easier to change and more versatile in the future as a result of this.

## Project: Favorite TV Show

I suggest a system where you may display a list of TV series, view every show's details, the episodes you have and add shows to your own list of favourites.

### User Stories

* As a user, I'd want to look through the available TV series.
* As a user, I'd like to view the specifics of a TV program.
* As a user, I'd want to see the episodes of a TV show.
* As a user, I'd like to add a TV program to my favorites list.
* As a user, I'd want to delete a TV show from my favorites list
* As a user, I'd want to see a list of my favorite television shows.


### Pseudocode

```
class User {
    firstname,
    lastname,
    email,
    password
    favorites list of shows
    ---
    addFavorite()
    removeFavorite()
    getFavorites()
}

class Show {
    title,
    description,
    genre,
    list of episodes
    ---
    addEpisode()
    removeEpisode()
    getEpisodes()
}

class Episode {
    name,
    description,
    airing date,
    duration,
    episode number,
    episode season
}

user = create User('fname', 'lname', 'user@mail.com', 'pw')

show1 = create Show('title 1', 'desc', 'drama')
show2 = create Show('title 2', 'desc', 'action')

list of shows = [show1, show2]

episode1 = create Episode('name1', 'desc', etc)
episode2 = create Episode('name2', 'desc', etc)

show1.addEpisode(episode1)
show1.addEpisode(episode2)

user.addFavorite(show1)
user.addFavorite(show2)
user.removeFavorite(show1)

user.getFavorites()
```
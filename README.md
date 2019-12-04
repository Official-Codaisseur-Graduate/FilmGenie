# Filmgenie.com

### Intro / Project Overview

FilmGenie is a film rights management application that aims to connect (independent) film producers and rights owners directly to cinemas, movie festivals, as well as individuals.

When a cinema or festival wants to play a movie, FilmGenie makes sure this is possible through its extensive database that is built by collecting information from different film agents.

A film agent is someone who represents one or more existing films and seeks an audience. This can be a direct or indirect right owner, a film festival or a cinema (group).

The app will have two types of users that will be able to create an account and enter different type of data:

1. Film agent (Right Owner/Producer/Distributor/Cinema/Cinema Group/Film Festival)
2. Cinema go-er

FilmGenie will function in partnership with [FilmFetch](https://filmfetch.net), a digital mode of transport that is specifically aimed at sending DCP films over the internet. Once the request is done onFilm Genie, FilmFetch will take care of the delivery of the movie files.

Our application will use KDMs (Key Delivery Message) in order to efficiently target one playback device that gets one version of the movie to play on for a limited duration, which could be hours, weeks, or months. Read more about KDM [here](https://cinepedia.com/security/key-delivery-message/).

### Contributors

- [Ke Zhang](https://github.com/Im-perfect)
- [Marloes Verdonk](https://github.com/marloesverdonk)
- [Oana Carlescu](https://github.com/oanacodes)
- [Cynthia Meiring]()
- [Alastair Haigh]()
- [Lavanya Jayapalan]()

### Related repos

- Backend is available but not accesible from the client-side yet. But consult with the API builder (Peter Severens) to be sure.

### How to set up

Clone this repository with

```
git clone
```

Install dependencies and run the app

```
npm install
npm run start
```

GitHub Project

- [Group 1](https://github.com/Official-Codaisseur-Graduate/FilmGenie/projects/1)
- [Group 2](https://github.com/Official-Codaisseur-Graduate/FilmGenie/projects/2) --> You can start here to track your progess.

Physical documents (actual paper document and powerpoint file)

- Consult the project owner (Peter van Vogelpoel) --> Important for figuring out the whole site map.

### What is working:

**Routing**:

- **IMPORTANT!** See file `Routes.js` for all the possible routes.
- All files (page container components) are located with the path that is the same as the route path (file path = route path).

### To do:

**Next step -> Start with Right Owner (new and registered)**

- A right owner first signs up. (http://localhost:3000/filmAgent/newAgent/NewRightOwner)
- Then the right owner logs in and is directed to the right owner page instead of having to click a separate button for this. (maybe skip this step for now because there is no authentication process yet, talk to Jeroen and Peter Severens about this) (http://localhost:3000/filmAgent/registeredAgent/rightOwner/RightOwner)
- When the right owner clicks 'details', it should show a page where information is already filled in (from the signup form) and the right owner is able to change and save this information. (http://localhost:3000/filmAgent/registeredAgent/rightOwner/RightOwnerDetails)
- When a right owner clicks 'agents', it should show a page where you can add Administrators, Editors and Readers. The first administrator should be the right owner and it should already be filled in (Administrator). (http://localhost:3000/filmAgent/registeredAgent/rightOwner/RightOwnerAgents)
- When a right owner clicks 'films', it should show a page where his films are displayed. Rights for films can be added -> this is done by searching the film for which you need to add the right. (http://localhost:3000/filmAgent/registeredAgent/rightOwner/RightOwnerFilms).
- The 'details' button, for the displayed films can be clicked to retrieve data from IMDB.com. (the server-side endpoint to retrieve data from IMDB, does not exist yet)
- Talk to the project owner to make sure what he wants to do with the other fields.

**If the backend is working or partially working**

- Make API calls to fetch or put data
- Currently due to CORS policy issue, none of the server-side endpoints are accessible from the frontend. Peter is working to resolve this issue.
  -As a temporary fix we used fetch-mockapi to display hard-coded data on the films searched by name endpoint in fetchFilmDetails.js in action folder.
  -The CORS issue can be observed in loadRightsOwnerFilmList.js, which tries to load all films for a right owner.
  Always consult with the API maker: Peter Severens.

**If use dummy data**

- Try to use Redux to make data flow dynamic. Right now, in this version, some data is hard-coded within the forms. Implementation of Redux for the rights owners pages is in progress (actions and reducers are made). Not finished and tested yet.

**Check if the pages are all working with the right data flow**

- Talk to the project owner if some data/fields is not clear.

**Clean up CSS classes**

- Some jsx(html)/css is written really fast to make an example page for demo. They can be adjusted and written in a way that suits the project owner's or your vision.

**User input validation**

- User input validation is very important in this app (with error messages).

**Animated transition**

- This app uses many components and between the components there should be an animated transition.

### Known issues:

- CORS issues as mentioned above.
- Be aware, in some forms, some displaying fields look like input fields in the powerpoint. We marked them with letter D on the paper version of documents.
- Be aware, in some forms, a lot of different names are asked (fullname, first name and last name). The project owner didn't really decide on this yet, but he is open for suggestions.

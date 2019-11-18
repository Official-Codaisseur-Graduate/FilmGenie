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


### Related repos
- Backend was not available yet. But consult with the api builder(Peter Severens) to be sure.

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
  - **IMPORTANT!** See file ```Routes.js``` for all the possible routes.
  - All files(page container components) are located with the path that is the same as the route path (file path = route path).

### To do:

**Next step -> Start with Right Owner (new and registered)**

**If the backend is working or partially working** 
  - Make api calls to fetch or put data. Always consult with the api maker: Peter Severens.

**If use dummy data**
  - Try to use redux to make data flow dynamic. Right now at this version, some data is hard-coded within the forms.

**Check if the pages are all working with the right data flow**
  - Talk to the project owner if some data/fields is not clear.
  
**Clean up CSS classes**
  - Some jsx(html)/css is written really fast to make an example page for demo. They can to be adjusted and written in a way that suits the project owner's or your invision.
  
**User input validation**
  - User input validation is very important in this app (with error messages).
  
**Animated transition**
- This app uses many components and between the components there should be an animated transition

### Known issues:
  - Be aware, in some forms, some displaying fields look like input fields in the powerpoint. We marked them with letter D on the paper version of documents.

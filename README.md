# MP #2: New Clear REACTive App

## Deployed Link
https://lillianjin.github.io/498mp2/#/

## Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.
  - TMDB (https://www.themoviedb.org/documentation/api)
  - Spotify (https://developer.spotify.com/web-api/)
  - Pokemon (https://pokeapi.co/)
  - Marvel (https://developer.marvel.com/)
  - NASA (https://api.nasa.gov/index.html)

Note that you may need to create an account and/or acquire an API key for some of the APIs.
Additionally, the API you are working with may become temporarily unavailable.
If/when this happens, it doesn't mean you are blocked from working on the MP.
You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
This is also a good opportunity to think about how your app should handle errors.

Your app should have the following features:
  - **A list view**:  where users can input a search query and the app returns a list of results that match the query (i.e. searching movies or albums). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
  - **A gallery view**: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
  -  **A detail view**: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects.

# Assignment 1 - ReactJS app.

Name: Gowriswarup Kailas Perumal

## Overview.

This Assignment is a React App for displaying a Movies App Database.

### Features.

- Shows the currently playing movies
- Shows the currently top rated movies
- Shows the currently trending movies
- Shows the upcoming movies
- Shows the list of popular actors
- Attempt at Auth0 authentication

## Setup requirements.

Setup and initial configuration after cloning repo includes the following for optimal functionality:

1.  run the following command in the integrated terminal

    '''
    npm install
    '''
    
    in the integrated terminal to install the prerequisites.

2.  The TMDB API is used for gathering the movies app data. An API Key that is used to authenticate the API requests can be collectd using the method below.
    Signup for an account at https://www.themoviedb.org/
    Log in to your account. To get a key, follow this sequence:

        '''Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details'''
        
    
    <img width="1286" alt="Screenshot 2021-12-15 at 17 44 32" src="https://user-images.githubusercontent.com/94531892/146237948-1948565f-08de-436b-9538-20d516cefeef.png">

    And once approved, in the project base folder, create a new file called .env with the following content:
    
    '''
    REACT_APP_TMDB_KEY= <- your API key value ->
    '''

3.  To install the auth0 prerequisited, run the following command in the integrated terminal

    '''
    npm install @auth0/auth0-react
    '''

## API endpoints.

- Now Playing Movies - discover/movie
- Top Rated Movies - movie/:id
- Trending Movies -
- Upcoming Movies
- Popular Actors
- Auth0 authentication prior to landing page

## App Design.

### Component catalogue.

![](./images/storybook.png)

### UI Design.

Home Page Rendering
<img width="1436" alt="Screenshot 2021-12-15 at 17 37 14" src="https://user-images.githubusercontent.com/94531892/146236781-5e4cd7c1-8fd8-49d2-976d-dc150cff43c8.png">

Trending Movies Page
<img width="1440" alt="Screenshot 2021-12-15 at 17 38 05" src="https://user-images.githubusercontent.com/94531892/146236915-070e8b37-c9e3-4709-a9cf-143d93b00e38.png">

Now Playing Movies Page
<img width="1440" alt="Screenshot 2021-12-15 at 17 38 28" src="https://user-images.githubusercontent.com/94531892/146236971-9ae688f4-ada7-4b91-99a7-cc4f8a4922ec.png">

Upcoming Movies Page
<img width="1440" alt="Screenshot 2021-12-15 at 17 38 59" src="https://user-images.githubusercontent.com/94531892/146237053-d5722007-ac82-47b2-bbf2-6eb3593ab693.png">


### Routing.

//intention for the contents apart from the last two(login/logout) to be protected, however, still to be implemented funtionally.

    "Home", path: "/"
    "Favorites", path: "/movies/favorites"
    "Top Rated", path: "/movies/topRated"
    "Now Playing", path: "/movies/nowPlaying"
    "Trending", path: "/movies/trending"
    "Upcoming", path: "/movies/upcoming"
    "Popular Actors", path: "/person/popular"
    "Login", path: "/login"
    "Logout", path: "/logout"

## Independent learning (If relevant).

1. https://developers.themoviedb.org/3/getting-started/introduction: for additional
   endpoint refernces.
2. Auth0 Authentication attempt using Auth0 tutorials for integration with node.js from:
   https://auth0.com and
3. https://medium.com/@jaypatel32157/using-auth0-to-secure-your-react-web-app-2d551d312d1

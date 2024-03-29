[![Linkr Banner][banner]][banner-url]

## Summary

Full Stack Development Project — Front end

- [**Preview the App»**](https://linkr-fullstack.vercel.app/)
- [**Browse JSX code»**](https://github.com/NivaldoFarias/linkr-frontend/tree/main/src)
- [**Back end code»**](https://github.com/NivaldoFarias/linkr-backend#readme)
  
## Built With

![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Overview

The purpose of this Full Stack project was to create a simple, yet refined, web application to post and share links, using frameworks such as [React](https://reactjs.org/), [Nodejs](https://nodejs.org/) and [Postgresql](https://www.postgresql.org/).

To summarize, there are a few key components that made building this project a challenge:

- The given prompt was split in two parts: in the first week, there were a set of **requirements** to be met, and in the second week, there were a set of **features** to be implemented upon the initial build. In both weeks, these requirements/features were presented as **_Sprints_**, which were achieved by using sprint planning tools such as [Trello](https://trello.com/).
- As a team, we had to research, plan out, and implement the features of the application from the ground up, both Back End and Front End. As a result, multiple team-work coordination skills were required, as well as the ability to communicate with the team and the client _(in this case, the client is the user)_
- As a concept, the platform required a fully-featured, user-friendly interface, with a robust database and website enviroment. Hence, the project was refactored twice, to acommodate the new requirements.

<!-- Features -->
## Features

- Main page
  - [x] Timeline displaying the most recent posts from the users that the user is following.
  - [x] Trending sidebar displaying the most engaged hashtags.
- Posts
  - [x] Each post has a sections for its number of likes, comments, shares.
  - [x] Hashtags are highlighted and interactive.
  - [x] Each of these sections is interactive, and can be expanded by clicking or hovering on the icon.
  - [x] The post content is editable and deletable only by the user.
- Comments
  - [x] Comments are always displayed from the most recent to oldest.
  - [x] A comment sent by the same user that created the post has a unique icon.
  - [x] A comment sent by an user that the user is following has a unique icon.
- Reshares
  - [x] A reshared post is visible to users who do not follow the post's author.
  - [x] Each share has a unique header, displaying the user that shared the post.
- Hashtags
  - [x] Aswell as interactive, the hashtags are constantly updated, taking into account both the number of posts and the number of likes on each of them.
  - [x] Each hashtag has a unique page containing all posts with that hashtag.

<!-- Study Playlist & Contact -->
## Study Playlist & Contact

In this section I included all Youtube content I used or refered to while studying for this project, aswell as my main contact mediums. Keep in mind that most of these videos contain information that was not previously studied during class, which may affect some parts of the code that contain these _extras_.

[![Youtube shield][youtube-shield]][youtube-url]
[![Linkedin shield][linkedin-shield]][linkedin-url]
[![Slack shield][slack-shield]][slack-url]

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/nivaldofarias/
[slack-shield]: https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white
[slack-url]: https://driventurmas.slack.com/team/U02T6V2D8D8/
[youtube-shield]: https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white
[youtube-url]: https://youtube.com/playlist?list=PLoZj33I2-ANTWqU331l3ZGlZV8I7rr5ZN
[contrib-graph]: https://github.com/NivaldoFarias/linkr-frontend/graphs/contributors
[contrib-rocks]: https://contrib.rocks/image?repo=NivaldoFarias/linkr-frontend
[banner]: https://github.com/NivaldoFarias/linkr-frontend/blob/main/src/assets/.github/linkr-showroom-alt.png?raw=true
[banner-url]:https://github.com/NivaldoFarias/linkr-frontend/blob/main/src/assets/.github/linkr-showroom-alt.png

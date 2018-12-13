# Tempo Technical Exercise

## Important Details

To start, run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The important pieces of code can be found in src/Components.

## Approach

To start, I used create-react-app as a boilerplate for the React app. After looking at the REST endpoints provided, I searched for a way to store the data from the URLs and I found that Axios worked well with React. First, I created components to display the info from the team and user inputs to figure out how to using Axios.
Once I could display the basic info on the webpage, I then worked on displaying the specific information for each team by creating a Team component to render the lead and member IDs using the team ID.
Starting with the lead ID, I made a Lead component and tried to display the user info by using another axios.get call to the specific user endpoint. However, I encountered a CORS error, which I learned occurs when making calls to different domains. I struggled to try and find a way around this problem, since I needed the user ID from the team endpoint to access the specific user endpoint. Since I was able to get all the users using Axios, which included all the required info for the user, I decided to simply store the info of all the users, then find the specific user using the lead ID and only display the info for that user.
For the team members, I thought that I would need to create a new Members component since the member ids were stored in an array. However, I eventually decided to use the map function to render a User component for each member ID in the array.
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const GitHubData={
  "login": "vidhiut",
  "id": 124547118,
  "node_id": "U_kgDOB2xwLg",
  "avatar_url": "https://avatars.githubusercontent.com/u/124547118?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vidhiut",
  "html_url": "https://github.com/vidhiut",
  "followers_url": "https://api.github.com/users/vidhiut/followers",
  "following_url": "https://api.github.com/users/vidhiut/following{/other_user}",
  "gists_url": "https://api.github.com/users/vidhiut/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vidhiut/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vidhiut/subscriptions",
  "organizations_url": "https://api.github.com/users/vidhiut/orgs",
  "repos_url": "https://api.github.com/users/vidhiut/repos",
  "events_url": "https://api.github.com/users/vidhiut/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vidhiut/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2023-02-06T03:54:21Z",
  "updated_at": "2024-05-27T10:16:41Z"
}

app.get('/newroute', (req,res)=>{
    res.send("login dun is working")
})

app.get('/home', (req,res)=>{
    res.send("<h1> welcome to my website</h1>")
})

app.get('/GitHub', (req,res)=>{
  res.send(GitHubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
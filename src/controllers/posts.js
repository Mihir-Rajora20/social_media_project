const {Posts, Users}= require('../db/models')
// const Posts= require('../db/models').Posts
// const Users=require('../db/models').Users


async function createNewPost(userId, title, body)
{
  console.log("Creating new post")
   const post=await Posts.create(
        {
          title, body, userId
        })
        
    return post
}

async function findAllPosts(query)
{
    const posts= await Posts.findAll({
        include: [Users]
    })
    return posts
}

module.exports={
createNewPost, 
findAllPosts
}


/* async function task() {
    console.log(
      await createNewPost(
        1,
        'This is the fourth post',
        'THis is the fourth body post'))
  }
  
  task()
  */
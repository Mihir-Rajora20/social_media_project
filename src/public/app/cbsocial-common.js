$(()=>
{
    // helps load navbar.html
    $('#navbar').load('../components/navbar.html',loginIfNeeded)
    /* we call loginIfNeeded() as a callback function to load since 
    the html takes time to load. 
    if the function is executed before loading the html
    it will not function properly.  */
    $('#footer').load('../components/footer.html')
    $('#content').load('../components/all-posts.html') // contains its own scripts. 
//    loadArticles();

    
})

function loginIfNeeded()
{
     window.currentUser= window.localStorage.user? JSON.parse(window.localStorage.user): null;
    if(!currentUser)
    {
        $.post('/api/users', {}, (user)=>
        {
            if(user)
            {
                console.log("registered as", user.username)
                // we will store user in local storage
                window.localStorage.user= JSON.stringify(user);
                currentUser=user;
//                console.log(currentUser)
                $('#nav-username').text(user.username)
//                console.log("current user username is " +currentUser.username)

            }

        })
    }
    else 
    {
        console.log("Resuming session as ", currentUser.username);
        console.log(currentUser)
        $('#nav-username').text(currentUser.username) 
        console.log("current user username is " +currentUser.username)
        console.log("Nav text is "+ $('#nav-username').text())
    }
}
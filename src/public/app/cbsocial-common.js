$(()=>
{
    // helps load navbar.html
    $('#navbar').load('../components/navbar.html')
    $('#footer').load('../components/footer.html')

    loginIfNeeded();
})

function loginIfNeeded()
{
    let currentUser= window.localStorage.user? JSON.parse(window.localStorage.user): null;
    if(!currentUser)
    {
        $.post('/api/users', {}, (user)=>
        {
            if(user)
            {
                console.log("registered as", user.username)
                // we will store user in local storage
                window.localStorage.user= JSON.stringify(user);
            }

        })
    }
    else 
    {
        console.log("Resuming session as ", currentUser.username);
    }
}
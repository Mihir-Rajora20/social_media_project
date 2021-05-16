let navlinks= $('.navbar-nav .nav-link') // get all the links present in the navbar class

navlinks.click((ev)=>
{
    let componentUrl= `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})
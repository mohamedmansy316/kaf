let AllServices = document.querySelectorAll('.service-img');
if(AllServices){
    AllServices.forEach(e => {
        const imgUrl = e.getAttribute("data-img");
        e.style.backgroundImage = `url(${imgUrl})`;
    });
}

// Make All Services Options checked when click on Select All
let ServicesCheckBtn = document.querySelector('#servicesCheck');
let ServicesCheckLabel = document.querySelector('#servicesCheckLabel');
let ServicesList = document.querySelectorAll('.service-check');
ServicesCheckBtn.addEventListener('click', function(){
    ServicesCheckLabel.classList.add('active');
    ServicesList.forEach(e =>  e.checked = true)
})


// Copy Current Url Link
const copyLinkButton = document.querySelector('.url-copy');
const notification = document.querySelector('.noto');
const currentUrl = window.location.href;

copyLinkButton.addEventListener('click', function() {
navigator.clipboard.writeText(currentUrl).then(function() {
    notification.classList.add('active');
    setTimeout(function(){
    notification.classList.remove('active');
    }, 3000)
}, function() {
});
});


// Change Body to Dark Mode
const darkModeButton = document.querySelectorAll('.dark-mode-switch');
const body = document.body;
darkModeButton.forEach(function(button){
    button.addEventListener('click', function() {
        const isDarkMode = body.style.backgroundColor === 'var(--dark-background)';
        body.style.backgroundColor = isDarkMode ? 'var(--light-background)' : 'var(--dark-background)';
        body.classList.toggle("dark-mode");
    });
})

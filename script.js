var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



document.getElementById("contact-form").addEventListener("submit",(event)=> {
    event.preventDefault();
    let name= document.getElementById("input-name").value;
    let email= document.getElementById("input-email").value;
    let message= document.getElementById("input-message").value;
    location.href = "mailto:"+"saiprasadpalivela@gmail.com"+'?cc='+'&subject='+email+'&body='+message;

//     if(name==" " || email==" " || message==" "){
//         return;
//     }
//     else{
//     console.log(name,email,message);
//   Email.send({
//     Host :" smtp.elasticemail.com",
//     SecureToken:"4E175877606C2D63BD084A8C82D0A5C6FFBB22D65E8D19EF60BB2EBF6A40DD63E9701DB21F7BF88AE53C8F9352F4E141",
//     Username: "saiprasadpalivela@gmail.com",
//     UseDefaultCredentials:false,
//     Password: "joel123$*",
//     EnableSsl:true,
//     To: 'saiprasadpalivela@gmail.com',
//     From: "saiprasadpalivela@gmail.com",
//     Subject: "Sending Email using javascript",
//     Body: `Name: ${name} email: ${email} message: ${message}`,
//   })
//     .then(function (message) {
//         console.log(message);
//       alert("message sent successfully")
//     });
// }
});

// document.getElementById("contact-form").onsubmit(function(event){
// event.preventDefault();
// sendEmail();
// });

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
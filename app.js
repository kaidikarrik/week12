const images = ['1.jpg', '2.JPG', '3.JPG', '4.JPG'];
const targetImage = document.querySelector('.my_image img');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {
        if (i === images.length - 1) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);
});

const fnameSpan = document.querySelector("#fname");
const lnameSpan = document.querySelector("#lname");
const emailspan = document.querySelector("#email");
const skillsList = document.querySelector("#skills");
const phonespan = document.querySelector("#phone");
const agespan = document.querySelector("#age")


window.onload = () => {

    fetch('person.json')
    .then(response => response.json())
    .then(data => {

        fnameSpan.textContent = data.fname;
        lnameSpan.textContent = data.lname;
        emailspan.textContent = data.email;
        phonespan.textContent = data.phone;
        agespan.textContent = data.age;

        for( let i = 0; i <data.skills.length; i ++ ) {

        let li = document.createElement('li');
        li.innerHTML = data.skills [i];

        skillsList.appendChild(li)
    }

})
}
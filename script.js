const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

///

data.forEach(element => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('cat');

    const newHeading = document.createElement('h2');
    newHeading.textContent = element.class;
    newHeading.classList.add('cat__heading');

    const newImg = document.createElement('img');
    console.log(element);
    newImg.src = element.photo.src;
    newImg.alt = element.photo.alt;
    newImg.classList.add('cat__img');

    const newP = document.createElement('p');
    newP.textContent = (element.availability) ? "В наличии!" : "Нет в наличии =(";
    newP.classList.add('cat__availability');

    newDiv.appendChild(newHeading);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);
    content.appendChild(newDiv);
})

async function getData() {
    //Obtener los datos del endpoint con fetch
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
    const dataContainer = document.querySelector('#dataContainer');
    dataContainer.classList.add('row');
    data.results.forEach(item => {

        //mostrar la especie del personaje        
        let especie = "";
        if (item.species === "Human") {
            especie = "";
        }
        //mostrar el nombre de cada personaje
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('col-lg-3');
        div.classList.add('m-1');

        div.innerHTML = `<h2>${especie} ${item.name}</h2>`;
        dataContainer.appendChild(div);

        //colocar una imágen de cada personaje
        const img = document.createElement('img');
        img.src = item.image;
        div.appendChild(img);

        //mostrar el género de cada personaje
        const p = document.createElement('p');
        let sexo = "Desconocido";
        switch (item.gender) {
            case "Male":
                sexo = "Masculino";
                break;
            case "Female":
                sexo = "Femenino";
                break;
            default:
                break;
        }
        p.textContent = `Sexo: ${sexo}`;
        div.appendChild(p);



    });
}

getData();
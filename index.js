'strict mode'
/*API SEARCH*/
let url_standard = "https://api.github.com/users/poissonfou"

async function getInfo(url_par){
    try{
    if(url_par == "https://api.github.com/users/poissonfou"){
        url = "https://api.github.com/users/poissonfou"
    }
    else{
        url = `https://api.github.com/users/${url_par}`
    }


    const info_api = await fetch(url)
    const data = await info_api.json()
    
    cardPhoto = document.querySelector(`.user-photo`)
    cardName = document.querySelector(`.name`)
    cardFollower = document.querySelector(`.followers`)
    cardFollowing = document.querySelector(`.following`)
    cardRepos = document.querySelector(`.reps`)
    cardLocation = document.querySelector(`.loc`)
    cardCompany = document.querySelector(`.company`)

    if(data.company != null){
        cardCompany.textContent = data.company 
    }else{
        cardCompany.textContent = "Não disponível"
    }

    if(data.location != null){
        cardLocation.textContent = data.location
    } else{
        cardLocation.textContent = "Não disponível"
    }

    cardName.textContent = data.login;
    cardFollower.textContent = `${data.followers} Seguidores`;
    cardFollowing.textContent = `${data.following} Seguindo`;
    cardRepos.textContent = `${data.public_repos} Repositórios`;
    cardPhoto.setAttribute("src", data.avatar_url);
    }
    catch(e){
        alert("Erro ao recuperar informações do perfil");
    } 
}

getInfo(url_standard);

function userPrompt(){
    const value = prompt("Entre o seu usuário");

    if(!value){
        alert("Por favor, entre um usuário")
    } else{
        getInfo(value);
    }

}

const enter_user = document.querySelector(`.activate-input`)
enter_user.addEventListener('click',userPrompt);

/*CHANGE COLOR FUNCTION */
function changeColor(){
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;

    const back_card = document.querySelector(`.card-background`);
    back_card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

const button = document.querySelector(`.btt-background`);
button.addEventListener("click", changeColor);
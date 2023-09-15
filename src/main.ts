import './style.css'

const app = document.querySelector('#app') as HTMLDivElement;

const form = document.createElement('div')
form.classList.add("form")
form.setAttribute('id', 'form')

const zone_imput = document.createElement('div')
zone_imput.classList.add("zone_imput")
zone_imput.setAttribute('id', 'zone_imput')

const solo_imput = document.createElement('div')
solo_imput.classList.add('solo_imput')
solo_imput.setAttribute('id', 'solo_imput')

const nom = document.createElement('input')
nom.setAttribute("type","text")

const label = document.createElement('label')
label.innerText = 'nom'

const lien_image= document.createElement('input')
lien_image.setAttribute("type","text")

const label1 = document.createElement('label')
label1.innerText = 'lien image'

const duree= document.createElement('input')
duree.setAttribute("type","text")

const label2 = document.createElement('label')
label2.innerText = 'duree'

const note = document.createElement('input')
note.setAttribute("type","text")

const label3 = document.createElement('label')
label3.innerText = 'note'

const inputBoxNom = document.createElement('div')
inputBoxNom.classList.add("solo-input")
inputBoxNom.appendChild(label)
inputBoxNom.appendChild(nom)

const inputBoxlienImage = document.createElement('div')
inputBoxlienImage.classList.add("solo-input")
inputBoxlienImage.appendChild(label1)
inputBoxlienImage.appendChild(lien_image)

const inputBoxDuree = document.createElement('div')
inputBoxDuree.classList.add("solo-input")
inputBoxDuree.appendChild(label2)
inputBoxDuree.appendChild(duree)

const inputBoxNote = document.createElement('div')
inputBoxNote.classList.add("solo-input")
inputBoxNote.appendChild(label3)
inputBoxNote.appendChild(note)

zone_imput.appendChild(inputBoxNom)
zone_imput.appendChild(inputBoxlienImage)
zone_imput.appendChild(inputBoxDuree)
zone_imput.appendChild(inputBoxNote)

const addButton = document.createElement('input')
addButton.setAttribute('type', 'submit')
addButton.value = "Ajouter"

form.appendChild(zone_imput) 
form.appendChild(addButton) 
app.appendChild(form)

const titreListeRecettes = document.createElement('h2')
titreListeRecettes.innerText = "Mes Recettes"
app.appendChild(titreListeRecettes)

const listeRecette = document.createElement('div')
listeRecette.classList.add("liste-recette")
app.appendChild(listeRecette)


addButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3030/marmitops", {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
            nom: nom.value,
            lien_image: lien_image.value,
            duree: duree.value,
            note: note.value
        }),
    })
    console.log(response)
    const data = await response.json()
    console.log(data)

    ajouterUneRecette(nom.value, lien_image.value, duree.value, note.value)
})

async function init(){
    // fetch GET recipes
    const res = await fetch("http://localhost:3030/marmitops")
    // ajout des recettes dans le DOM 
    const myresult = await res.json();
    console.log(myresult)
    myresult.forEach( (element: any) => {
        console.log(element)  
        ajouterUneRecette(element.nom, element.lien_image, element.duree, element.note)
    });
  } 

  init()

  function ajouterUneRecette(nom: string, lien: string, duree: string, note: string){
    const recette = document.createElement("div") as HTMLDivElement;
    recette.classList.add('recette')
    const labelrecette = document.createElement("label") as HTMLLabelElement;
    labelrecette.innerText = nom;
    
    const labelnote = document.createElement("label") as HTMLLabelElement;
    labelnote.innerText = note
    
    const labelduree = document.createElement("label") as HTMLLabelElement;
    labelduree.innerText = duree
    
    const imageRecette = document.createElement('img') as HTMLImageElement
    imageRecette.classList.add('imageRecette')
    imageRecette.setAttribute('src', lien)
    
    const inforecette = document.createElement("div")
    inforecette.setAttribute('class', "infos-recette")

    inforecette.appendChild(labelrecette)
    inforecette.appendChild(labelnote)
    inforecette.appendChild(labelduree)
    
    recette.appendChild(inforecette)
    recette.appendChild(imageRecette)

    listeRecette.appendChild(recette)
  }
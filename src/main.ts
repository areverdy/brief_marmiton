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


addButton.addEventListener("click", () => {
    const recette = document.createElement("div") as HTMLDivElement;
    recette.classList.add('recette')
    const labelrecette = document.createElement("label") as HTMLLabelElement;
    labelrecette.innerText = nom.value
    
    const labelnote = document.createElement("label") as HTMLLabelElement;
    labelnote.innerText = note.value
    
    const labelduree = document.createElement("label") as HTMLLabelElement;
    labelduree.innerText = duree.value
    
    const imageRecette = document.createElement('img') as HTMLImageElement
    imageRecette.setAttribute('src', lien_image.value)
    
    const inforecette = document.createElement("div")
    inforecette.setAttribute('class', "infos-recette")

    inforecette.appendChild(labelrecette)
    inforecette.appendChild(labelnote)
    inforecette.appendChild(labelduree)
    
    recette.appendChild(inforecette)
    recette.appendChild(imageRecette)

    listeRecette.appendChild(recette)
})

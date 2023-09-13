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


const inputBoxNom = document.createElement('gftrjyfj')
inputBoxNom.classList.add("toto")
inputBoxNom.appendChild(label)
inputBoxNom.appendChild(nom)

const inputBoxlienImage = document.createElement('div')
inputBoxlienImage.appendChild(label1)
inputBoxlienImage.appendChild(lien_image)

const inputBoxDuree = document.createElement('div')
inputBoxDuree.appendChild(label2)
inputBoxDuree.appendChild(duree)

const inputBoxNote = document.createElement('div')
inputBoxNote.appendChild(label3)
inputBoxNote.appendChild(note)

zone_imput.appendChild(inputBoxNom)
zone_imput.appendChild(inputBoxlienImage)
zone_imput.appendChild(inputBoxDuree)
zone_imput.appendChild(inputBoxNote)

const addButton = document.createElement('input')
addButton.setAttribute('type', 'submit')
addButton.value = "Ajouter"

solo_imput.appendChild(form)
form.appendChild(zone_imput) 
form.appendChild(addButton) 
app.appendChild(form)
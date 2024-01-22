let obj = [
]

let btn = document.getElementById("btn")
btn.addEventListener("click",addPlayer)

function addPlayer(e){
    e.preventDefault()
 let fName =  document.getElementById("firstName")
 let lName =  document.getElementById("lastName")
 let country =  document.getElementById("country")
 let score =  document.getElementById("score")
let dte = new Date()
let v = dte.getDate()+"-"+(dte.getMonth()+1)+"-"+dte.getFullYear()
obj.push({
    "name":fName.value+" "+lName.value,
    "time":v,
    "country":country.value,
    "score":score.value
})
fName.value="";
lName.value=""
country.value=""
score.value=""

obj.sort((a,b)=> Number(b.score)-Number(a.score))
console.log(obj);

let list = document.getElementById('player-list')

list.innerHTML = ''

for (let i = 0; i < obj.length; i++) {
    const player = obj[i];

    const liEl = document.createElement('li')
    const nme = document.createElement('span')
    const ctry = document.createElement('span')
    const scre = document.createElement('span') 

    const incBtn = document.createElement('button')
    const dcrBtn = document.createElement('button')
    const rmvBtn = document.createElement('button')
    

incBtn.setAttribute('onclick', `incBtnHandler(${i})`)
dcrBtn.setAttribute('onclick', `dcrBtnHandler(${i})`)

rmvBtn.setAttribute("onclick", `removeData(${i})`)

 incBtn.classList.add("plus");
 dcrBtn.classList.add("minus");
 rmvBtn.classList.add("remove");
 liEl.classList.add("list");
 nme.classList.add("name");
 ctry.classList.add("country");
 scre.classList.add("score")

    incBtn.innerText = "+5";
    dcrBtn.innerText = "-5";
    rmvBtn.innerText = "X";
    scre.innerText = player.score
    ctry.innerText = player.country
    nme.innerText = player.name

    liEl.append(nme, ctry, scre, rmvBtn, incBtn, dcrBtn)
    list.append(liEl)
}
}

function incBtnHandler (index) {
    obj[index].score = Number(obj[index].score)+5
    refreshList()
}


function dcrBtnHandler (index) {
    obj[index].score= Number(obj[index].score)-5
    refreshList()
}

function removeData (index){
    obj.splice(index, 1);
    refreshList()
}

function refreshList () {

    let list = document.getElementById('player-list')
    obj.sort((a,b)=> Number(b.score)-Number(a.score))
    list.innerHTML = ''
    
    for (let i = 0; i < obj.length; i++) {
        const player = obj[i];
    
        const liEl = document.createElement('li')
        const nme = document.createElement('span')
        const ctry = document.createElement('span')
        const scre = document.createElement('span') 
    
        const incBtn = document.createElement('button')
        const dcrBtn = document.createElement('button')
        const rmvBtn = document.createElement('button')
        
    
    incBtn.setAttribute('onclick', `incBtnHandler(${i})`)
    dcrBtn.setAttribute('onclick', `dcrBtnHandler(${i})`)
    
    rmvBtn.addEventListener("click", removeData)
    
     incBtn.classList.add("plus");
     dcrBtn.classList.add("minus");
     rmvBtn.classList.add("remove");
     liEl.classList.add("list");
     nme.classList.add("name");
     ctry.classList.add("country");
     scre.classList.add("score")
    
        incBtn.innerText = "+5";
        dcrBtn.innerText = "-5";
        rmvBtn.innerText = "X";
        scre.innerText = player.score
        ctry.innerText = player.country
        nme.innerText = player.name
    
        liEl.append(nme, ctry, scre, rmvBtn, incBtn, dcrBtn)
        list.append(liEl)
        
    }
}





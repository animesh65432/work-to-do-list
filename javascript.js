const button = document.querySelector("#click")

button.addEventListener("click" , add_the_work) 

function add_the_work (e) {
    e.preventDefault()
    const new_li = document.createElement("li") ; 
    const user_input = document.querySelector("#input").value ; 
    new_li.innerText  =  user_input  ; 
    const deldutton = document.createElement("button") ; 
    deldutton.innerHTML = "DEL";

    const rem = document.createElement("button") ; 
    rem.innerText = "REM"
    new_li.appendChild(deldutton)
    new_li.appendChild(rem)

    const ul = document.querySelector("#container") 

    ul.appendChild(new_li) 

    deldutton.onclick = function (){

        deldutton.parentElement.remove()
        alert("you have done your work ")
    }

    rem.onclick  = function (){
        const duplicate = document.createElement("li") ; 
        const output_the_copy = document.querySelector("input").value ; 
        duplicate.innerHTML  = output_the_copy  ; 

        const delbutton = document.createElement("button") ; 
        delbutton.innerHTML = "DEL" ; 

        const rembutton = document.createElement("button") ; 
        rembutton.innerHTML = "REM" ; 

        duplicate.appendChild(delbutton) ; 
        duplicate.appendChild(rembutton)

        const container = document.querySelector("#container") ; 
        container.appendChild(duplicate) ; 

        delbutton.onclick  = function (){
            delbutton.parentElement.remove() ;
        }

        rembutton.onclick  = function (){
            const duplicate = document.createElement("li") ; 
            const output_the_copy = document.querySelector("input").value ; 
            duplicate.innerHTML  = output_the_copy  ; 
            
            const delbutton = document.createElement("button") ; 
            delbutton.innerHTML = "DEL" ; 
            
            const rembutton = document.createElement("button") ; 
            rembutton.innerHTML = "REM" ; 
            
            duplicate.appendChild(delbutton) ; 
            
            duplicate.appendChild(rembutton)
            
            const container = document.querySelector("#container") ; 
            container.appendChild(duplicate) ; 

            delbutton.onclick  = function(){
                delbutton.parentElement.remove()
            }
        }

    }
}
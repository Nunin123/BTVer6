function showDomain(select){
    if(select.value==1){
     document.getElementById('reading').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==2){
     document.getElementById('listening').style.display="block";
     document.getElementById('reading').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==3){
     document.getElementById('viewing').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('reading').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==4){
     document.getElementById('vocabulary').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('reading').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==5){
     document.getElementById('literature').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('reading').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==6){
     document.getElementById('writing').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('reading').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==7){
     document.getElementById('oral').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('reading').style.display="none";
     document.getElementById('grammar').style.display="none";
    }

    else if(select.value==8){
     document.getElementById('grammar').style.display="block";
     document.getElementById('listening').style.display="none";
     document.getElementById('viewing').style.display="none";
     document.getElementById('vocabulary').style.display="none";
     document.getElementById('literature').style.display="none";
     document.getElementById('writing').style.display="none";
     document.getElementById('oral').style.display="none";
     document.getElementById('reading').style.display="none";
    }

    else{
     document.getElementById('hidden_div').style.display="none";
    }
 }

 // drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


// popup
function showDLevel() {
    document.getElementById("popupDL").classList.toggle("active");
}
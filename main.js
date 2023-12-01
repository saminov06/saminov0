function yarat() {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var div1 = document.getElementById('div1');
    var inp1 = document.getElementById('inp1');

    var btn = document.createElement('button');
    var btn1 = document.createElement('button');

    btn.innerText = "edit";
    btn.style.width ="100px";
    btn.style.height = "30px";  
    btn.style.backgroundColor = "orange"; 
    btn.style.marginLeft = "700px"
    btn.style.position = 'absolute'

    btn1.innerText="delek"
    btn1.style.width="100px";
    btn1.style.height="30px";
    btn1.style.backgroundColor="red"
    btn1.style.marginLeft = "800px"
    btn1.style.position = 'absolute'

    div.style.width = "80%";
    div.style.height = "50px"
    div.style.backgroundColor ="grey";
    div.style.borderRadius ="30px"
    div.style.display= "inline-flex"
    div.style.alignItems = "center"
    
    h1.innerText = inp1.value;
    div.appendChild(h1);
    div.appendChild(btn);
    div.appendChild(btn1);
    div1.appendChild(div);

     
}
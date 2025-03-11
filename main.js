function search(){
    var input, filter,ul,a,i,txtValue;

    input = document.getElementById("myInput")
    filter = input.value.toUpperCase()
    ul = document.getElementById("myList")
    li = document.getElementsByTagName("li")

    for (i = 0; i < li.length ; 1++){
        a = li[i];
        txtValue = a.textContent
        
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "block"
        }else{
            li[i].style.display = "none"
        }
    }
}
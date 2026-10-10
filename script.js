function updateCard(){
    let name=document.getElementById("studentName").value;
    let roll=document.getElementById("rollNumber").value;
    let gender = document.getElementById("gender").value;
    if(name.trim()===""||roll.trim()===""){
        alert("fill the name and roll number");
    }
   
    document.getElementById("name").innerText=name;
    document.getElementById("RollNumber").innerText=roll;
    alert("Updated successfully")
    document.getElementById("inputFields").style.display = "none";
}
document.getElementById("gender").addEventListener("change", function () {
    let gender = this.value;
    let image = document.getElementById("studentPhoto");

    if (gender === "Male") {
        image.src = "images/john.png";
    } 
    else if (gender === "Female") {
        image.src = "images/jane.png";
    }
});


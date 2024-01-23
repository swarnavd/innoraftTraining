
$(document).ready(()=>{
    $(".in").click((e)=>{
        let fname=$("#fname").val();
        let lname=$("#lname").val();
        if(fname=="" || lname==""){
            e.preventDefault();
            alert("All field must be filled");
        }
        else{
            alert("Form submitted");
        }
    });
})

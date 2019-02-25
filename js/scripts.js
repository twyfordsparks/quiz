function addition(q1,q2,q3,q4,q5){
    return q1+q2+q3+q4+q5;
}

$(document).ready(function(){
    $("#d1").submit(function(event){
        event.preventDefault();
        var q1=parseInt($("input:radio[name=choice1]:checked").val());
        var q2 = parseInt($("input:radio[name=choice2]:checked").val());
        var q3 = parseInt($("input:radio[name=choice3]:checked").val());
        var q4 = parseInt($("input:radio[name=choice4]:checked").val());
        var q5 = parseInt($("input:radio[name=choice5]:checked").val());
        
        var results = addition(q1,q2,q3,q4,q5);

        $("#output").text(results + "%");

var percentage = (results/100)*100;

        if(percentage>80 && percentage<=100){
            $("#output2").text("Excellent");
        } else if (percentage>=50 && percentage<=80){
            $("#output2").text("Fair Results");
        } else{
            $("#output2").text("Retake test");
        }
    });
})
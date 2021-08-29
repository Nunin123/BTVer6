$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function () {
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function () {
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function () {

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

});

function showDomain(select) {
    if (select.value == 1) {
        document.getElementById('reading').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 2) {
        document.getElementById('listening').style.display = "block";
        document.getElementById('reading').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 3) {
        document.getElementById('viewing').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('reading').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 4) {
        document.getElementById('vocabulary').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('reading').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 5) {
        document.getElementById('literature').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('reading').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 6) {
        document.getElementById('writing').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('reading').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 7) {
        document.getElementById('oral').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('reading').style.display = "none";
        document.getElementById('grammar').style.display = "none";
    }

    else if (select.value == 8) {
        document.getElementById('grammar').style.display = "block";
        document.getElementById('listening').style.display = "none";
        document.getElementById('viewing').style.display = "none";
        document.getElementById('vocabulary').style.display = "none";
        document.getElementById('literature').style.display = "none";
        document.getElementById('writing').style.display = "none";
        document.getElementById('oral').style.display = "none";
        document.getElementById('reading').style.display = "none";
    }

    else {
        document.getElementById('hidden_div').style.display = "none";
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

    if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
        alert("Correct! You may proceed.");
        ev.target.appendChild(document.getElementById(data));
    }
    else {
        alert("That seems wrong. Please try again.");
    }
}


// popup
function showDLevel() {
    document.getElementById("popupDL").classList.toggle("active");
}

function showDLevel2() {
    document.getElementById("popupDL2").classList.toggle("active");
}

function showDLevel3() {
    document.getElementById("popupDL3").classList.toggle("active");
}

function showDLevel4() {
    document.getElementById("popupDL4").classList.toggle("active");
}

//1q rc drill1

function btnActive(container) {
    var div = document.getElementById(container);
    var btns = div.querySelectorAll('button');

    btns.forEach(button => {
        button.addEventListener('click', function () {
            btns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        })
    })
}

function RC_1Q_Drill1_Check() {

    let matches = document.querySelectorAll('button.active');

    let answer = Array.prototype.map.call(matches,
        function (t) {
            return t.textContent;
        });

    test(answer);
}

function test(test) {

    if (test.length == 15) {
        //disable buttons
        const buttons = document.getElementsByClassName("drill1btn");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }


        //1
        if (test[0] == "IR") {
            document.getElementById("RC1_1").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_1").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //2
        if (test[1] == "IR") {
            document.getElementById("RC1_2").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_2").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //3
        if (test[2] == "IR") {
            document.getElementById("RC1_3").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_3").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //4
        if (test[3] == "IR") {
            document.getElementById("RC1_4").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_4").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //5
        if (test[4] == "IR") {
            document.getElementById("RC1_5").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_5").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //6
        if (test[5] == "SCN") {
            document.getElementById("RC1_6").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_6").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //7
        if (test[6] == "SCN") {
            document.getElementById("RC1_7").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_7").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //8
        if (test[7] == "SCN") {
            document.getElementById("RC1_8").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_8").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //9
        if (test[8] == "SCN") {
            document.getElementById("RC1_9").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_9").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //10
        if (test[9] == "SCN") {
            document.getElementById("RC1_10").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_10").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //11
        if (test[10] == "SCN") {
            document.getElementById("RC1_11").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_11").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //12
        if (test[11] == "SKM") {
            document.getElementById("RC1_12").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_12").innerHTML += " ✘".fontcolor("#ff0033");
        }

        //13
        if (test[12] == "SKM") {
            document.getElementById("RC1_13").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_13").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //14
        if (test[13] == "SKM") {
            document.getElementById("RC1_14").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_14").innerHTML += " ✘".fontcolor("#ff0033");
        }
        //15
        if (test[14] == "SKM") {
            document.getElementById("RC1_15").innerHTML += " ✔".fontcolor("#007500");
        }

        else {
            document.getElementById("RC1_15").innerHTML += " ✘".fontcolor("#ff0033");
        }
    }

    else {
        alert("Please answer all items!");
    }

}



function RC_1Q_Drill2_Check() {

    //#1

    if (document.getElementById('rad2').checked) {
        document.getElementById('1b').innerHTML = "✔".fontcolor("#007500");
    }

    else if (document.getElementById('rad1').checked) {
        document.getElementById('1a').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad3').checked) {
        document.getElementById('1c').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad4').checked) {
        document.getElementById('1d').innerHTML = "✘".fontcolor("#ff0033");
    }

    //#2

    if (document.getElementById('rad5').checked) {
        document.getElementById('2a').innerHTML = "✔".fontcolor("#007500");
    }

    else if (document.getElementById('rad6').checked) {
        document.getElementById('2b').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad7').checked) {
        document.getElementById('2c').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad8').checked) {
        document.getElementById('2d').innerHTML = "✘".fontcolor("#ff0033");
    }

    //#3

    if (document.getElementById('rad12').checked) {
        document.getElementById('3d').innerHTML = "✔".fontcolor("#007500");
    }

    else if (document.getElementById('rad9').checked) {
        document.getElementById('3a').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad10').checked) {
        document.getElementById('3b').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad11').checked) {
        document.getElementById('3c').innerHTML = "✘".fontcolor("#ff0033");
    }

    //#4

    if (document.getElementById('rad14').checked) {
        document.getElementById('4b').innerHTML = "✔".fontcolor("#007500");
    }

    else if (document.getElementById('rad13').checked) {
        document.getElementById('4a').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad15').checked) {
        document.getElementById('4c').innerHTML = "✘".fontcolor("#ff0033");
    }

    else if (document.getElementById('rad16').checked) {
        document.getElementById('4d').innerHTML = "✘".fontcolor("#ff0033");
    }

    var x = document.getElementsByName("rad-group1");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    var x = document.getElementsByName("rad-group2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    var x = document.getElementsByName("rad-group3");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    var x = document.getElementsByName("rad-group4");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}
$(function () {
    $("#register").hide()
    $(".container-header-navigation-form").on("click", call => {
        if (call.target.parentNode.id == "loginTap") {
            $("#registerTap").removeClass("selected")
            $("#" + call.target.parentNode.id).addClass("selected")
            $("#login").show()
            $("#register").hide()

            login()
        } else {
            $("#loginTap").removeClass("selected")
            $("#" + call.target.parentNode.id).addClass("selected")
            $("#register").show()
            $("#login").hide()
        }
    })
})



$("#formSubmitLogin").on("submit", data => {
    let email = data.target[0].value
    if (email == "") {
        return false
    }

    let password = data.target[1].value
    if (password == "") {
        return false
    }

    let dataAlert = $("#alert");
    dataAlert[0].innerHTML = "";
    dataAlert.addClass("success");
    dataAlert.append("<p class='m-0' >Data process</p>");
    dataAlert.append("<div class= 'charger'></div>");



    if (true) {
        let dataUser = {
            email: email,
            password: password
        }

        login(dataUser)
    }

})

$("#formSubmitRegister").on("submit", data => {
    let email = data.target[0].value
    if (email == "") {
        return false
    }

    let password = data.target[1].value
    if (password == "") {
        return false
    }
    let passwordConfirm = data.target[2].value;
    if (passwordConfirm != password) {
        return false;
    }

    let dataAlert = $("#alert");
    dataAlert[0].innerHTML = "";
    dataAlert.addClass("success");
    dataAlert.append("<p class='m-0' >Data process</p>");
    dataAlert.append("<div class= 'charger'></div>");

    if (true) {
        let dataUser = {
            email: email,
            password: password
        }

        register(dataUser)
    }
})

function login(data) {
    let dataAlert = $("#alert");
    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: data,
        success: function (response) {
            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("Error");
                dataAlert.addClass("success");
                dataAlert.append("<p class='m-0' > Data correct </p>")
                dataAlert.append("<div class= 'charger'></div>")
            }, 1000)
            removeAlert(dataAlert);
        },
    })
        .fail(function (response) {
            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("success");
                dataAlert.addClass("Error");
                dataAlert.append("<p class='m-0' > Data incorrect</p>")
            }, 1000)
            removeAlert(dataAlert);


        })

}


function register(data) {
    let dataAlert = $("#alert");
    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/register",
        data: data,
        success: function (response) {
            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("Error");
                dataAlert.addClass("success");
                dataAlert.append("<p class='m-0' > Register correct </p>")
                dataAlert.append("<div class= 'charger'></div>")
            }, 1000)
            removeAlert(dataAlert);
        },
    })
        .fail(function (response) {
            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("success");
                dataAlert.addClass("Error");
                dataAlert.append("<p class='m-0' > Register incorrect</p>")
            }, 1000)
            removeAlert(dataAlert);
        })

}

function removeAlert(data){
    setTimeout(function() {
        data[0].innerHTML = "",
        data[0].removeClass("success")
        data[0].removeClass("Error")
    }, 3000);

}


/*(function (){
 alert("ALert");
})();


$(function () {
    $(".container-header-navigation-form").on("click" , call => {
        
        if (call.target.parentNode.id == "loginTap") {
            $("#registerTap").removeClass("selected")
            $("#" + call.target.parentNode.id).addClass("selected")
        } else {
            $("#loginTap").removeClass("selected")
            $("#" + call.target.parentNode.id).addClass("selected")
        }
    })
})

console.log(call.target.attributes[0]);
        console.log(call);


*/
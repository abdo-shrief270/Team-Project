let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$("#resetInput").keydown(() => {
    if (emailReg.test($("#resetInput").val())) {
        $("#resetInput").addClass("valid")
        $("#resetInput").removeClass("in-valid")
    }
    else {
        $("#resetInput").addClass("in-valid")
        $("#resetInput").removeClass("valid")

    }
})
$("#resetBtn").click(() => {
    if ($("#resetInput").val() === "") {
        $("#resetSpan").text("Enter Your Email Address !");
        $("#resetInput").addClass("in-valid")
    }
    else {
        if (emailReg.test($("#resetInput").val())) {
            $("#resetInput").addClass("valid")
            $("#resetInput").removeClass("in-valid")
            $("#resetInput").removeClass("in-valid")
        }
        else {
            $("#resetInput").addClass("in-valid")
            $("#resetInput").removeClass("valid")
            $("#resetSpan").text("Enter Vaild Email Address !");

        }

    }
})
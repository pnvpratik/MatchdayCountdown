function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    // Empty

    //cordova.plugins.notification.local.schedule({
    //    id: 10,
    //    title: "Meeting in 15 minutes!",
    //    text: "Jour fixe Produktionsbesprechung",
    //         data: { meetingId: "#123FG8" }
    //});

}

// alert dialog dismissed
function alertDismissed() {
    // do something
}
$(document).ready(function () {

    //$("#showAlert").on('click', function () {
    //    showAlert();
    //    cordova.plugins.notification.local.schedule({
    //        id: 10,
    //        title: $("#inputEmail").val(),
    //        data: { meetingId: "#123FG8" }
    //    });
    //});

}
   );


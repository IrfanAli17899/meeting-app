import $ from "jquery";

const initializeAlert = () => {
     $("#alert").iziModal({
        timeout: 3000,
        timeoutProgressbar: true,
        pauseOnHover: true,
    });
    $('#alert').iziModal('setGroup', 'alerts');

}

const Alert = (status, title, subtitle) => {
    switch (status) {
        case "error":
            $('#alert').iziModal('setHeaderColor', "#AA3939");
            $('#alert').iziModal('setIcon', "fa fa-warning");
            break;
        case "success":
            $('#alert').iziModal('setHeaderColor', "#2D882D");
            $('#alert').iziModal('setIcon', "fa fa-check");
            break;
        case "info":
            $('#alert').iziModal('setHeaderColor', "#88A0B9");
            $('#alert').iziModal('setIcon', "fa fa-info-circle");
            break;
            
            default:
            break;
    }
    $("#alert").iziModal("setTitle", title);
    $("#alert").iziModal("setSubtitle", subtitle);
    return $("#alert").iziModal("open");
}



export {
    initializeAlert,
    Alert
}
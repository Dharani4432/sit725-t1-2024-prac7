

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">About this kiiten</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span><p class="card-text">' + item.description + '</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

const getProjects = () => {
    const projects = [
        { title: "BootStrap", image: "images/bootstrap.jpeg", description: "About BootStrap" },
        { title: "JQuery", image: "images/jquery.jpeg", description: "About JQuery" },
    
    ];
      addCards(projects);
}
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.subTitle = $('#subTitle').val();
    formData.description = $('#description').val();

    console.log('form data: ', formData);
    addProjectToApp(formData);
}

const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/tech',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}



$(document).ready(function () {
    const socket = io();
    socket.on('number', (msg) => {
        console.log('random number: ' + msg);
        
    });


    $('.materialboxed').materialbox();
    $('.modal').modal();

    getProjects();

    $('#formSubmit').click(() => {
        submitForm();
        
    
    });
    
});
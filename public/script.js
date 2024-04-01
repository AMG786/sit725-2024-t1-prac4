const addItems = (items) => {  
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'</span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

function getAllItems(){
    $.get('/getItems', (res)=>{
        if(res.statusCode === 200 ){
            console.log(res.data);
            addItems(res.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();
    getAllItems();
    
});


  
$(document).ready(() => {
    console.log('Hello Js & JQ!')

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/foods',
        success: onSuccess,
        error: onError
    });
    function onSuccess(foods) {
        innerHTML='';
        foods.forEach((onefood)=> {
            console.log('testing food', onefood)
            console.log('testing ingredients', onefood.ingredients[0]);
            innerHTML += `<div>`;
            innerHTML += `<h1>`+onefood.name+`</h1>`;
            innerHTML += `<p>`+onefood.ingredients[0].title+`</p>`;
            innerHTML += `<p>`+onefood.ingredients[0].origin+`</p>`;

            innerHTML+='</div>'
            
        })
        $('#foodTarget').append(innerHTML);
    }
    function onError(error){
        console.log(error);
      }


    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/api/foods',
        success: PostSuccess,
        error: PostError
    });
    function PostSuccess() {
        
    }
});


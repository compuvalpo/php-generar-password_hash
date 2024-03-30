$(document).ready(function () {


});

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 1500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location =  url
		//window.location.reload();
	});
}

function GenerarPasswordHash(){
	
		let inputData = $("#inputData").val();
        $.ajax({
            url: './password_hash.php',
            type: 'post',
            dataType: 'json',
            data: {"data": inputData},
            success: function(data) {

				if(data){
					setTimeout(function () {

						let div = '<div class="input-group col-12 mb-2"><span class="btn-primary badge d-flex align-items-center">';
						
						$('.card-data').html("");
						$('.card-data').append(div +'COST 10 ['+ data.time10 +'s]</span><span class="form-control" id="cost10">'+ data.cost10 +'</span></div>');
						$('.card-data').append(div +'COST 12 ['+ data.time12 +'s]</span><span class="form-control" id="cost12">'+ data.cost12 +'</span></div>');
						$('.card-data').append(div +'COST 15 ['+ data.time15 +'s]</span><span class="form-control" id="cost15">'+ data.cost15 +'</span></div>');

					}, 100);
					//SwalMensaje('Password Hash Generados', 'Se han generado los Password Hash.', 'success');
				}else{
					SwalMensaje('Error', 'Error al intentar de generar los Password Hash.', 'error');
				}
            },
            error: function(jqXHR, status, error) {
				SwalMensaje('Password Hash no Generados', 'No se han generado los Password Hash.', 'error');
            }
        });
	
}
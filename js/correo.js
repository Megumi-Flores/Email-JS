function sendMail(params){
	var mensage = document.getElementById("msg").value
	var receptor = "Megumi Flores"
	var nombre = document.getElementById("toName").value
	var correo = document.getElementById("fromName").value
	var nombre_correo = nombre + "<" + correo + ">"
	var aprobado = 0;

		var tempParams = {
			from_name: nombre_correo,
			to_name: receptor,
			message: mensage,
		};
		emailjs.send('service_8gd6ewn','template_h8vz54j',tempParams)
		.then(function(res){
			console.log("success", res.status);
		})
}
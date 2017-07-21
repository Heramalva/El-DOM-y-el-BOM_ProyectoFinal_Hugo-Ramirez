var estudiantes = [];


//Funcion para registrar estudiantes
	function registrar(){
		// agrega los estudiantes a una tabla
			var tabla=document.getElementById("tabla");
			var row = tabla.insertRow();
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);
  		var cell3 = row.insertCell(2);
  		var a=document.getElementById("campo1").value;
  		var b=document.getElementById("campo2").value;
  		var c=document.getElementById("campo3").value;
  		cell1.innerHTML = a;
  		cell2.innerHTML = b;
  		cell3.innerHTML = c;

		//agregar los estudiantes a un JSON
  		estudiantes.codigo=a;
  		estudiantes.nombre=b;
  		estudiantes.nota=parseInt(c);

  		var datos=[];
  		datos.push(estudiantes);

		//comprobando en consola que guarda los datos en JSON
  		console.log(estudiantes);
			var types=JSON.parse(estudiantes);
			console.log(types);

		//limpiar los campos para el proximo estudiante
  		campo1.value="";
  		campo2.value="";
  		campo3.value="";
		}

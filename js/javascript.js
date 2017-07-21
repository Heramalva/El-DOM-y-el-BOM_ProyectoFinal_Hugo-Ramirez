var myObj;
var datos=[];

//Funcion para registrar estudiantes
	function registrar(){
		//verificando datos correctos y erroneros
		if ((campo1.value==='')||(campo2.value==='')||(campo3.value==='')) {
			alert("Debe Ingresar Datos");
		}else if ((campo3.value<0)||(campo3.value>101)) {
			alert("Debe Ingresar un Numero de 0 a 100");
			campo3.value="";
		}else{
			//captura datos
				var a=document.getElementById("campo1").value;
				var b=document.getElementById("campo2").value;
				var c=document.getElementById("campo3").value;

			// agrega los estudiantes a la tabla
				var tabla=document.getElementById("tabla");
				var row = tabla.insertRow();
	  		var cell1 = row.insertCell(0);
	  		var cell2 = row.insertCell(1);
	  		var cell3 = row.insertCell(2);
	  		cell1.innerHTML = a;
	  		cell2.innerHTML = b;
	  		cell3.innerHTML = c;

			//agregar los estudiantes a un JSON
				myObj = { "codigo":a, "nombre":b, "nota":parseInt(c) };
	    	datos.push(myObj);

			//comprobando en consola que guarda los datos en JSON
	  		console.log(datos);

			//limpiar los campos para el proximo estudiante
	  		campo1.value="";
	  		campo2.value="";
	  		campo3.value="";
			}
		}


		//Funcion para calcular el Promedio
			function promedio(){
				var b=0;
				for(i=0;i<datos.length;i++){
					b+=(datos[i].nota)/datos.length;
				}
				document.getElementById("texto1").innerHTML=b.toFixed(2);
			}

			// Funcion para encontrar el numero mayor y mostrar el nombre
	function mayor(){
		var mayor=-1;
		var contador=0;
		var c="";
		while (contador<datos.length) {
			if (datos[contador].nota>mayor) {
				mayor=datos[contador].nota;
				c=datos[contador].nombre;
			}
			contador++;
		}
		document.getElementById("texto2").innerHTML=c;
	}

//Funcion para encontrar el numero menor y mostrar el nombre
	function menor(){
		var menor=101;
		var contador=0;
		var d="";
		while (contador<datos.length) {
			if (datos[contador].nota<menor) {
				menor=datos[contador].nota;
				d=datos[contador].nombre;
			}
			contador++;
		}
		document.getElementById("texto3").innerHTML=d;
	}

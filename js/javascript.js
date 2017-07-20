var estudiantes = [];


//Funcion para registrar estudiantes
	function registrar(){
		if ((document.getElementById("campo1").value<0)||(document.getElementById("campo1").value>100)) {
			alert("Debe Ingresar una Nota de 0 a 100");

			if (document.getElementById("campo3").value>0) {
				alert("Debe Ingresar un Nombre Valido");
			}
		}

		else{
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

  		estudiantes.codigo=a;
  		estudiantes.nombre=b;
  		estudiantes.nota=parseInt(c);

  		var datos=[];
  		datos.push(estudiantes);

  		console.log(datos);

  		campo1.value="";
  		campo2.value="";
  		campo3.value="";
		}
	}


//Funcion para calcular el Promedio
	function promedio(){
		var b=0;
		for(i=0;i<estudiantes.length;i++){
			b+=(estudiantes[i].nota)/10;
		}
		document.getElementById("texto2").innerHTML=b.toFixed(2);
	}

// Funcion para encontrar el numero mayor y mostrar el nombre
	function mayor(){
		var mayor=-1;
		var contador=0;
		var c="";
		while (contador<estudiantes.length) {
			if (estudiantes[contador].nota>mayor) {
				mayor=estudiantes[contador].nota;
				c=estudiantes[contador].nombre;
			}
			contador++;
		}
		document.getElementById("texto3").innerHTML=c;
	}

//Funcion para encontrar el numero menor y mostrar el nombre
	function menor(){
		var menor=101;
		var contador=0;
		var d="";
		while (contador<estudiantes.length) {
			if (estudiantes[contador].nota<menor) {
				menor=estudiantes[contador].nota;
				d=estudiantes[contador].nombre;
			}
			contador++;
		}
		document.getElementById("texto4").innerHTML=d;
	}

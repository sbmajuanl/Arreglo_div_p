var datos = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "10 de julio" },
							{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
							{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
							{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
							{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }
						];

datos.forEach(function(element,index,array){
  var div=document.createElement("div");
  div.classList.add("div-contenedor");

  for (var atributo in element){
  var p=document.createElement("p");
  p.innerHTML=atributo + ":" + element[atributo];
  div.appendChild(p);
  }
  contenedor.appendChild(div);
});

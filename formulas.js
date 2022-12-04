function Obtenercuadrado(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    
  
    var area = ((la)*la);
    var perimetro=(4*la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }

  function Obtenertriangulo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var lc = parseInt(document.getElementById("ladoc").value);
    
  
    var area = (b * h) / 2;
    var perimetro=(la+lb+lc);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }

  function Obtenerrectangulo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    
  
    var area = (la * lb);
    var perimetro=2*(lb+la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenerparalelogramo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var h = parseInt(document.getElementById("altura").value);
  
    var area = (lb*h);
    var perimetro=2*(lb+la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenerrombo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var ld = parseInt(document.getElementById("ladod").value);
    var d = parseInt(document.getElementById("diametro").value);
  
    var area = (d*ld)/2;
    var perimetro=(4*la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenercometa(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var ld = parseInt(document.getElementById("ladod").value);
    var d = parseInt(document.getElementById("diametro").value);
  
    var area = (d*ld)/2;
    var perimetro=2*(la+lb);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenertrapecio(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var lc = parseInt(document.getElementById("ladoc").value);
    var B = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
  
    var area = ((lb*B)*h)/2;
    var perimetro=(la+lb+lc+B);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenercirculo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var r = parseInt(document.getElementById("radio").value);
  
    var area = (Math.PI*r)**2;
    var perimetro=(2*Math.PI *r);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenerpoligonoregular(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var P = parseInt(document.getElementById("perimetro").value);
    var a = parseInt(document.getElementById("apotema").value);
    var n = parseInt(document.getElementById("numerolado").value);
    var b = parseInt(document.getElementById("base").value);
  
    var area = (P*a)/2;
    var perimetro=(n*b);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenercoronacircular(){
    var areaResultado = document.getElementById("areaResultado");
    var R = parseInt(document.getElementById("radioma").value);
    var r = parseInt(document.getElementById("radiome").value);
  
    var area = (Math.PI*R**2-r**2);
  
    areaResultado.innerHTML = "" + area;
  }
  function Obtenersectorcircular(){
    var areaResultado = document.getElementById("areaResultado");
    var R = parseInt(document.getElementById("radio").value);
    var n = parseInt(document.getElementById("numerogrados").value);
  
    var area = (Math.PI*R**2*n)/360;
  
    areaResultado.innerHTML = "" + area;
  }
  function Obtenercubo(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var a = parseInt(document.getElementById("ladoa").value);
  
    var area = (6*a**2);
    var volumen = (a**3);
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenercilindro(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var h = parseInt(document.getElementById("altura").value);
    var R = parseInt(document.getElementById("radio").value);
  
    var area = (2*Math.PI*R*(h+R));
    var volumen = (Math.PI*R**2*h);
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenerortoedro(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var a = parseInt(document.getElementById("ladoa").value);
    var b = parseInt(document.getElementById("ladob").value);
    var c = parseInt(document.getElementById("ladoc").value);
  
    var area = (2*(a*b+a*c+b*c));
    var volumen = (a*b*c);
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenerprismarecto(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var a = parseInt(document.getElementById("ladoa").value);
    var h = parseInt(document.getElementById("altura").value);
    var P = parseInt(document.getElementById("perimetro").value);
    var A = parseInt(document.getElementById("areab").value);
  
    var area = (P*(h+a));
    var volumen = (A*h);
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenercono(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var g = parseInt(document.getElementById("generatriz").value);
    var h = parseInt(document.getElementById("altura").value);
    var R = parseInt(document.getElementById("radio").value);
  
    var area = (Math.PI*R*(R+g));
    var volumen = (Math.PI*R**2*h)/3;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenertroncocono(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var g = parseInt(document.getElementById("generatriz").value);
    var h = parseInt(document.getElementById("altura").value);
    var R = parseInt(document.getElementById("radioma").value);
    var r = parseInt(document.getElementById("radiome").value);
  
    var area = (Math.PI*(g*(r+R)+r**2+R**2));
    var volumen = (Math.PI*(R**2+r**2+R*r))/3;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obteneresfera(){
    var areaResultado = document.getElementById("areaResultado");
    var R = parseInt(document.getElementById("radio").value);
  
    var area = (4*Math.PI*R**2);
    var volumen = (4*Math.PI*R**3)/3;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenerpiramide(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var a = parseInt(document.getElementById("ladoa").value);
    var a2 = parseInt(document.getElementById("ladoa2").value);
    var h = parseInt(document.getElementById("altura").value);
    var A = parseInt(document.getElementById("area").value);
    var P = parseInt(document.getElementById("perimetro").value);
  
    var area = (P*(a+a2))/2;
    var volumen = (A*h)/3;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obtenertatraedro(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    
  
    var area = (Math.sqrt(3)*la**2);
    var volumen=(Math.sqrt(2)*la**3)/2;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
  function Obteneroctaedro(){
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    
  
    var area = (2*Math.sqrt(3)*la**2);
    var volumen=(Math.sqrt(2)*la**2)/2;
  
    areaResultado.innerHTML = "" + area;
    volumenResultado.innerHTML = "" + volumen;
  }
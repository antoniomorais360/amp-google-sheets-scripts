function ampNumeroPorExtenso(numero) {
  if (numero === 0) return "zero";
  
  var unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
  var especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  var dezenas = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  var centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
  var classes = ["", "mil", "milhão", "bilhão", "trilhão", "quatrilhão", "quintilhão", "sextilhão", "septilhão", "octilhão", "nonilhão"];
  
  function converteCentena(numero) {
    var strNum = numero.toString();
    var comprimento = strNum.length;
    var porExtenso = "";
    
    if (comprimento === 3) {
      porExtenso += centenas[parseInt(strNum.charAt(0))] + " e ";
      strNum = strNum.substring(1);
    }
    
    if (strNum.length === 2) {
      if (parseInt(strNum) < 20 && parseInt(strNum) >= 10) {
        porExtenso += especiais[parseInt(strNum) - 10];
        return porExtenso;
      }
      porExtenso += dezenas[parseInt(strNum.charAt(0))] + " e ";
      strNum = strNum.substring(1);
    }
    
    if (strNum.length === 1) {
      porExtenso += unidades[parseInt(strNum.charAt(0))];
    }
    
    return porExtenso.replace(/ e $/, ""); // Remove " e " no final, se houver
  }
  
  var partes = numero.toString().split(".");
  var parteInteira = partes[0];
  var parteDecimal = partes.length > 1 ? partes[1] : "";
  
  var grupos = [];
  while (parteInteira.length > 0) {
    grupos.unshift(parteInteira.slice(-3));
    parteInteira = parteInteira.slice(0, -3);
  }
  
  var partesPorExtenso = grupos.map(function(grupo, index) {
    var valor = parseInt(grupo);
    if (valor === 0) return "";
    var sufixo = classes[grupos.length - 1 - index];
    if (sufixo === "mil" && valor === 1) {
      return sufixo;
    } else if (sufixo === "mil" || sufixo === "") {
      return converteCentena(valor) + " " + sufixo;
    } else if (valor === 1) {
      return "um " + sufixo;
    } else {
      return converteCentena(valor) + " " + sufixo + "ões";
    }
  }).filter(Boolean).join(" e ");
  
  var porExtensoDecimal = "";
  if (parteDecimal) {
    porExtensoDecimal = " ponto " + parteDecimal.split("").map(function(digito) {
      return unidades[parseInt(digito)];
    }).join(" ");
  }
  
  return (partesPorExtenso + porExtensoDecimal).trim();
}



//-------------------------------------------------------------------------------------
// VALOR POR EXTENSO
//-------------------------------------------------------------------------------------
function ampExtenso(f){var g=[["ZERO","UM","DOIS","TRES","QUATRO","CINCO","SEIS","SETE","OITO","NOVE","DEZ","ONZE","DOZE","TREZE","QUATORZE","QUINZE","DEZESSEIS","DEZESSETE","DEZOITO","DEZENOVE"],["DEZ","VINTE","TRINTA","QUARENTA","CINQUENTA","SESSENTA","SETENTA","OITENTA","NOVENTA"],["CEM","CENTO","DUZENTOS","TREZENTOS","QUATROCENTOS","QUINHENTOS","SEISCENTOS","SETECENTOS","OITOCENTOS","NOVECENTOS"],["MIL","MILHAO","BILHAO","TRILHAO","QUADRILHAO","QUINTILHAO","SEXTILHAO","SETILHAO","OCTILHAO","NONILHAO",
"DECILHAO","UNDECILHAO","DODECILHAO","TREDECILHAO","QUATRODECILHAO","QUINDECILHAO","SEDECILHAO","SEPTENDECILHAO","OCTENCILHAO","NONENCILHAO"]],b,c,a;f=f.toString().replace(/\./,",").replace(/[^,\d]/g,"").split(",");for(var k=f.length-1,h,d=-1,j=[],i=[],e="";++d<=k;i=[]){d&&(f[d]=(("."+f[d])*1).toFixed(2).slice(2));if((b=(c=f[d]).slice((h=c.length)%3).match(/\d{3}/g),c=h%3?[c.slice(0,h%3)]:[],c=b?c.concat(b):c).length){b=-1;for(h=c.length;++b<h;e="")if(a=c[b]*1){a%100<20&&(e+=g[0][a%100])||a%100+1&&
(e+=g[1][(a%100/10>>0)-1]+(a%10?" E "+g[0][a%10]:""));i.push((a<100?e:!(a%100)?g[2][a==100?0:a/100>>0]:g[2][a/100>>0]+" E "+e)+((e=h-b-2)>-1?" "+(a>1&&e>0?g[3][e].replace("AO","OES"):g[3][e]):""))}(b=i.length>1?(b=i.pop(),i.join(" ")+" E "+b):i.join("")||(!d&&f[d+1]*1>0||j.length?"":g[0][0]))&&j.push(b+(" "+(c.join("")*1>1?d?"CENTAVOS":(/0{6,}$/.test(f[0])?"DE ":"")+"REAL".replace("L","IS"):d?"CENTAVO":"REAL")))}}return j.join(" E ");};

function ampNaoVazio(string) { 
  if(!string)             return false;         
  if(string == '')        return false;
  if(string === false)    return false; 
  if(string === null)     return false; 
  if(string == undefined) return false;
  string = string+' '; // check for a bunch of whitespace
  if('' == (string.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))) return false;       
  return true;        
}

function ampRemoverAcentos(input) {
  var acentos = { 'á':'a', 'à':'a', 'ã':'a', 'â':'a', 'ä':'a', 
                  'Á':'A', 'À':'A', 'Ã':'A', 'Â':'A', 'Ä':'A',
                  'é':'e', 'è':'e', 'ê':'e', 'ë':'e',
                  'É':'E', 'È':'E', 'Ê':'E', 'Ë':'E',
                  'í':'i', 'ì':'i', 'î':'i', 'ï':'i',
                  'Í':'I', 'Ì':'I', 'Î':'I', 'Ï':'I',
                  'ó':'o', 'ò':'o', 'õ':'o', 'ô':'o', 'ö':'o',
                  'Ó':'O', 'Ò':'O', 'Õ':'O', 'Ô':'O', 'Ö':'O',
                  'ú':'u', 'ù':'u', 'û':'u', 'ü':'u',
                  'Ú':'U', 'Ù':'U', 'Û':'U', 'Ü':'U',
                  'ç':'c', 'Ç':'C' };
  
  return input.split('').map(function(letter) {
    return acentos[letter] || letter;
  }).join('');
}



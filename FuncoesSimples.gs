//isNotEmpty(celula) - checa se célula está vazia
//lastRow(aba) ou lastrow() - Lista a última linha da planilha definida, ou da ativa.



//isNotEmpty(celula) - checa se célula está vazia
function isNotEmpty(string) {
  if(!string)             return false;         
  if(string == '')        return false;
  if(string === false)    return false; 
  if(string === null)     return false; 
  if(string == undefined) return false;
  string = string+' '; // check for a bunch of whitespace
  if('' == (string.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))) return false;       
  return true;        
}

//lastRow(aba) ou lastrow() - Lista a última linha da planilha definida, ou da ativa.
function lastRow(aba) { 
  
  if (aba === '') {
    var lastRow = sheet.getLastRow();
  }
  else { 
    var sheetname = ss.getSheetByName(aba);
    var lastRow = sheetname.getLastRow();
  }
    return lastRow;
}

function lastColumn() { // Última coluna da planilha ativa
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // This logs the value in the very last cell of this sheet
  var lastColumn = sheet.getLastColumn();
  return lastColumn;
}


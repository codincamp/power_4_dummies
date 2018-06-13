var mainElmt = document.getElementById("content");

var dropZoneTable = document.createElement("table");
dropZoneTable.className = "dropzone";
var dropZoneTableLine = document.createElement("tr");


var players = ["player1", "player2", "player3"]
var roundCount = 0;
for (var i = 0; i < 6; i++) {
    var dropZoneTableCell = document.createElement("td");
    dropZoneTableCell.className = "dropcell-" + i;
    
    dropZoneTableCell.addEventListener("click", function(){
        roundCount++;

        var elmtClass = this.className;
        var colIndex = parseInt(elmtClass.replace("dropcell-", ""));
        var selectedColumns = document.getElementsByClassName("col-"+ colIndex);
        
        var cpt = 0;
        while(cpt < selectedColumns.length){
            if (selectedColumns[cpt].className.indexOf("player") != -1) {
                break;
            }
            cpt++;
        }
        
        selectedColumns[cpt-1].className += " " + players[roundCount % players.length];
    });
    
    dropZoneTableLine.appendChild(dropZoneTableCell);
}

dropZoneTable.appendChild(dropZoneTableLine);
mainElmt.appendChild(dropZoneTable);

var puissance4Table = document.createElement("table");
puissance4Table.className = "puissance4"

for (var i = 0; i < 7; i++) {
    var puissance4Line = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
        var puissance4Cell = document.createElement("td");
        puissance4Cell.className = "col-" + j
        puissance4Line.appendChild(puissance4Cell);
    }
    puissance4Table.appendChild(puissance4Line)
}

mainElmt.appendChild(puissance4Table)



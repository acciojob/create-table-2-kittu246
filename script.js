function createTable() {
    //Write your code here
	let row = window.prompt("Input number of rows");
   let column = window.prompt("Input number of columns");

   let table= document.getElementById("myTable");
   for(let i=0;i<row;i++){
    let insertedRow = table.insertRow();
    for(let j=0;j<column;j++){
      let insertedCell=  insertedRow.insertCell();
      insertedCell.innerText = `Row-${i} Column-${j}`;

    }
    
   }
  
}

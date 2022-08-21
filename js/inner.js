let nameOfInput          = document.getElementById("ClientName"),
    SecondNameOfInput    = document.getElementById("SecondClintName"),
    courtOfInput         = document.getElementById("court"),
    courtTwoOfInput      = document.getElementById("courtTwo"),
    caseNumOfInput       = document.getElementById("caseNum"),
    caseYearOfInput      = document.getElementById("caseYear"),
    requeredOfInput      = document.getElementById("requered"),
    productContainer     = [];


   



if (localStorage.getItem("prolist") == null) {
    productContainer = []
} else {
    productContainer = JSON.parse(localStorage.getItem("prolist"));
    displaydata();
}




function addProduct() {
    pro = {
        name         :    nameOfInput.value,
        secondName   :    SecondNameOfInput.value,
        court        :    courtOfInput.value,
        courtTwo     :    courtTwoOfInput.value,
        caseNum      :    caseNumOfInput.value,
        caseYear     :    caseYearOfInput.value,
        requered     :    requeredOfInput.value

    }
    productContainer.push(pro)
    displaydata();
    console.log("a7aa ya fun")

    // nameOfInput.value ="";
    // SecondNameOfInput.value ="";
    // courtOfInput.value ="";
    // courtTwoOfInput.value ="";
    // caseNumOfInput.value ="";
    // caseYearOfInput.value ="";
    // requeredOfInput.value ="";


    

}





function displaydata() {
    var tamp = "";
    for (let i = 0; i < productContainer.length; i++) {
        tamp += `<tr>
        <td>
        <button class="btn btn-outline-danger" onclick="deleteData(${i})">delete</button>
    </td>
    <td>
    <button class="btn btn-outline-warning">updeta</button>
</td>
        
        
        
        <td>${productContainer[i].requered}</td>
        <td>${productContainer[i].caseNum  +" / / " +productContainer[i].caseYear} </td>
        <td>${productContainer[i].court + "  / / " +productContainer[i].courtTwo} </td>
        <td>${productContainer[i].secondName}</td>
        <td>${productContainer[i].name}</td>
        <td> ${i} </td>
          </tr>`

    }
    document.getElementById("tableBody").innerHTML = tamp
}






function deleteData(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("prolist", JSON.stringify(productContainer));
    displaydata();
}


function search(trim) {
    var cartona = "";
    for (let i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(trim.toLowerCase())) {
            cartona += `<tr>
            <td> ${i} </td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].gategory}</td>
            <td>${productContainer[i].desc}</td>
            <td>
                <button class="btn btn-outline-warning">updeta</button>
            </td>
            <td>
                <button class="btn btn-outline-danger" onclick="deleteData(${i})">delete</button>
            </td>
              </tr>`
        }

    }
    document.getElementById("tableBody").innerHTML = cartona;
}


let arr =[];

let i =0 ;

function addrow() {


trem =`

<div class="container mb-2">

    <table class="table table-striped">

        <thead>
            <th>التاريخ</th>
            <th>ما تم فيها</th>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="date" name="" id="">
                </td>
                <td>
                    <textarea class="form-control" id="productDesc"></textarea>
                </td>
           
            </tr>

        </tbody>
    
    </table>
   
</div>
`

for (let i = 1; i <2; i++) {
    arr.push(trem);
    
}

document.getElementById("row").innerHTML=arr ;
}





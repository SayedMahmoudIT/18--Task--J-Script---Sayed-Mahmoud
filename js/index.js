
var LinksList = [];

var LinkDescriptionInput = document.getElementById('LinkNameInput');
var LinkInput = document.getElementById('TextAreaContent');
var tableView = document.getElementById('tableView');

//Create Object
function creatNewLink() {
   //generate Object
   var LinkObject = {
      LinkDesc: LinkDescriptionInput.value,
      Link: LinkInput.value,
   }

   //push object into array
   //noteList ---> Array of type Object
   LinksList.push(LinkObject)
   //console.log(noteList);

   // invoke function
   readLinksList();
}

//templete isolator
// `test ${x} mood`  ~  "test" + x + "mode"
function readLinksList() {
   var htmlCollection = ``;
   var index = 0;
   for (var Link of LinksList) {
      htmlCollection +=
         `<tr>
            <th scope="row">${index}</th>
            <td>${Link.LinkDesc}</td>
            <td><a href="${Link.Link}" target="_blank">${Link.Link}</a>
            </td>
            <td>
              <button type="button" onclick ="deleteLinkFromList(${index})" class="btn btn-danger">Delete</button>
              <button type="button" class="btn btn-warning">Edit</button>
            </td>
          </tr>`;
      index++
   }

   tableView.innerHTML = htmlCollection;

}

function deleteLinkFromList(index){
   LinksList.splice(index,1);
   readLinksList();
}


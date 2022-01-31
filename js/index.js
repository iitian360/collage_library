
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function display() {

}
// add method to display proto type
display.prototype.add = function (book) {
    console.log("adding");
    Table_body = document.getElementById('table_body');
   ;
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><button type="button" class="btn btn-outline-danger">Remove</button></td>
                    </tr>
    
    `
    Table_body.innerHTML+=uiString;
   
   
}
display.prototype.validate = function (book) {
    if(book.name.length<2||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

display.prototype.show=function(type, outmsj){
    let Massage=document.getElementById('massage');
    Massage.innerHTML=`
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${outmsj}!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    setTimeout(() => {
        Massage.innerHTML=``;
    }, 3000);
}

// validate function implemention
display.prototype.clear = function () {
    let lib_form = document.getElementById('lib_form');
    lib_form.reset();
}

// add submit event listenar to form lib_form
let lib_form = document.getElementById('lib_form');
lib_form.addEventListener('submit', lib_form_submit)

function lib_form_submit(e) {
    e.preventDefault();

    let name = document.getElementById('book_name').value;
    let author = document.getElementById('Author').value;
    let type;

    let fiction = document.getElementById('Fiction');
    let romantic = document.getElementById('Romantic');
    let history = document.getElementById('History');

    if (fiction.checked) { 
        type = fiction.value;
    }
    else if (romantic.checked) {
        type = romantic.value;
    }
    else if (history.checked) {
        type = history.value;
    }

    let book = new Book(name, author, type);
    e.preventDefault();
    console.log(book);
    let Display = new display();
    if (Display.validate(book)) {
        Display.add(book);
        Display.show('success','your book is added')
        Display.clear();
    }
    else{
        Display.show('danger','Something went wrong, your book cannot be added');
    }

}

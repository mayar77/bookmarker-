

var siteName=document.getElementById("bookName");
var siteUrl=document.getElementById("bookURL");
var btn=document.getElementById("btn-submit");
var bookArr;
var alertContainer=document.getElementById("alertContainer");
  var alertContainer1=document.getElementById("alertContainer1");
  alertContainer.style.display = "none";
 alertContainer1.style.display = "none";

if(localStorage.getItem("productBook") == null)
    {
       bookArr=[];
    }
else
    {
       bookArr =JSON.parse( localStorage.getItem("productBook"));
        displaybook(); 

    }

function validate()
{
    var errors="";
    var error="";
    var nameRegex = /^[A-Z][a-zA-Z]{2,8}$/;
    var urlRegex =/((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/
    if(nameRegex.test(siteName.value) == false)
        {
            errors +="<p>UrlName must start with upperCase </p>";
            alertContainer.style.display = "block";
            alertContainer.innerHTML = errors;
        }
     if(urlRegex.test(siteUrl.value)==false)
        {
            error +="<p>url is required </p>";
            alertContainer1.style.display = "block";
            alertContainer1.innerHTML = error;
            
        }
    
    if(errors.length  > 0 && error.length >0)
        {
            return false;
        }
    else
        {
            return true;
        }
 
}
btn.onclick=function()
{
    if (validate()== true)
        {
             alertContainer1.style.display = "none";
             alertContainer.style.display = "none";
 addbook();   
   displaybook(); 
          clearForm();
        }
}
function addbook()
{
    
    var book={ name:siteName.value,
               urlBook:siteUrl.value  
    };
    
    bookArr.push(book);
    
}
function displaybook()
{
  var temp="";  
    for(i=0;i<bookArr.length;i++)
        {
            
            temp+=`<div class="col-md-12 pt-4 pb-3"><div class="display  py-4 d-flex justify-align-start align-item-center"> 
            <h5 class=" pl-5 pr-5 font-weight-bold ">`+bookArr[i].name+`</h5>
            <a class="btn btn-info ml-5 px-4" target="_blank" href="`+bookArr[i].urlBook+`">Visit</a>
            <button class="btn btn-danger ml-2" id="visi" onclick="deletee(`+i+`)">Delete</button>
        </div> </div>`
          
            
        }
    document.getElementById("display-Row").innerHTML=temp;
    localStorage.setItem("productBook",JSON.stringify(bookArr));
    
}


function deletee(id)
{
    bookArr.splice(id,1);
    displaybook();
     localStorage.setItem("productBook",JSON.stringify(bookArr));
}
function clearForm()
{
    
   var inputs= document.getElementsByClassName("form-control");
    
    for(var i= 0 ; i <inputs.length ; i++)
        {
            inputs[i].value = "";
        }
}

/*function visit(url1)
{
    
   var test="";
        test=`<a href=`+url1+`></a>`
    
}*/
function valid()
{
let f=false;
var Password = document.getElementById("password");
var contact = document.getElementById("contact");

//validate contact number
if( contact.value.match(/[a-z A-Z]/g) || contact.value.length<10 )
   {
    alert("invalid contact num ");
    return false;
   }
else
{
   f=true;

}

//validate password's length
if( Password.value.length<8 )
    {
    alert("password must be 8 char long ");
    return false;
}
    
//validate password containing atleast 1 uppercase letter
if( Password.value.match(/[A-Z]/g) )
    {
     f=true;
    }
else
{
    alert("password must contain a upppercase letter ");
    return false;

}

//validate password must contain a number
if( Password.value.match(/[0-9]/g) )
    {
        alert("successfully Registred ");
        return true;

    }
else
    {
        alert("password must contain a number ");
        return false;
    }
}
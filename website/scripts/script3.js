
function submitForm() 
  
{
    const cname = document.getElementById("cusname").value;
    const cemail = document.getElementById("cusmail").value;
    const cmessage = document.getElementById("cusmessage").value;
    const corder = document.getElementById("cusorder").checked;



    const CustomerInfo = {
      cname, cemail, cmessage, corder
    }

    const KeyValue = cname;

    localStorage.setItem(KeyValue, JSON.stringify(CustomerInfo));

    const who = JSON.parse(localStorage.getItem(cname));
    console.log(who)
    console.log("Что в localStorage:", localStorage.getItem(cname))
    alert("Thank you for the message "+ who.cname +"!");
  }

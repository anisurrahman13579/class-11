 
 /*
 function work()     // click er jonno neoya hy
 {
  // document.querySelectorAll("h1")[1].textContent="First one is clicked" ;    // sob gula ke catch er jonno use kora hy
 const h = document.querySelectorAll("h1");
  // h[0].textContent="abe";   // single er khettre use hobe.
  for(i = 0; i <h.length; i++)
  {
    h[i].textContent="button is clicked";
    h[i].style.color="red";
  }

 }
  */







 /*
    const icon =  document.querySelector("#iconimg");
    const mp = document.querySelector("#mp")
    icon.addEventListener("mouseover",function(){

     // alert("this is clicked");
     mp.textContent="the add icon is click";


    })
    icon.addEventListener("mouseout",function(){


        mp.textContent="";
    })

     function AR(){
        alert("ok");
     }


      const abc =   document.querySelector("#abc")
      abc.addEventListener("dblclick",function(){

alert("working");

      })
*/








    /*

     const  user = document.querySelector("#user");
     const error = document.querySelector("#error");
     error.style.color="red";
     user.addEventListener("keyup",function(){

     // alert("working");
         if(user.value.length<5)
         {
           error.textContent="username must be 4 characters long";
         }

         
         else
         {
           error.textContent="";
         }
     })
 l4 
     */









     /*


      const fullname =  document.querySelector("#fn")
      const email = document.querySelector("#em");
      const password = document.querySelector("#pass");
      const er = document.querySelector("#er")


      er.style.color="red";
       
  
      

       function valid()
       {
            
          if(fullname.value == "")
          {
            // er.textContent="fullname is required ";
            fullname.Placeholder="fullname is required";
             return false;
          }


          if(email.value == "")
          {
           // er.textContent="email is required";
           email.Placeholder="email is requried";
            return false;
          }


          if(password.value == "")
          {
             // er.textContent="password is required";
             password.Placeholder="password is required";
              return false;
          }
       }  

       */


  if(fullname.value == ""  || email.value =="" || password.valoe =="")
  {
    fullname.placeholder="fullname is required";
    emali.placeholder="emali is required";
    password.placeholder="password is required";
    return false;
  }

         


        




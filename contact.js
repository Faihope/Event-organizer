function validate() {
      
    if( document.contact_us.f1.value == "" ) {
       alert( "Please provide your name!" );
       document.contact_us.f1.focus() ;
       return false;
    }
    if( document.contact_us.f2.value == "" ) {
       alert( "Please provide your Email!" );
       document.contact_us.f2.focus() ;
       return false;
    }
    if( document.contact_us.f3.value == "" ) {
        alert( "Please provide your Phone Number!" );
        document.contact_us.f3.focus() ;
        return false;
     }
    if( document.contact_us.f4.value == "" ) {
        alert( "Please write your Message first!" );
        document.contact_us.f4.focus() ;
        return false;
    }
    else{
        alert("Message Submitted Successfully")
        return true ;
    }

 }
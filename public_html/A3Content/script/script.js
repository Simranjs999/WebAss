function displayorder(){
    var fname="Customer's name is: "+Frmfirst.txtfname.value;
    var lname="Customer's last name is: "+Frmfirst.txtlname.value;
    var email="Customer's email is: "+Frmfirst.txtemail.value;
    var SA="Shipping Address is: "+Frmfirst.ship.value;
    var transaction="Method of transaction is: "+Frmfirst.methods.value;
   var item="The order of your selected item is: ";
   for(var sub=0;sub<Frmfirst.chkSport.length;sub++){
        if(Frmfirst.chkSport[sub].checked){
             item+=Frmfirst.chkSport[sub].value+";"+"";
        }
    }
    var shipment="Selected Delivery Method is: "+Frmfirst.radshipment.value;
        Frmfirst.txtOrder.value="\n"+fname+"\n"+lname+"\n"+email+ "\n"+SA +"\n"+transaction+"\n"+item+"\n"+shipment;
}

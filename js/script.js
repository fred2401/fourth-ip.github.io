$(document).ready(function() {
    $(".delivery").click(function() {
      $(".delivery").toggle();
      $(".delivery-show").toggle();
    });
    $(".delivery-show").click(function() {
        $(".delivery-show").toggle();
        $(".delivery").toggle();
      });
  });


function Contact(first, last, estate, house) {
    this.firstName = first;
    this.lastName = last;
    this.onlyEstate = estate;
    this.onlyHouse = house;
  }
  
  
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedEstate = $("input#new-estate").val();
      var inputtedHouse = $("input#new-house").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEstate, inputtedHouse);

      Contact.prototype.name=function(){
          return inputtedFirstName + " " + inputtedLastName;
      }

      Contact.prototype.address=function(){
        return inputtedEstate+ " " + inputtedHouse;
      }
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.name() + " " + newContact.address() + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#new-estate").val("");
      $("input#new-house").val("");

      alert("you've ordered for a pizza for delivery")

    });
  }); 

function data(){
        //hawaiian//
        //small//
    if ((hawaiian.checked==true) & (small.checked==true) & (thin.checked==true)){
        alert("you've ordered a small hawaiian with thin crust");
        alert("the total is 3$")
    }
    
    else if ((hawaiian.checked==true) & (small.checked==true) & (thick.checked==true)){
        alert("you've ordered a small hawaiian with thick crust");
        alert("the total is 3$")
    }
        //medium//
    else if ((hawaiian.checked==true) & (medium.checked==true) & (thin.checked==true)){
        alert("you've ordered a medium hawaiian with thin crust");
        alert("the total is 5$")
    }
    else if ((hawaiian.checked==true) & (medium.checked==true) & (thick.checked==true)){
        alert("you've ordered a medium hawaiian with thick crust");
        alert("the total is 5$")
    }
        //large//
    else if ((hawaiian.checked==true) & (large.checked==true) & (thin.checked==true)){
        alert("you've ordered a large hawaiian with thin crust");
        alert("the total is 7$")
    }
    else if ((hawaiian.checked==true) & (large.checked==true) & (thick.checked==true)){
        alert("you've ordered a large hawaiian with thick crust");
        alert("the total is 7$")
    }

        //regina//
        //small//
    if ((regina.checked==true) & (small.checked==true) & (thin.checked==true)){
        alert("you've ordered a small regina with thin crust");
        alert("the total is 3.5$")
    }
    
    else if ((regina.checked==true) & (small.checked==true) & (thick.checked==true)){
        alert("you've ordered a small regina with thick crust");
        alert("the total is 3.5$")
    }
        //medium//
    else if ((regina.checked==true) & (medium.checked==true) & (thin.checked==true)){
        alert("you've ordered a medium regina with thin crust");
        alert("the total is 5.5$")
    }
    else if ((regina.checked==true) & (medium.checked==true) & (thick.checked==true)){
        alert("you've ordered a medium regina with thick crust");
        alert("the total is 5.5$")
    }
        //large//
    else if ((regina.checked==true) & (large.checked==true) & (thin.checked==true)){
        alert("you've ordered a large regina with thin crust");
        alert("the total is 7.5$")
    }
    else if ((regina.checked==true) & (large.checked==true) & (thick.checked==true)){
        alert("you've ordered a large regina with thick crust");
        alert("the total is 7.5$")
    }
    
        //boerewors//
        //small//
    if ((boerewors.checked==true) & (small.checked==true) & (thin.checked==true)){
        alert("you've ordered a small boerewors with thin crust");
        alert("the total is 2.5$")
    }
    
    else if ((boerewors.checked==true) & (small.checked==true) & (thick.checked==true)){
        alert("you've ordered a small boerewors with thick crust");
        alert("the total is 2.5$")
    }
        //medium//
    else if ((boerewors.checked==true) & (medium.checked==true) & (thin.checked==true)){
        alert("you've ordered a medium boerewors with thin crust");
        alert("the total is 4$")
    }
    else if ((boerewors.checked==true) & (medium.checked==true) & (thick.checked==true)){
        alert("you've ordered a medium boerewors with thick crust");
        alert("the total is 4$")
    }
        //large//
    else if ((boerewors.checked==true) & (large.checked==true) & (thin.checked==true)){
        alert("you've ordered a large boerewors with thin crust");
        alert("the total is 6.5$")
    }
    else if ((boerewors.checked==true) & (large.checked==true) & (thick.checked==true)){
        alert("you've ordered a large boerewors with thick crust");
        alert("the total is 6.5$")
    }

        //BBQ-steak//
        //small//
    if ((BBQsteak.checked==true) & (small.checked==true) & (thin.checked==true)){
        alert("you've ordered a small BBQ steak with thin crust");
        alert("the total is 4$")
    }
    else if ((BBQsteak.checked==true) & (small.checked==true) & (thick.checked==true)){
        alert("you've ordered a small BBQ steak with thick crust");
        alert("the total is 4$")
    }
        //medium//
    else if ((BBQsteak.checked==true) & (medium.checked==true) & (thin.checked==true)){
        alert("you've ordered a medium BBQ steak with thin crust");
        alert("the total is 6$")
    }
    else if ((BBQsteak.checked==true) & (medium.checked==true) & (thick.checked==true)){
        alert("you've ordered a medium BBQ steak with thick crust");
        alert("the total is 6$")
    }
        //large//
    else if ((BBQsteak.checked==true) & (large.checked==true) & (thin.checked==true)){
        alert("you've ordered a large BBQ steak with thin crust");
        alert("the total is 8$")
    }
    else if ((BBQsteak.checked==true) & (large.checked==true) & (thick.checked==true)){
        alert("you've ordered a large BBQ steak with thick crust");
        alert("the total is 8$")
    }

        //veg-feast//
        //small//
    if ((vegfeast.checked==true) & (small.checked==true) & (thin.checked==true)){
        alert("you've ordered a small veg feast with thin crust");
        alert("the total is 2.5$")
    }
    
    else if ((vegfeast.checked==true) & (small.checked==true) & (thick.checked==true)){
        alert("you've ordered a small veg feast with thick crust");
        alert("the total is 2.5$")
    }
        //medium//
    else if ((vegfeast.checked==true) & (medium.checked==true) & (thin.checked==true)){
        alert("you've ordered a medium veg feast with thin crust");
        alert("the total is 2.5$")
    }
    else if ((vegfeast.checked==true) & (medium.checked==true) & (thick.checked==true)){
        alert("you've ordered a medium veg feast with thick crust");
        alert("the total is 2.5$")
    }
        //large//
    else if ((vegfeast.checked==true) & (large.checked==true) & (thin.checked==true)){
        alert("you've ordered a large veg feast with thin crust");
        alert("the total is 2.5$")
    }
    else if ((vegfeast.checked==true) & (large.checked==true) & (thick.checked==true)){
        alert("you've ordered a large veg feast with thick crust");
        alert("the total is 2.5$")
    }



    // // if not picked//
    // else{
    //     alert("place an order")
    // }
}
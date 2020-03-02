


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
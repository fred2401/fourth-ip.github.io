function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
function Address(house, estate) {
    this.house = house;
    this.estate = estate;
}
$(document).ready(function() {
    $("form#contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#first-name").val();
      var inputtedLastName = $("input#last-name").val();
      var inputtedHouse = $("input#house").val();
      var inputtedEstate = $("input#estate").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      var newAddress= new Address(inputtedEstate, inputtedHouse)

      Contact.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
      }
      Address.prototype.fullAddress = function() {
        return this.estate + " " + this.house;
      }
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName()<br>newAddress.fullAddress() + "</span></li>");
  
      $("input#first-name").val("");
      $("input#last-name").val("");
      $("input#house").val("");
      $("input#estate").val("");
    });
}); 


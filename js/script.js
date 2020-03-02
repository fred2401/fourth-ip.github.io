function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
function Address(area, estate) {
    this.area = area;
    this.estate = estate;
}
$(document).ready(function() {
    $("form#contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#first-name").val();
      var inputtedLastName = $("input#last-name").val();
      var inputtedArea = $("input#area").val();
      var inputtedEstate = $("input#estate").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      
      Contact.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
      }
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $("input#first-name").val("");
      $("input#last-name").val("");
    });
}); 


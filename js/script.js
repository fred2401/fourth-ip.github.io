function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}
$(document).ready(function() {
    $("form#contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#first-name").val();
      var inputtedLastName = $("input#last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      
      Contact.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
      }
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $("input#first-name").val("");
      $("input#last-name").val("");
    });
}); 


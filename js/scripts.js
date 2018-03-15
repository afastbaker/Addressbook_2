//biz logic
function Contact(first, last) {
  this.firstName
  this.lastName
  this.addresses = [];
}

function Address(street, city, state) {
  this.street
  this.city
  this.addresses
}

Contact.prototype.fullName = function() {
}

 Address.prototype.fullName = function() {
   return this.firstName + ", " + this.lastName;
 }

 function resetFields() {
   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
   $("input.new_street").val("");
   $("input.new-city").val("");
   $("input.new-state").val("");
 }

 //UI logic
 $(document).ready(function() {

   $





 }

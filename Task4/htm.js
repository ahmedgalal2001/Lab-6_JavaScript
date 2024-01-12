// JavaScript does not have a direct equivalent  
// to static initialization blocks like Java does.


class MyClass {
  static staticMember;

  // Direct initialization of static member
  // staticMember = initializeStaticMember();

  static{
    MyClass.staticMember = "ahmed";
  }
  // Regular static method
  static initializeStaticMember() {
    // Your initialization logic here
    return "Initialized static member";
  }
}

console.log(MyClass.staticMember); // Output: Initialized static member

define(["./util"], function(util) {
   console.log(util);
   var property = "asdf";
   return {
      getProperty: function() {
         return this.property;
      }
   };
});
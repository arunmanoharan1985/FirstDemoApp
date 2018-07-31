var helloworld = function (){ 
    return 'Hello World'; 
 };  

 describe("Hello World", function(){ 
   
    it("should Return Hello world",function(){ 
       expect(helloworld()).toEqual('Hello World'); 
    }); 
 
    it("should Return Hello world",function(){ 
        expect(helloworld()).toEqual('Hello World'); 
     });

 });
//make a flexible object using interface with index signature 


//list with names can change
interface flexibleObject{
    [key : string] : any
}
const FlexibleObject : flexibleObject = {
object1 : {"color": "black","style": "roman"} ,
  //object1 properties
object2: {"theme": "blue", "background": "purple"}
 //object2 properties
};
//changing object name on user choice
FlexibleObject['user selection'] = {"color":"green","theme":"white"};
   console.log(FlexibleObject);

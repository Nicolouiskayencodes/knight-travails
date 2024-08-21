export default function Node(coordinates){
  let obj = {};
  let i = coordinates[0];
  let j = coordinates[1];
  obj.val = coordinates;
  obj.links = [];
  if ((i+2)>=0 && (i+2)<=7){
   if((j+1)>=0 && (j+1)<=7){
     obj.links.push([(i+2), (j+1)]);
   }
   if((j-1)>=0 && (j-1)<=7){
     obj.links.push([(i+2), (j-1)]);
   }
  }
  if ((i-2)>=0 && (i-2)<=7){
   if((j+1)>=0 && (j+1)<=7){
     obj.links.push([(i-2), (j+1)]);
   }
   if((j-1)>=0 && (j-1)<=7){
     obj.links.push([(i-2), (j-1)]);
   }
  }
  if ((i+1)>=0 && (i+1)<=7){
   if((j+2)>=0 && (j+2)<=7){
     obj.links.push([(i+1), (j+2)]);
   }
   if((j-2)>=0 && (j-2)<=7){
     obj.links.push([(i+1), (j-2)]);
   }
  }
  if ((i-1)>=0 && (i-1)<=7){
   if((j+2)>=0 && (j+2)<=7){
     obj.links.push([(i-1), (j+2)]);
   }
   if((j-2)>=0 && (j-2)<=7){
     obj.links.push([(i-1), (j-2)]);
   }
  }
  return obj;
 }
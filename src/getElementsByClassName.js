// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){  // added node parameter for recursion

  node = node || document.body;  // assign current node

  var children = node.childNodes;
  var arr = [];

  // push current node if it has class className
  if(node.classList && node.classList.contains(className)) {
    arr.push(node);
  }

  // check for className in each child node
  for(var i=0, len=children.length; i<len; i++) {

    if(children[i].childNodes.length > 0) {
      arr = arr.concat(getElementsByClassName(className, children[i]));  // recursive call to check rest of tree
    }

    if(children[i].classList && children[i].classList.contains(className) && arr.indexOf(children[i]) === -1) {
      arr.push(children[i]);
    }

  }

  return arr;
};

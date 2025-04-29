class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  
    isLeaf() {
      return this.children.length === 0;
    }
  }
  
  function multiplesOf10(node) {
    let count = 0;
    if (node.value % 10 === 0) {
      count++;
    }
    for (let child of node.children) {
      count += multiplesOf10(child);
    }
    return count;
  }

  function removeLeaf(node) {
    node.children = node.children.filter(child => {
      if (child.isLeaf() && node.children.length === 1) {
        return false;
      }
      return true;
    });
  
    for (let child of node.children) {
        removeLeaf(child);
    }
  }
  
 
  let root = new TreeNode(10);
  let node1 = new TreeNode(5);
  let node2 = new TreeNode(20);
  let node3 = new TreeNode(3);
  let node4 = new TreeNode(30);
  let node5 = new TreeNode(40);
  let node6 = new TreeNode(25);
  let node7 = new TreeNode(27); 
  let node8 = new TreeNode(50);


  root.addChild(node1);
  root.addChild(node2);
  root.addChild(node3);
  node2.addChild(node4);
  node1.addChild(node5);
  node3.addChild(node6);
  node4.addChild(node7);
  node7.addChild(node8);
  node5.addChild(node8);


  console.log("Кількість кратних 10:", multiplesOf10(root));
  
  
//   removeLeaf(root);
  
  function printTree(node, indent = "") {
    console.log(indent + node.value);
    for (let child of node.children) {
      printTree(child, indent + "  ");
    }
  }
  
//   console.log("\nДерево після видалення листів без братів:");
  printTree(root);
  
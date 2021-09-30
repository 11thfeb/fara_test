class TreeNode {
  constructor() {
    this.last = false;
    this.children = Array(26).fill(null);
    this.count = 1;
  }
}
class Trie {
  constructor() {
    this.root = new TreeNode();
  }
  insert(text) {
    let length = text.length;
    let index = 0;
    let head = this.root;
    for (let level = 0; level < length; level++) {
      index = text.charAt(level).charCodeAt(0) - 'a'.charCodeAt(0);
      if (head.children[index] === null) {
        head.children[index] = new TreeNode();
      }
      else {
        head.children[index].count++;
      }
      head = head.children[index];
    }
    if (head !== null) {
      head.last = true;
    }
  }
  shortestPrefix(head, output) {
    if (head !== null) {
      for (let i = 0; i < 26; ++i) {
        if (head.children[i] !== null) {
          if (head.children[i].count === 1) {
            console.log(output + (String.fromCharCode((i + 97))));
          }
          else {
            this.shortestPrefix(head.children[i],
              output + (String.fromCharCode((i + 97))));
          }
        }
      }
    }
  }
}

function main() {
  let task = new Trie();
  task.insert("alfred");
  task.insert("alfie");
  task.shortestPrefix(task.root, "");
}
main();
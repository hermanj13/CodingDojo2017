function BTNode(val) {
    this.val = val;
    this.right = null;
    this.left = null;
}

function BST() {
    this.root = null;
    this.add = function(val) {
        if (!this.root) {
            this.root = new BTNode(val);
            return this;
        }
        runner = this.root;
        while (runner) {
            if (!runner.right && val >= runner.val) {
                runner.right = new BTNode(val);
                return this;
            }
            if (!runner.left && val < runner.val) {
                runner.left = new BTNode(val);
                return this;
            }
            if (val >= runner.val) {
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }
    }
    this.doesContain = function(val) {
        if (!this.root) {
            return false;
        }
        runner = this.root;
        while (runner) {
            if (runner.val === val) {
                return true;
            }
            if (val >= runner.val) {
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }
        return false;
    }
    this.min = function() {
        if (!this.root) {
            return null;
        }
        runner = this.root;
        while (runner.left) {
            runner = runner.left;
        }
        return runner.val;
    }
    this.max = function() {
        if (!this.root) {
            return null;
        }
        runner = this.root;
        while (runner.right) {
            runner = runner.right;
        }
        return runner.val;
    }
    this.isEmpty = function() {
        if (!this.root) {
            return true;
        }
        return false;
    }
    this.height = function() {
        if (!this.root) {
            return 0;
        }
        var height = 1;
        return heightHelper(this.root, 1, height)
    }

    function heightHelper(node, counter, height) {
        if (!node.left && !node.right) {
            if (counter > height) {
                height = counter;
            }
            return height;
        }
        if (node.left) {
            temp = heightHelper(node.left, counter + 1, height);
            if (temp > height) {
                height = temp;
            }
        }
        if (node.right) {
            temp = heightHelper(node.right, counter + 1, height);
            if (temp > height) {
                height = temp;
            }
        }
        return height
    }
}

var green = new BST;
green.add(8).add(13).add(42).add(17).add(19)
console.log(green.height())
// console.log(green.doesContain(5));
// console.log(green.root.right.right.left.left.val)

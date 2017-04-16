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

    this.containsSum = function(sum) {
        if (!this.root) {
            return false;
        }
        var r = this.root;
        if (r.val === sum && (!r.right && !r.left)) {
            return true
        } else if (!r.right && !r.left) {
            return false
        }
        return this.sumH2(r, sum, r.val)
    }

    this.sumH = function(r, sum, tsum) {
        if (!r.left && !r.right) {
            return tsum
        }
        if (r.left) {
            var x = this.sumH(r.left, sum, tsum + r.left.val)

        }
        if (r.right) {
            var y = this.sumH(r.right, sum, tsum + r.right.val)
        }
        if (x === sum || x === true || y === sum || y === true) {
            return true
        } else {
            return false
        }
    }

    this.sumH2 = function(r, sum, tsum) {
        if (!r.left && !r.right) {
            return tsum === sum;
        } else {
            x = false
            if (r.left) {
                var x = this.sumH2(r.left, sum, tsum + r.left.val)
            }
            y = false
            if (r.right) {
                var y = this.sumH2(r.right, sum, tsum + r.right.val)
            }
            return x || y
        }
    }
}

var green = new BST;
green.add(19).add(4).add(9).add(12).add(100)
console.log(green.containsSum(119))
console.log(green.doesContain(9));

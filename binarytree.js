
//先序遍历
function preorder(root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right)
}

~function () {
    const root = {
        val: "A",
        left: {
            val: "B",
            left: {
                val: "D"
            },
            right: {
                val: "E"
            }
        },
        right: {
            val: "C",
            right: {
                val: "F"
            }
        }
    };

    preorder(root);

}()
function clone(obj) {
    var newObj = {};
    if(obj instanceof Array) {
        newObj = [];
    }
    for(var attr in obj) {
        var val = obj[attr];
        newObj[attr] = typeof val === 'object' ? clone(val) : val;
    }
    return newObj;
};

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
    console.log(clone(root));
}()
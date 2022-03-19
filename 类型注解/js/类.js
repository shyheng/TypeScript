// 类 
(() => {
    class ShyC {
        constructor(shy) {
            this.shy = shy;
        }
    }
    function fun(shy) {
        return shy.shy;
    }
    const s = new ShyC("shy");
    console.log(fun(s));
})();

// 接口 一种约束
(() => {
    function s(s) {
        return s.shy1 + " " + s.shy2;
    }
    const ss = {
        shy1: "shy",
        shy2: "shys"
    };
    console.log(s(ss));
})();

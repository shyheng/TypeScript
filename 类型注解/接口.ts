// 接口 一种约束
(()=>{
    interface Is{
        shy1:string
        shy2:string
    }

    function s(s:Is) {
        return s.shy1+" "+ s.shy2
    }

    const ss = {
        shy1:"shy",
        shy2:"shys"
    }

    console.log(s(ss));
    
})()
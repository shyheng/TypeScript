// 类 
(()=>{
    interface shy{
        shy:string
    }
    class ShyC{
        shy:string

        constructor(shy:string){
            this.shy = shy
        }
    } 
    function fun(shy:shy) {
        return shy.shy
    }
    const s = new ShyC("shy")
    console.log(fun(s));
    
})()
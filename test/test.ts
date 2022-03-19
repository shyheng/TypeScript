(()=>{
    //tsc test.ts 能编译成js文件
    function shy(str:string) {
        return '好'+str
    }
    let test = "厉害"
    console.log(shy(test))
})()

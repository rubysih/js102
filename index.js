//no test
const repeat=(str,times) => {
    let result='';
    for(let i=0;i<times;i++){
        result+=str;
    }
    return result;
}

const sayhi =() =>{
    // console.log(`hi ${name}, now is ${new Date()} !`);
    // const a=[1,2,5,6,7];
    // let [,,tir,...rest]=a;
    // tir=10;
    // rest[0]=18;
    // console.log(tir,a[2],rest);
    const obj={
        name:'ruby',
        key:'1101',
        job:11,
        o:{a:'a'}
    }
    let {name,job,o,o:{a} }=obj
    name='kevin';
    a='b';
    console.log(name,job,o,a,obj);
    // let qq=JSON.parse(obj);
    // let q2=JSON.exports
}

const add=(arr)=>{
    let sum=0;
    // sum+=...arr;
    console.log(...arr);

}
add([1,2,3,4,5,])

sayhi();
module.exports=repeat;

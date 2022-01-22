const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve("Verdadero con async"), 2500)
        : reject(new Error("Test erroneo, corrije el bug papu."))
    });
}

const doSomething = async()=>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log("Antes:");
doSomething();
console.log("Despues");




const anotherFunction = async()=>{
    try{
        const something = await doSomething();
    } catch(err){
        console.error(err)
    }
}


console.log("Antes 1:");
anotherFunction();
console.log("Despues 1");
function promiseTimeout (ms){
    return new Promise((resolve, reject) => {
       setTimeout(resolve, ms) 
    })   
}

async function  simulateLogOperation(){
    await promiseTimeout(2000)
    return 42
}

async function run(){
    const a = await simulateLogOperation();
    console.log(a);
}

run();
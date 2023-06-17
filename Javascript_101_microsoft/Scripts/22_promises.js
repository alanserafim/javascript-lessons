// sempre que trabalhar com filas de requisições e processos
// ===> Declaração de promisse

const promiseDemo = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        console.log('Promise demo');
        resolve(10);
    }, 1 * 100);

});

const promiseDemo2 = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        console.log('Promise demo 2');
        resolve(20);
    }, 1 * 100);

});


/* promiseDemo.then(res =>{
    // throw new Error('falhou aqui');
    console.log(res);
    return Promise.resolve(res + 50)  
}).then(res => {
    // throw new Error('falhou aqui');
    console.log('Segunda Promessa',res)
    return Promise.resolve(res)
}).catch (error =>{
    console.log('deu ruim', error)
})
 */

// =========> PROMISE RACE

/* Promise.race([promiseDemo, promiseDemo2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`)) */


// ==========> PROMISSE ALL

Promise.all([promiseDemo, promiseDemo2])
    .then(nums => console.log("OK!", nums))
    .catch(e => console.log("Erro!", e.message))

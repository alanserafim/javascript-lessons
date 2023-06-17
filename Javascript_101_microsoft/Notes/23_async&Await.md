# Async & Await

## Façam códigos assíncronos parecerem síncronos

**Usar o then é mais limpo do que callbacks, mas ainda continua igual**
Cria 'inchaço' ao código.

Não é comum em outras linguagens de programação.

**async/await**
Pradrão em muitas linguagens de programação.

Sintaxe mais próxima do código síncrono.

## Exemplo

    function promiseTimeout (ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    async function simulateLongOperation() { // async indica que a funçaõ terá uma espera, ou await
        await promiseTimeout(1000);          // "pausará" enquanto a operação é concluída
        return 42;                           // igual no Promise.resolve(42)                   
    }

    async function run() {
        const answer = await simulateLongOperation(); // Recupera o valor 42
        console.log(answer);                          // usar o try/catch para verificar possíveis erros
    }                                                 // ao invés de then e catch              

    run();
# Tratamento de erros com Try, Catch e Finally

## Exception
Interrupção na execução pretendida do código (não intencional)

## Error === Exception
Interrupção involuntária na execução do código, normalmente aparecem como exceções.
Erros de sintaxe são um tipo de exceção que ocorre quando a sintaxe incorreta é usada.

## Throwing an Exception
Envia uma mensagem de que algo deu errado na execução pretendida do código, pelo JavaScript
ou pela pessoa desenvolvedora com a palavra-chave **throw**.  Tudo que colocarmos depois de throw será arpesentando como erro sguido do fechamento da sua aplicação.

Exemplos

    throw true // Uncaught true
    throw 42 // Uncaught 42
    throw 'minhaExceção' // Uncaught 'MinhaExceção'


# Tratamento de erros em JavaScript

# Uncaught Exceptions
Exceções que foram lançadas quando o código não tem orientação para lidar com interrupção. Os usuários podem ver mensagens obscuras inúteis ou não existir nenhum tratamento de exceção com **try** .. **catch** .. **finaly**.

# Try
Bloco de código que pode lançar uma exceção.

# Catch
Bloco de código que será executado se uma exceção for lançada.

# Finally
Para opcional do código que será executado após o bloco try ou após o bloco catch. 
É sempre executado mesmo que execeção não for lançada.


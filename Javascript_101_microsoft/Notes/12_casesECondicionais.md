# Estrutura Case e outras sintaxes condicionais

## Valores falsos implícitos
    Strings
        Strings vazias testadas como falsas
    Objects
        Objetos null e undefined são testadas como falsos
    Numbers
        0 testa como falso

## strings em javaScript são case sensitive
    Converter para maiúscula ou minúscula
    Considere usar localeCompare

## Combinando comparações
    And (ambos os lados devem ser verdadeiros)
    (x & y)
    (x && y)
    Or (ambos os lados podem ser verdadeiros)
    (x | y)
    (x || y)

## Operadores de altalho **&&** e **||**
    (x && y) // y não avaliado se x for falso porque a resposta é falsa
    (x || y) // y não avaliado se x for verdadeiro porque a resposta é verdadeira
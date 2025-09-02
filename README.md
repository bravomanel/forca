### Jogo-Forca

### Objetivo da Atividade

Você deverá desenvolver um Jogo da Forca utilizando apenas HTML, CSS e JavaScript, aplicando conceitos de manipulação de strings, arrays, eventos de teclado e DOM.

O projeto deve ser construído seguindo o princípio do mobile first, garantindo boa usabilidade em dispositivos móveis e também em desktops.

### Descrição do Jogo

O jogo escolhe uma palavra secreta aleatória (ex.: “banana”).

O jogador deve tentar adivinhar a palavra letra por letra.

Cada erro desenha uma parte do boneco da forca.

O jogo termina quando:

✅ A palavra for completada (vitória).

❌ As tentativas se esgotarem (derrota).

### Requisitos Mínimos

# 1. Estrutura HTML

Criar uma área para mostrar a palavra secreta (ex.: _ _ _).

Criar botões ou teclado virtual com as letras do alfabeto.

Criar área para o boneco da forca (pode ser feito com <div> representando cabeça, corpo, braços e pernas).

# 2. CSS (Mobile First)

Layout deve ser pensado primeiro para celulares.

Usar flexbox para centralizar e organizar os elementos.

Criar um design simples e claro, com destaque para:

Palavra secreta.

Letras já escolhidas.

Desenho da forca.

Adaptar para telas maiores (desktop).

# 3. Lógica em JavaScript

Criar um array de palavras (ex.: ["banana", "javascript", "html", "css"]).

Escolher uma palavra aleatória a cada partida.

Mostrar os espaços em branco (_ _ _) conforme o tamanho da palavra.

Quando o jogador clicar ou digitar uma letra:

Se a letra existir → revelar nas posições corretas.

Se não existir → adicionar erro e desenhar parte da forca.

Verificar condição de vitória (palavra completa) ou derrota (boneco completo).

### 🚀 Funcionalidades Extras (desafios para ganhar pontos bônus)

✅ Seleção de dificuldade (número de tentativas permitidas).

✅ Temas de palavras diferentes (ex.: frutas, animais, tecnologia).

✅ Ranking de vitórias e derrotas usando localStorage.

### 📚 O que você vai praticar

Manipulação de arrays e strings.

Uso de condicionais e loops.

Manipulação do DOM para atualizar a tela em tempo real.

Eventos de teclado e clique.

Estruturação de layouts responsivos com mobile first.

### 👉 Entrega:

Arquivos separados: index.html, style.css e script.js.

O jogo deve funcionar corretamente em dispositivos móveis e desktop.

Estas são as lógicas que o sistema deve seguir para funcionar corretamente.

Inicialização do Jogo:

Ao carregar a página, o jogador deve selecionar um nível de dificuldade (associado a um tema)

Uma palavra aleatória do array correspondente ao tema deve ser sorteada. A palavra deve ser armazenada em uma variável (ex: palavraSecreta) e exibida na tela como underscores (_). Também serão armazenados um vetor com as letras já jogadas e as letras que devem ser jogadas para ganhar o jogo.

O contador de erros deve ser zerado e o desenho da forca deve estar limpo.

Processamento da Jogada:

1. O jogador deve digitar uma letra no seu teclado, e ao pressionar "Enter" ou apertar no botão de enviar, o sistema deve verificar se a letra já foi jogada. Se sim, nada acontece. Se não, a letra é marcada como "usada".

2. O sistema verifica se a letra escolhida existe na palavraSecreta.

   1. Acerto: A função deve percorrer a palavraSecreta e substituir os underscores (_) pela letra correta em todas as posições onde ela aparece.

   2. Erro: O contador de erros é incrementado em 1. Uma nova parte do boneco da forca é exibida. O número máximo de erros varia com a dificuldade.

3. Repetir até que o jogador vença ou perca.
   1. Condições de Fim de Jogo:
   2. A cada jogada, o sistema deve verificar duas condições:

       - Vitória: Se não houver mais underscores (_) na palavra exibida, o jogador venceu. Uma mensagem de vitória deve ser mostrada.

       - Derrota: Se o contador de erros atingir o limite máximo permitido pela dificuldade, o jogador perdeu. O boneco estará completo e uma mensagem de derrota, revelando a palavra secreta, deve ser exibida.



Reiniciar o Jogo:
Após uma vitória ou derrota, deve haver um botão ou uma opção para "Jogar Novamente", que reinicia o processo a partir da "Inicialização do Jogo".

#### Armazenamento - LocalStorage:
Duas chaves podem ser usadas no localStorage: vitorias e derrotas.
Ao vencer, o valor de vitorias é incrementado, ao perder, o valor de derrotas é incrementado.

Esses valores devem ser recuperados e exibidos na tela ao carregar o jogo.

### Níveis de Dificuldade e Temas

Nível 1: Fácil
Tema: 🍎 Frutas
6 tentativas de erro permitidas. Palavras curtas e comuns.

Nível 2: Médio
Tema: 🦁 Animais
5 tentativas de erro permitidas. Palavras de comprimento variado.

Nível 3: Difícil
Tema: 💻 Tecnologia
4 tentativas de erro permitidas. Palavras maiores e da área de tecnologia, com letras menos comuns.
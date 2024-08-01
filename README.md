# Testando o CI (Contato Inteligente)
Para testar CI deste projeto, siga os passos abaixo:

### 1. Baixar o arquivo de fluxo

Baixe o arquivo challengeblip.json que contém o fluxo necessário para os testes.

Download do arquivo challengeblip.json

### 2. Carregar o fluxo na plataforma BLiP

Acesse a plataforma BLiP.

No painel principal, navegue até o Builder.

Importe o arquivo challengeblip.json para carregar o fluxo desejado.

### 3. Adicionar variável de configuração

No Builder da plataforma BLiP, adicione uma nova variável de configuração.

Chave: apiRepos
Valor: http://challenge-env.eba-8spm99ca.us-east-2.elasticbeanstalk.com

Essa variável será usada para direcionar as requisições durante o teste do fluxo.

### 4. Publicar fluxo e  Executar os testes

Com o fluxo carregado e a variável configurada, Aperte em publicar fluxo(foquetinho na barra lateral) execute os testes para verificar se o CI está funcionando corretamente.

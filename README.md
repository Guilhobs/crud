## Funcionalidades

- Listar tarefas
- Adicionar nova tarefa
- Editar tarefa existente
- Deletar tarefa
- Interface moderna e responsiva

## Tecnologias Utilizadas

- React Native
- React Navigation
- Axios
- JSON Server

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o JSON Server:
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. Em outro terminal, inicie o aplicativo:
   ```bash
   npx react-native run-android
   # ou
   npx react-native run-ios
   
## API Endpoints

- GET /tarefas - Lista todas as tarefas
- POST /tarefas - Cria uma nova tarefa
- PUT /tarefas/:id - Atualiza uma tarefa existente
- DELETE /tarefas/:id - Remove uma tarefa

# Desenvolvido por

- Guilhobel Freitas de Lima
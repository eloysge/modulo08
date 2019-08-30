modulo08 - bootcamp Rocketseat

/\*\*

- iniciar projeto:
- yarn create react-app [nome-dir-raiz-do-project]
-
- limpar exemplos do codigo pelo vs-code
-
- criar o .editorconfig (botao direito do mouse)
-
- configurar .editorconfig:
- end_of_line = lf (add)
- trim_trailing_whitespace = true (set true)
- insert_final_newline = true (set true)
-
- adicionar eslint como dependência de deselvolvimento (-D)
- yarn add eslint -D
-
- yarn eslint --init
- selecionar: 3 opcao (to check syntax, find problems, and enforce...)
- selecionar: JavaScript modules (import/export)
- selecionar: React
- selecionar: Browser
- selecionar: "Use a popular style guide"
- selecionar: "Airbnb"
- selecionar: "JavaScript"
- Do you want to downgrade? (Y)
- Do you like to install them now with npm? (Y)
-
- remover: "package-lock.json"
- (pois os pacotes anteriores foram instalados com 'npm' ao invés de 'yarn')
-
- para atualizar todas as dependencias, rodar o yarn:
- yarn
-
- instalando o prettier:
- yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
-
- ajustes no .eslintrc.js:
- extends: ['airbnb', 'prettier', 'prettier/react'],
-
- parser: 'babel-eslint' (antes do parseOptions)
-
- plugins: ['react', 'prettier', 'react-hooks']
-
- (verificar o package.json e verifique se "eslint-plugin-react-hooks" está instalado - - em devDependencies -D. Se não: yarn add eslint-plugin-react-hooks)
-
- rules: {
  'prettier/prettier': 'error',
  'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
  'import/prefer-default-export': 'off',
  'no-param-reassign': 'off',
  'no-console': ['error', { allow: ['tron'] }],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
- }
- \*/

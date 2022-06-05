# Node.js basics

Добрый день, проверяющий!
Для удобства проверки во все файлы добавлены вызовы функций.
В файл package.json добавлены скрипты для вызова файлов.
Для вызова используется "npm run <имя скрипта>" (без кавычек).
Т.е., к примеру, если нужно вызвать файл create.js, то вызов в терминале
должен быть таким "npm run fs:create" (без кавычек).
Сразу скажу: я это делала в первый раз, поэтому, вероятно, есть
более удобный способ, но я его не знаю))

Список скриптов и файлов, которые они вызывают:

**File system (src/fs)**

fs:create - create.js
fs:copy - copy.js  
fs:rename - rename.js  
fs:delete - delete.js
fs:list - list.js
fs:read - read.js

**Command line interface(src/cli)**

cli:env - env.js
cli:args - args.js
Для этого файла УЖЕ в команде дополнительно указан список аргументов в следующем формате: --propName 111 --prop2Name 222.
Можно запустить файл отдельно, обычным образом, через node, с любыми аргументами в аналогичном формате

**Modules(src/modules)**

mod:modules -cjsToEsm.mjs - rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)
mod:mod_index - проверочный файл index.js для cjsToEsm.mjs, позволяющий вывести полученную переменную и проверить работоспособность сервера

**Hash (src/hash)**

calc:hash - calcHash.js

**Streams (src/streams)**

st:read - read.js
st:write - write.js
st:transform - transform.js
Для прекращения работы данного файла нажмите Ctrl+C

**Zlib (src/zip)**

zip:compress - compress.js
zip:decompress - decompress.js

**Worker Threads (src/wt)**

wt:main - main.js

**Child Processes (src/cp)**

cp:cp - cp.js
После запуска необходимо ввести аргументы для передачи в child.
После можно вводить другие аргументы. Они будут переданы в child и от child будет получен ответ

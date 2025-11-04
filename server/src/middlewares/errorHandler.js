export const errorHandler = (err, req, res, next) => {
  const timestamp = new Date().toISOString();

  // Captura informações do request
  const method = req.method;
  const url = req.originalUrl;
  const body = JSON.stringify(req.body, null, 2);
  const params = JSON.stringify(req.params, null, 2);
  const query = JSON.stringify(req.query, null, 2);

  // Captura stack e função
  const stack = err.stack || '';
  const funcMatch = stack.match(/at (\S+) \(/);
  const funcName = funcMatch ? funcMatch[1] : 'anonymous';

  // Captura arquivo
  const fileMatch = stack.match(/\((.*):\d+:\d+\)/);
  const fileName = fileMatch ? fileMatch[1] : 'unknown';

  // Log estruturado
  console.error('\n===== ERRO =====');
  console.error(`[${timestamp}]`);
  console.error(`Arquivo: ${fileName}`);
  console.error(`Função: ${funcName}`);
  console.error(`Método: ${method}`);
  console.error(`URL: ${url}`);
  console.error('--- Params ---');
  console.error(params);
  console.error('--- Query ---');
  console.error(query);
  console.error('--- Body ---');
  console.error(body);
  console.error('--- Mensagem ---');
  console.error(err.message);
  console.error('--- Stack Trace ---');
  console.error(stack);
  console.error('================\n');

  // Resposta ao cliente
  res.status(500).json({
    error: 'Erro interno do servidor',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
};

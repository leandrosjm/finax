const isEmail = (email: string): boolean => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex) !== null;
};

function isCNPJ(value: string): boolean {
  // Remover caracteres não numéricos do CNPJ
  let cnpj = value.replace(/[^\d]/g, '');

  // Verificar se o CNPJ possui 14 dígitos
  if (cnpj.length !== 14) {
    return false;
  }

  // Verificar se todos os dígitos são iguais (CNPJ inválido)
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  let sum = 0;
  let factor = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }
  let remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;

  // Calcular o segundo dígito verificador
  sum = 0;
  factor = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }
  remainder = sum % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;

  // Verificar se os dígitos verificadores são válidos
  if (
    parseInt(cnpj.charAt(12)) !== firstDigit ||
    parseInt(cnpj.charAt(13)) !== secondDigit
  ) {
    return false;
  }

  return true;
}

function formatarDinheiro(valor: number): string {
  // Adicione o símbolo da moeda (R$ para Real)
  const simboloMoeda: string = 'R$ ';

  // Define o separador de milhar
  const separadorMilhar: string = '.';

  // Define o separador decimal
  const separadorDecimal: string = ',';

  // Define o número de casas decimais
  const casasDecimais: number = 2;

  // Converte o valor para número (se já não for)
  valor = parseFloat(valor.toFixed(casasDecimais));

  // Verifica se o valor é um número válido
  // if (isNaN(valor)) {
  //   return 'Valor inválido';
  // }

  // Formata o valor como dinheiro com a quantidade de casas decimais especificada
  const valorFormatado: string = valor.toFixed(casasDecimais);

  // Separa a parte inteira da parte decimal
  const partes: string[] = valorFormatado.split('.');

  // Adiciona o separador de milhar à parte inteira
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, separadorMilhar);

  // Retorna o valor formatado com o símbolo da moeda e separador decimal
  return simboloMoeda + ' ' + partes.join(separadorDecimal);
}

export  { isEmail, isCNPJ, formatarDinheiro } ;

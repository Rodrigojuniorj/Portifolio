
export function convertData(data: Date){
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();

  return `${mes} de ${ano}`;
}

function getAge() {
  const today = new Date();
  const birthDate = new Date('2003/09/04');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function formeiNaTrybe() {
  let element1 = ''
  let element2 = ''
  element1 = `Olá! Meu nome é Lucas Gomes e sou natural de Divinópolis-MG. Atualmente, tenho ${getAge()} anos e tenho me dedicado bastante ao estudo de tecnologia. Sempre fui apaixonado pela área, e essa paixão me motivou a ingressar na Trybe, uma escola de tecnologia que oferece um curso de Desenvolvimento Web Full Stack.`
  const today = new Date();
  const dataFormacao = new Date('2023/05/20');
  let age = today.getFullYear() - dataFormacao.getFullYear();
  const mes = today.getMonth() - dataFormacao.getMonth();

  if (mes < 0 || (mes === 0 && today.getDate() < dataFormacao.getDate())) {
    age--;
  }

  if (age === -1)
    element2 = `Na Trybe, estou aprendendo uma variedade de linguagens de programação, como JavaScript, HTML, CSS e outras. Além disso, estou estudando sobre bancos de dados e ferramentas essenciais para o desenvolvimento de aplicações web completas e eficientes. Confesso que o aprendizado tem sido intenso, mas muito gratificante.`;

    element2 = `Na Trybe, estudei uma variedade de linguagens de programação, como JavaScript, HTML, CSS e diversas outras. Além disso, estudei sobre bancos de dados e ferramentas importantes para o desenvolvimento de aplicações web completas e eficientes.`;
    return [element1, element2]
}

export { formeiNaTrybe }
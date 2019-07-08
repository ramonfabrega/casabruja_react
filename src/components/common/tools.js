export const formatBeers = count => {
  let result = '';

  const [cases, sixpacks] = (count / 24 + '').split('.').map(i => parseInt(i));

  if (cases > 0) {
    result += `${cases} caja`;

    if (cases > 1) result += 's';
    if (sixpacks) result += ' & ';
  }

  if (sixpacks === 25) result += '1 sixpack';
  if (sixpacks === 5) result += '2 sixpacks';
  if (sixpacks === 75) result += '3 sixpacks';

  return result;
};

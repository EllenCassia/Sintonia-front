export const validate = (title, selectedGender, artist, year) => {
  const errors = [];

  if (title === '' || selectedGender === null || artist === '' || year === '') {
    errors.push('Preencha todos os campos obrigatórios.');
  } else if (title.length < 2) {
    errors.push('O campo Título deve conter pelo menos 3 caracteres.');
  } else if (artist.length < 2) {
    errors.push('O campo Artista deve conter pelo menos 3 caracteres.');
  } else if (!/^\d+$/.test(year)) {
    errors.push('O campo Ano deve conter apenas números.');
  } else if (!/^(?:[12]\d{3}|3000)$/.test(year)) {
    errors.push('O campo Ano deve conter um ano válido.');
  }
  return errors;
};



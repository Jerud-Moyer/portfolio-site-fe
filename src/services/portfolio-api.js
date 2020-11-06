const url = process.env.API_URL;

export const getFacts = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'ERROR facts not retrieved';

  return json;
};

const url = process.env.API_URL;
const emailUrl = process.env.EMAIL_URL;

export const getFacts = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'ERROR facts not retrieved';

  return json;
};

export const getFactById = async(id) => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'ERROR fact not retrieved';

  return {
    id: json.id,
    type: json.type,
    colorCode: json.colorCode,
    text: json.text,
    imageUrl: json.imageUrl

  };
};

export const deleteFact = async(id) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const postFact = async(fact) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fact)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const updateFact = async(id, fact) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fact)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const sendMessage = async(message) => {
  const res = await fetch(emailUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

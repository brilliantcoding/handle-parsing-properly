const s = 'test';

const isJson = (item) => {
  try {
    JSON.parse(item);
  } catch {
    return false;
  }
  return true;
};

const retn = isJson(s) ? JSON.parse(s) : s;
console.log('parsed: ', retn);

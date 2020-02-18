
function validateName(name){

  if(name === undefined || name === ''){
    throw new TypeError('Name must not be blank');
  }
}

const create = (name)=>{
  const item = {
    id: cuid(),
    name: name,
    checked: false
  };
  return item;
}


export default {
  validateName,
  create
};
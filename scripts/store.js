import item from './item.js';

const items = [];
const hideCheckedItems =  false;

function findById (id) {
  return items.find(item => item.id === id);
};

function addItem (name) {
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch (error) {
    console.log(error.message);
  }
}

function findAndToggleChecked(id){
  let foundItem = findById(id);
  console.log(foundItem);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName){
  try{
    validateName(newName);
    this.findById(id).name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  const index = items.findIndex(item => item.id === id);
  items.splice(index, 1);
} 

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};


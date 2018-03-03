const actionsKeys = ['ADD_ITEM', 'UPDATE_ITEM', 'REMOVE_ITEM', 'MARK_ALL_AS_UNPACKED'];

const actionsTypes = {};

actionsKeys.forEach(key => (actionsTypes[key] = key));

export default actionsTypes;




export function createAction(type) {
  return payload => action(type, payload);
}

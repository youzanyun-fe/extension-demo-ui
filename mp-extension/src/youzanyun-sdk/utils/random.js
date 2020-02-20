let _count = 0;

export function randomStr() {
  return Date.now() + _count++ + '';
}

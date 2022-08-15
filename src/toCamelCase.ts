export function toCamelCase(snakeCase: string): string {
  return snakeCase
    .split('_')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

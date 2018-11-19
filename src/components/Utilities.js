
const splitIcon = icon => (icon ? icon.match(/^([fab|fas|far]*)-?(.+)/).splice(1, 2).filter(p => p.length > 0) : null);
const others = 'a';

export { splitIcon, others };

import bar from './bar.json';

export default class Foo {
  render(): string {
    return `${bar.bar}`;
  }
}

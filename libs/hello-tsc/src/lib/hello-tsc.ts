export function helloTsc(): string {
  return 'hello-tsc';
}

type UUID = string;

interface Box {
  name: string,
  pole: number,
}

interface Extender extends Box {
  id: UUID,
  hash: UUID,
  rate?: number,
}

const a: Extender = {
  name: 'foo',
  pole: 4,
  id: '23424242',
  hash: '203948029894'
}

console.log(a)

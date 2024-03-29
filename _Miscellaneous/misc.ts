export function swapInsideArray<τ>(a: τ[], i: number, j: number): void {
  let tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

export function isSorted<τ>(a: τ[]): boolean {
  for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i + 1]) return false;
  return true;
}

export function maxValue<τ>(a: τ[]): τ {
  let max = a[0];
  for (let i = 1; i < a.length; i++) max = a[i] > max ? a[i] : max;
  return max;
}

export function minValue<τ>(a: τ[]): τ {
  let min = a[0];
  for (let i = 1; i < a.length; i++) min = a[i] < min ? a[i] : min;
  return min;
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function randomArray(n: number, m: number): number[] {
  let res = [];
  for (let i = 0; i < n; i++) res.push(getRandomInt(m));
  return res;
}

export function randomValueInsideArray<τ>(a: τ[]): τ {
  return a[getRandomInt(a.length)];
}

export function runSort(n: number, f: (a: number[]) => void, m = n, verbose = false): number {
  let arr = randomArray(n, m);
  if (verbose) console.log(arr);
  var startDate = new Date();
  f(arr);
  var endDate = new Date();
  if (verbose) console.log(arr);
  var ms = endDate.getTime() - startDate.getTime();
  if (isSorted(arr)) {
    console.log(`Sorted ${n} elements in ~${ms}ms`);
    return ms;
  } else console.log("Sort Failed");
  return -1;
}

export function runNotInPlaceSort(n: number, f: (a: number[]) => number[], m = n, verbose = false): number {
  let arr = randomArray(n, m);
  if (verbose) console.log(arr);
  var startDate = new Date();
  arr = f(arr);
  var endDate = new Date();
  if (verbose) console.log(arr);
  var ms = endDate.getTime() - startDate.getTime();
  if (isSorted(arr)) {
    console.log(`Sorted ${n} elements in ~${ms}ms`);
    return ms;
  } else console.log("Sort Failed");
  return -1;
}

export function runSearch<τ>(a: τ[], k: τ, f: (a: τ[], k: τ) => number | null): number {
  var startDate = new Date();
  let found = f(a, k);
  var endDate = new Date();
  var ms = endDate.getTime() - startDate.getTime();
  console.log(
    `Searched for key:${k} inside ${a.length} elements in ~${ms} ms | key was ${
      found ? "found in index:" + found : "not found"
    }`
  );
  return ms;
}

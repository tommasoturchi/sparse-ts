type Index = number;

export class SparseArray<T> {
  private dflt: T;
  private store: Map<Index, T>;
  private hwm: Index | -1;

  constructor(mostFrequent: T) {
    this.dflt = mostFrequent;
    this.store = new Map<Index, T>();
    this.hwm = -1;
  }

  get length(): number {
    return this.hwm + 1;
  }

  set length(v: number) {
    if (v < 0) throw new Error("lunghezza negativa");
    if (v < this.hwm)
      this.store.forEach((e, i, m) => {
        if (i >= v) m.delete(i);
      });
    this.hwm = v - 1;
  }

  rd(i: Index): T {
    if (this.store.has(i)) return this.store.get(i)!;
    else return this.dflt;
  }

  wr(i: Index, v: T): void {
    if (v === this.dflt) this.store.delete(i);
    else this.store.set(i, v);
    if (i > this.hwm) this.hwm = i;
  }

  *[Symbol.iterator](): Generator<T> {
    for (let i = 0; i < this.length; i++) yield this.rd(i);
  }
}

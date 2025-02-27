import shuffle from "../src/shuffle";

describe("shuffle test", () => {
  it("array가 null이면 빈배열을 리턴한다.", () => {
    const array = null;

    const actual = shuffle(array as any);

    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  it("array가 빈배열이면 빈배열을 리턴한다.", () => {
    const array = [];

    const actual = shuffle(array);

    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  it("shuffle함수로 리턴되는 배열은 원본 배열과 다르다.", () => {
    const array = [];

    const actual = shuffle(array);

    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });
});

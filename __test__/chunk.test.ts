import { chunk } from "../src/chunk";

describe("chunk test", () => {
  it("size 길이만큼 그룹으로 분할된 요소 배열을 리턴한다.", () => {
    // Arrange
    const input = ["a", "b", "c", "d"];
    const size = 2;
    const ouput = [
      ["a", "b"],
      ["c", "d"],
    ];

    // Act
    const actual = chunk(input, size);
    // Assert
    expect(actual).toEqual(ouput);
    expect(actual).toHaveLength(Math.ceil(input.length / size)); // ? 이래도 되나
  });

  it("배열을 균등하게 분할할 수 없는 경우", () => {
    // Arrange
    const input = ["a", "b", "c", "d"];
    const size = 3;
    const ouput = [["a", "b", "c"], ["d"]];

    // Act
    const actual = chunk(input, size);

    // Assert
    expect(actual).toEqual(ouput);
    expect(actual).toHaveLength(Math.ceil(input.length / size)); // ? 이래도 되나
  });

  it("빈 배열을 넣으면 빈 배열을 리턴한다.", () => {
    // Arrange
    const input = [];
    const size = 1;
    const ouput = [];

    // Act
    const actual = chunk(input, size);

    // Assert
    expect(actual).toEqual(ouput);
  });

  it("사이즈가 0일 경우 빈 배열을 리턴한다.", () => {
    // Arrange
    const input = ["a", "b", "c", "d"];
    const size = 0;
    const ouput = [];

    // Act
    const actual = chunk(input, size);

    // Assert
    expect(actual).toEqual(ouput);
  });

  it("index가 뫄뫄 일 경우...", () => {
    // Arrange
    // Act
    // Assert
  });

  it("array가 null이면 빈배열을 리턴한다.", () => {
    // Arrange
    const array = null;
    const size = 1;

    // Act
    const actual = chunk(array as any, size);

    // Assert
    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  it("size가 1미만이면 빈 배열을 리턴한다.", () => {
    // Arrange
    const size = 0;
    const array = [1, 2, 3];

    // Act
    const actual = chunk(array, size);

    // Assert
    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  it("size 인자를 넣지 않으면 사이즈는 1이다.", () => {
    // Arrange
    const array = ["a", "b", "c", "d"];
    const output = [["a"], ["b"], ["c"], ["d"]];

    // Act
    const actual = chunk(array);

    // Assert
    expect(actual).toEqual(output);
    expect(actual).toHaveLength(4);
  });

  it("size가 3이면 3개씩 묶고 나머지는 마지막 배열에 넣는다.", () => {
    // Arrange
    const array = ["a", "b", "c", "d"];
    const size = 3;
    const output = [["a", "b", "c"], ["d"]];

    // Act
    const actual = chunk(array, size);

    // Assert
    expect(actual).toEqual(output);
    expect(actual).toHaveLength(2);
  });

  // 엣지 케이스
  it("size가 배열의 길이보다 크면 배열 전체를 묶어서 리턴한다.", () => {
    // Arrange
    const size = 5;
    const array = ["a", "b", "c", "d"];
    const output = [["a", "b", "c", "d"]];

    // Act
    const actual = chunk(array, size);

    // Assert
    expect(actual).toEqual(output);
    expect(actual).not.toHaveLength(0);
    expect(actual).toContainEqual(array);
  });

  it("size가 음수면 빈 배열을 리턴한다.", () => {
    // Arrange
    const array = ["a", "b", "c", "d"];
    const size = -1;

    // Act
    const actual = chunk(array, size);

    // Assert
    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  // 아하....
  it("size에 1.8을 넣으면 1로 처리한다.", () => {
    // Arrange
    const size = 1.8;
    const array = ["a", "b", "c", "d"];
    const output = [["a"], ["b"], ["c"], ["d"]];

    // Act
    const actual = chunk(array, size);

    // Assert
    expect(actual).toEqual(output);
  });
});

import { toLowerCase, toUpperCase } from "../src/util";

describe("toUpper 함수 테스트", () => {
  it("소문자를 넣으면 대문자가 리턴된다.", () => {
    // AAA
    // Arrange
    // 함수를 호출하기 위한 준비
    const input = "a";
    const expected = "A";

    // Act
    // 함수를 실제로 호출을 하고 결과를 리턴
    // actual: 함수를 호출한 결과
    const actual = toUpperCase(input);

    // Assert
    // 리턴한 결과를 검증
    // actual === expected???
    expect(expected).toBe(actual);
  });

  it("대문자를 넣으면 대문자가 그대로 리턴이 된다.", () => {
    // Arrange
    const input = "A";
    const output = "A";

    // Act
    const actual = toUpperCase(input);

    // Assert
    expect(actual).toEqual(output);
  });

  it("소문자를 넣으면 소문자가 리턴이 되면 안된다.", () => {
    // Arrange
    const input = "a";
    const output = "a";

    // Act
    const actual = toUpperCase(input);

    // Assert
    expect(actual).not.toBe(output);
  });

  it("특수문자를 넣으면 특수문자가 그대로 리턴이 되어야 한다.", () => {
    // Arrange
    const input = "!@#";
    const output = "!@#";

    // Act
    const actual = toUpperCase(input);

    // Assert
    expect(actual).toBe(output);
  });

  it("빈 문자열을 넣으면 에러가 발생한다.", () => {
    // Arrange
    const input = "";

    // Act & Assert 방법 1
    // toUpperCase 함수를 호출하면 에러를 던짐.
    expect(() => toUpperCase(input)).toThrow();

    // Act & Assert 방법 2
    try {
      toUpperCase(input);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("toLowerCase TDD (테스트 주도 개발) test", () => {
  it("대문자를 받아서 소문자로 리턴을 해준다.", () => {
    // Arrange
    const input = "A";
    const output = "a";

    // Act
    const actual = toLowerCase(input);

    // Assert
    expect(actual).toBe(output);
  });

  it("빈 문자열을 넣으면 에러가 발생한다.", () => {
    // Arrange
    const input = "";

    expect(() => toLowerCase(input)).toThrow();
  });
});

// toBe => 원시값 비교
// toEqual => 객체 비교

// expect(실제 값).toBe(예상 값);

// 테스트 코드에 작성하는 것:
// 1. 정상작동하는 케이스
// 2. 예외 케이스
// 3. 조건문

// TDD 테스트 주도 개발
// 1. 테스트코드 먼저 생성
// 2. 오버엔지니어링 방지
// 단점 -> 시간이 많이 걸림

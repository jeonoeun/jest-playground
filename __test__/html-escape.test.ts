import { escape } from "../src/html-escape";

describe("escape test", () => {
  it("string이 빈 문자열이 아니고, reHasUnescapedHtml가 true 일 경우, 변환된 string을 리턴한다.", () => {
    // Arrange
    const input = "fred, barney, & pebbles";
    const output = "fred, barney, &amp; pebbles";
    // Act
    const actual = escape(input);
    // Assert
    expect(actual).toEqual(output);
  });

  it("string이 빈 문자열일 경우 빈 문자열을 리턴한다.", () => {
    // Arrange
    const input = "";
    // Act
    const actual = escape(input);
    // Assert
    expect(actual).toEqual("");
    expect(actual).toHaveLength(0);
  });

  it("string이 빈 문자열일 경우 빈 문자열을 리턴한다.", () => {
    // Arrange
    const input = "";
    // Act
    const actual = escape(input);
    // Assert
    expect(actual).toEqual("");
    expect(actual).toHaveLength(0);
  });

  it("빈 문자열이면 빈 문자열을 반환한다.", () => {
    const input = "";

    const actual = escape(input);

    expect(actual).toEqual("");
  });

  it("특수문자가 아닌 일반 문자열이면 그대로 반환한다.", () => {
    const input = "abc";

    const actual = escape(input);

    expect(actual).toEqual(input);
  });

  it("특수문자가 포함된 문자열이면 escape 처리한다.", () => {
    const input = "fred, barney, & pebbles";
    const output = "fred, barney, &amp; pebbles";

    const actual = escape(input);

    expect(actual).toEqual(output);
  });
});

describe("unescape test", () => {
  it("", () => {
    // Arrange
    // Act
    // Assert
  });
});

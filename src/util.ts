// 소문자를 입력받아서 대문자로 리턴 함수
// aa -> AA
export const toUpperCase = (str: string) => {
  // 어떠한 로직...

  // output이 달라진다. -> 뭔가 다른 일이 일어난다.
  // 조건문은 반드시 테스트 해야 함
  if (str === "") {
    throw new Error("빈 문자열을 넣을 수 없습니다.");
  }

  return str.toUpperCase();
};

// 대문자를 받아서 소문자로 리턴해주는 함수.
// 빈 문자열이 오면 에러를 던진다.
export const toLowerCase = (str: string) => {
  if (str === "") {
    throw new Error("빈 문자열을 넣을 수 없습니다.");
  }

  return str.toLocaleLowerCase();
};

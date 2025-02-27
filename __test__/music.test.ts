import { Music, MusicPlayer } from "../src/music";

// Module Mocking
jest.mock("uuid", () => ({
  v4: () => "fake-uuid",
}));

jest.mock("../src/random", () => ({
  randomGenerator: () => 123,
}));

describe("music player test", () => {
  let musicPlayer: MusicPlayer;

  // 테스트용 fake 가짜 데이터
  const fakeMusic: Music = {
    title: "fake title",
    artist: "fake artist",
    releaseDate: "fake release date", // 2025-02-26, fake release date
    genre: "fake genre",
  };

  const getFakeMusicList = () => {
    const fakeMusic1: Music = {
      title: "fake title1",
      artist: "fake artist1",
      releaseDate: "fake release date1",
      genre: "fake genre1",
    };
    const fakeMusic2: Music = {
      title: "fake title2",
      artist: "fake artist2",
      releaseDate: "fake release date2",
      genre: "fake genre2",
    };

    const fakeMusic3: Music = {
      title: "fake title3",
      artist: "fake artist3",
      releaseDate: "fake release date3",
      genre: "fake genre3",
    };

    return [fakeMusic1, fakeMusic2, fakeMusic3];
  };

  // 테스트 시작 전에 항상 인스턴스를 새롭게 초기화
  // mocking 함수 정리
  beforeEach(() => {
    musicPlayer = new MusicPlayer([]);
  });

  it("music player 인스턴스 초기화", () => {
    // Arrange & Act
    // const musicPlayer = new MusicPlayer([]);

    // Assert
    // expect().메소드 <-- jest에서 제공하는 matcher
    // matcher: 우리가 의도하는 값과 실제 값이 같은지 확인하는 함수

    // musicPlayer가 "무언가"로 정의되어 있어야 한다.
    expect(musicPlayer).toBeDefined();
    expect(musicPlayer).not.toBeUndefined();
    expect(musicPlayer).not.toBeNull();

    // musicPlayer가 MusicPlayer객체의 인스턴스인지 테스트
    expect(musicPlayer).toBeInstanceOf(MusicPlayer);
  });

  it("playMusic에 음악을 넣으면 현재음악으로 설정하고 리턴한다.", () => {
    // Arrange
    // 인스턴스 초기화
    // const musicPlayerInstance = new MusicPlayer([]);

    // Act
    const actual = musicPlayer.playMusic(fakeMusic);

    // Assert
    // currentMusic === music. actual이 fakeMusic인지 확인
    expect(actual).toEqual(fakeMusic);
  });

  it("현재 재생중인 음악이 있으면 music을 리턴하고 없으면 null을 리턴한다.", () => {
    // Arrange
    const musicPlayerInstance = new MusicPlayer([]);

    musicPlayerInstance.playMusic(fakeMusic);

    // Act
    const actual = musicPlayerInstance.getCurrentMusic();

    // Assert
    expect(actual).toEqual(fakeMusic);

    // Arrange
    const musicPlayerInstance2 = new MusicPlayer([]);

    // Act
    const actual2 = musicPlayerInstance2.getCurrentMusic();

    // Assert
    expect(actual2).toBeNull();
  });

  it("음악 재생을 중단하면 현재 재생중인 음악을 null로 설정하고 리턴한다.", () => {
    // Arrange
    musicPlayer.playMusic(fakeMusic);
    musicPlayer.stopMusic();

    // Act
    // getCurrentMusic은 앞서 테스트를 진행 했기 때문에
    // 동작을 보장할 수 있다.
    // 그래서 테스트에 쓸 수 있다.
    // 만약, 앞서 테스트를 안했다면, 동작을 보장 할 수 없기 때문에
    // 테스트코드에 쓸 수 없다.
    const actual = musicPlayer.getCurrentMusic();

    // Assert
    expect(actual).toBeNull();

    // 같은 테스트지만 다른 표현 방식.
    // Act
    // const actual = musicPlayer.stopMusic();

    // Assert
    // expect(actual).toBeNull();
  });

  it("addMusic으로 음악을 추가하면 musicList에 추가된다.", () => {
    // Arrange
    // musicPlayer의 인스턴스 초기화
    // addMusic에 넣을 가짜 데이터 준비
    const output = [fakeMusic];

    // Act
    const actual = musicPlayer.addMusic(fakeMusic);

    // Assert
    expect(actual).not.toEqual([]);

    // musicList 배열에 fakeMusic이 있는지 확인
    expect(actual).toContain(fakeMusic);

    // musicList 배열의 길이가 1인지 확인
    expect(actual).toHaveLength(1);
    expect(actual).not.toHaveLength(0);
    expect(actual).toEqual([fakeMusic]);
    expect(actual).toEqual(output);
  });

  it("음악을 추가하지 않고 getMusicList를 호출하면 빈 배열을 리턴한다.", () => {
    // Arrange

    // Act
    const actual = musicPlayer.getMusicList();

    // Assert
    expect(actual).toHaveLength(0);
    expect(actual).toEqual([]);
  });

  it("addMusic을 호출하고 getMusicList를 호출하면 추가한 음악이 담긴 musicList를 리턴한다.", () => {
    // Arrange
    musicPlayer.addMusic(fakeMusic);
    musicPlayer.addMusic(fakeMusic);
    musicPlayer.addMusic(fakeMusic);

    // Act
    const actual = musicPlayer.getMusicList();

    // Assert
    expect(actual).toHaveLength(3);
  });

  it("music list가 비어있을 때, getMusicByArtist를 호출하면 undefined를 리턴한다.", () => {
    // Arrange
    const fakeMusic: Music = {
      artist: "codeit",
      title: "title",
      genre: "genre",
      releaseDate: "2025-02-26",
    };
    // Act
    const actual = musicPlayer.getMusicByArtist(fakeMusic.artist);

    // Assert
    expect(actual).toBeUndefined();
  });

  it("music list에 해당하는 음악객체가 있으면, 그 원소를 반환한다.", () => {
    const fakeMusic1: Music = {
      artist: "fakeArtist1",
      title: "faketitle1",
      genre: "fakegenre1",
      releaseDate: "fakeRealeasedDate1",
    };

    const fakeMusic2: Music = {
      artist: "fakeArtist2",
      title: "faketitle2",
      genre: "fakegenre2",
      releaseDate: "fakeRealeasedDate2",
    };

    const fakeMusic3: Music = {
      artist: "fakeArtist3",
      title: "faketitle3",
      genre: "fakegenre3",
      releaseDate: "fakeRealeasedDate3",
    };

    musicPlayer.addMusic(fakeMusic1);
    musicPlayer.addMusic(fakeMusic2);
    musicPlayer.addMusic(fakeMusic3);

    // Act
    const actual = musicPlayer.getMusicByArtist("fakeArtist1");

    // Assert
    expect(actual).toEqual(fakeMusic1);
  });

  it("음악을 추가했지만 없는 음악을 찾으면 undefined를 리턴한다.", () => {
    const fakeMusic1: Music = {
      artist: "fakeArtist1",
      title: "faketitle1",
      genre: "fakegenre1",
      releaseDate: "fakeRealeasedDate1",
    };

    const fakeMusic2: Music = {
      artist: "fakeArtist2",
      title: "faketitle2",
      genre: "fakegenre2",
      releaseDate: "fakeRealeasedDate2",
    };

    const fakeMusic3: Music = {
      artist: "fakeArtist3",
      title: "faketitle3",
      genre: "fakegenre3",
      releaseDate: "fakeRealeasedDate3",
    };

    musicPlayer.addMusic(fakeMusic1);
    musicPlayer.addMusic(fakeMusic2);
    musicPlayer.addMusic(fakeMusic3);

    // Act
    const actual = musicPlayer.getMusicByArtist("codeit");

    // Assert
    expect(actual).toBeUndefined();
  });

  it("currentMusic이 null이면, nextMusic을 호출하면 에러를 던진다.", () => {
    // 에러를 던지는 경우를 테스트 할 때, 콜백함수를 expect에 넣어서 테스트한다.

    // musicPlayer 인스턴스를 생성하면, currentMusic은 null이다.

    // toThrow는 에러를 던지는 검사.
    // 1. 콜백
    expect(() => musicPlayer.nextMusic()).toThrow();

    // 2. try catch
    try {
      musicPlayer.nextMusic();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("음악을 재생하고 있지 않습니다.");
      expect(error).toHaveProperty("message", "음악을 재생하고 있지 않습니다.");
    }
  });

  it("currentMusic이 마지막 음악이면, nextMusic을 호출하면 첫번째 음악을 리턴한다.", () => {
    const firstMusic: Music = {
      artist: "first",
      title: "first",
      genre: "first",
      releaseDate: "first",
    };

    const secondMusic: Music = {
      artist: "second",
      title: "second",
      genre: "second",
      releaseDate: "second",
    };

    const thridMusic: Music = {
      artist: "thrid",
      title: "thrid",
      genre: "thrid",
      releaseDate: "thrid",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thridMusic);

    musicPlayer.playMusic(thridMusic);

    const actual = musicPlayer.nextMusic();

    expect(actual).toEqual(firstMusic);
  });

  it("currentMusic이 첫번째 음악이면, nextMusic을 호출하면 두번째 음악을 리턴한다.", () => {
    const firstMusic: Music = {
      artist: "first",
      title: "first",
      genre: "first",
      releaseDate: "first",
    };

    const secondMusic: Music = {
      artist: "second",
      title: "second",
      genre: "second",
      releaseDate: "second",
    };

    const thridMusic: Music = {
      artist: "thrid",
      title: "thrid",
      genre: "thrid",
      releaseDate: "thrid",
    };

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thridMusic);

    musicPlayer.playMusic(firstMusic);

    const actual = musicPlayer.nextMusic();

    expect(actual).toEqual(secondMusic);
  });

  it("음악 리스트가 비어 있을 때, removeMusic을 호출하면 에러를 던진다.", () => {
    // 에러를 던지는 지, 테스트를 해볼 때, 둘 중 하나를 선택

    // 1. 콜백함수
    expect(() => musicPlayer.removeMusic(fakeMusic)).toThrow();

    // 2. try catch
    try {
      musicPlayer.removeMusic(fakeMusic);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("음악 리스트가 비어있습니다.");
    }
  });

  it("음악 리스트에 해당 음악이 없을 때, removeMusic을 호출하면 에러를 던진다.", () => {
    // Arrange
    const fakeMusicList = getFakeMusicList();
    for (const music of fakeMusicList) {
      musicPlayer.addMusic(music);
    }

    expect(() => musicPlayer.removeMusic(fakeMusic)).toThrow();
  });

  it("삭제할 음악이 음악 리스트에 있으면 해당 음악을 삭제하고 삭제된 음악을 리턴한다.", () => {
    const fakeMusicList = getFakeMusicList();
    for (const music of fakeMusicList) {
      musicPlayer.addMusic(music);
    }

    const actual = musicPlayer.removeMusic(fakeMusicList[0]);

    expect(actual).toEqual(fakeMusicList[0]);
  });

  it("addLengthWithCallback mocking vs fake 함수", () => {
    // Arrange
    const output = {
      title: fakeMusic.title,
      artist: fakeMusic.artist,
      length: Object.keys(fakeMusic).length,
    };

    // Callback 함수를 넣어줘서 이 함수가 제대로 실행이 되는지를 테스트

    // 1. 가짜 함수
    // const fakeCallback = (music: Music) => {
    //   console.log("가짜 함수 호출");
    // };

    // 2. mocking 함수
    // 내부적인 구현, 정해진 파라미터 수, 인터페이스 ㄴㄴ
    const callback = jest.fn();

    const actual = musicPlayer.addLengthWithCallback(fakeMusic, callback);

    expect(actual).toEqual(output);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(fakeMusic);
  });

  // spyOn을 이용한 테스트
  it("addLengthWithCallback spyon", () => {
    const output = {
      title: fakeMusic.title,
      artist: fakeMusic.artist,
      length: Object.keys(fakeMusic).length,
    };

    const callbackMock = jest.fn();
    const musicSpy = jest.spyOn(musicPlayer as any, "somethingPrivate");
    const consoleSpy = jest.spyOn(console, "log");

    const actual = musicPlayer.addLengthWithCallback(fakeMusic, callbackMock);

    expect(actual).toEqual(output);
    expect(musicSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(callbackMock).toHaveBeenCalledWith(fakeMusic);
  });

  it("give id to Music 모듈 mocking test", () => {
    const actual = musicPlayer.giveIdToMusic(fakeMusic);

    expect(actual).toEqual({
      ...fakeMusic,
      id: 123,
    });
  });

  it("비동기 함수 테스트 noSuperShy async/await resolve", async () => {
    const fakeMusic: Music = {
      title: "codeit",
      artist: "fake artist",
      genre: "fake genre",
      releaseDate: "fake release date",
    };

    const actual = await musicPlayer.noSuperShy(fakeMusic);

    expect(actual).toEqual(fakeMusic);

    await expect(musicPlayer.noSuperShy(fakeMusic)).resolves.toEqual(fakeMusic);
  });

  it("비동기 함수 테스트 noSuperShy async/await reject", async () => {
    const fakeMusic: Music = {
      title: "super shy",
      artist: "fake artist",
      genre: "fake genre",
      releaseDate: "fake release date",
    };

    await expect(musicPlayer.noSuperShy(fakeMusic)).rejects.toThrow();

    try {
      await musicPlayer.noSuperShy(fakeMusic);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("비동기 함수 테스트, promise then catch 성공", () => {
    const fakeMusic: Music = {
      title: "codeit",
      artist: "fake artist",
      releaseDate: "fake release date",
      genre: "fake genre",
    };

    musicPlayer.noSuperShy(fakeMusic).then((music) => {
      expect(music).toEqual(fakeMusic);
    });
  });

  it("비동기 함수 테스트 promise then catch 실패", () => {
    const fakeMusic: Music = {
      title: "super shy",
      artist: "fake artist",
      releaseDate: "fake release date",
      genre: "fake genre",
    };

    musicPlayer.noSuperShy(fakeMusic).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Shy Boy Not Allowed");
    });
  });

  it("비동기 함수인데  콜백함수를 받는 경우 콜백함수 테스트 성공", (done) => {
    const fakeMusic: Music = {
      title: "codeit",
      artist: "fake artist",
      releaseDate: "fake release date",
      genre: "fake genre",
    };

    const callback = (err: any, music: Music) => {
      // expect(fakeMusic)
      expect(music).toEqual(fakeMusic);
      done();
    };

    musicPlayer.noMoreAttention(fakeMusic, callback);
    // 실행
  });

  it("비동기 함수인데  콜백함수를 받는 경우 콜백함수 테스트 실패", (done) => {
    const fakeMusic: Music = {
      title: "attention",
      artist: "fake artist",
      releaseDate: "fake release date",
      genre: "fake genre",
    };

    const callback = (err: any, music: Music) => {
      // expect(fakeMusic)
      expect(err).toBeInstanceOf(Error);
      done();
    };

    musicPlayer.noMoreAttention(fakeMusic, callback);
    // 실행
  });
});

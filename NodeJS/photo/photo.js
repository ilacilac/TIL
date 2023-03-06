// video(비디오파일), captured(.png, .aaa), duplicated(중복파일 - 원본파일)
// node 실행 시, 인자를 받아오는법 (node photo test(사진이 있는 폴더))

const args = process.argv;
const fs = require("fs");
const os = require("os");
const fsPromise = require("fs/promises");
const path = require("path");

const folder = args[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);
console.log(workingDir); // /Users/ming/Pictures/test

// TODO
// 1. workingDir -> photoDir 수정
// 2.

const photoPath = `./${args[2]}`;
const videoPath = `./${photoPath}/video`;
const capturedPath = `./${photoPath}/captured`;
const duplicatedPath = `./${photoPath}/duplicated`;

const renameFileAsync = async (oldPath, newPath) => {
  try {
    await fsPromise.rename(oldPath, newPath);
  } catch (error) {
    console.error(error);
  }
};

if (!photoPath) {
  console.error("Please enter folder name in pictures");
}

fs.readdir(photoPath, "utf-8", (error, files) => {
  if (error) {
    console.error(error);
    return;
  }

  files.forEach((file) => {
    // VIDEO
    if (file.includes(".mov") || file.includes(".mp4")) {
      if (!fs.existsSync(videoPath)) {
        fs.mkdirSync(videoPath);
      }
      renameFileAsync(`${photoPath}/${file}`, `${videoPath}/${file}`);
    }
    // CAPTURED
    if (file.includes(".png") || file.includes(".aae")) {
      if (!fs.existsSync(capturedPath)) {
        fs.mkdirSync(capturedPath);
      }
      renameFileAsync(`${photoPath}/${file}`, `${capturedPath}/${file}`);
    }
    // JPG
    // E로 시작한 넘버랑 같은것이 있을경우에만 duplicated
    if (file.includes(".jpg")) {
      let jpgFile = file.split("_");
      if (jpgFile[1].search("E") === 0) {
        // E로 시작한 파일
        jpgFile[1] = jpgFile[1].slice(1);
        jpgFile = jpgFile.join("_");

        // 중복파일명 체크
        if (files.some((file) => file === jpgFile)) {
          if (!fs.existsSync(duplicatedPath)) {
            fs.mkdirSync(duplicatedPath);
          }
          renameFileAsync(`${photoPath}/${file}`, `${duplicatedPath}/${file}`);
        }
      }
    }
  });
});

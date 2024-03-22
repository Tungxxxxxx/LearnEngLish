import RNFS from 'react-native-fs';

const moneyFilePath = RNFS.DocumentDirectoryPath + '/moneyData.txt';
// const moneyFilePath = '../files/Money.txt';

export const ReadFile = async () => {
  //Kiểm tra file tồn tại
  const isExists = await RNFS.exists(moneyFilePath);
  if (isExists) {
    try {
      const res = await RNFS.readFile(moneyFilePath, 'utf8');

      return res;
    } catch (error) {
      return 'lỗi';
    }
  } else {
    return '';
  }
};
export const WriteFile = async (content: string) => {
  try {
    await RNFS.appendFile(moneyFilePath, content, 'utf8');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const CheckAndWriteFile = async (content: string) => {
  try {
    //Kiểm tra file tồn tại
    const isExists = await RNFS.exists(moneyFilePath);
    console.log(isExists);
    const res = await WriteFile(content);
    return res;
  } catch (error) {
    return false;
  }
};
export const DelFile = async () => {
  try {
    await RNFS.unlink(moneyFilePath);
    return true;
  } catch (error) {
    return false;
  }
};

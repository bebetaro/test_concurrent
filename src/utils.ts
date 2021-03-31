import { ListType, sampleList } from "./constants";

export const listFilter = (word: string) => {
  const promise: Promise<ListType> = new Promise((resolve) => {
    // setTimeoutにより即時の演算が無くなり引っかかりをなくせる
    setTimeout(() => {
      const newList = sampleList.filter((item) => item.name.includes(word));
      resolve(newList);
    }, 1000);
  });
  return wrapPromise<ListType>(promise);
};

const wrapPromise = <T>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;
  const suspender = promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export type UtilsType = ReturnType<typeof listFilter>;

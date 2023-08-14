const timeOutWrapper = async (func) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await func();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000 || 5000);
  });
};

export default timeOutWrapper;

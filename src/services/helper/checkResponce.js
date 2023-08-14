const checkResponce = async (responce) => {
  if (!responce.ok) throw new Error("Error occurred");
  const data = await responce.json();
  if (data.status === "nok") throw new Error(data.message);
  return data.res;
};
export default checkResponce;

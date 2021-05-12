export const printPassword = (service: string): void => {
  const password = service + "123";
  console.log(`Your password for ${service} is ${password}.`);
};

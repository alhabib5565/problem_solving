const domainType = (domainArr) => {
  let domains = [];
  for (let i = 0; i < domainArr.length; i++) {
    const element = domainArr[i];
    const splited = element.split(".");
    const afterDot = splited[splited.length - 1];

    switch (afterDot) {
      case "org":
        domains.push("organization");
        break;
      case "com":
        domains.push("commercial");
        break;
      case "net":
        domains.push("network");
        break;
      case "info":
        domains.push("information");
        break;
      default:
        domains.push("unknown");
        break;
    }
  }
  return domains;
};

const domains = ["en.wiki.org", "codefighters.com", "happy.net", "code.info"];
console.log(domainType(domains)); // [“organization”, “commercial”, “network”, “information”]

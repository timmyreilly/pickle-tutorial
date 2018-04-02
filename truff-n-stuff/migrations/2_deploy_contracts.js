var Referral = artifacts.require("./Referral.sol");
var ReferralFactory = artifacts.require("./ReferralFactory.sol");

var c = {
  client: "clientDizzle",
  engagement: "engagementShizzle",
  referringOffice: "referringOfficeYo",
  referringCountry: "USizzle",
  receivingOffice: "wemakedamoney",
  receivingCountry: "notUSizzle",
  estimatedValue: 100,
  serviceLine: "Accounting",
  dateCreated: 0
}

module.exports = function (deployer) {
  deployer.deploy(
    Referral,
    "clientName",
    "referringOffice",
    "referringCountry",
    "receivingOffice",
    "receivingCountry",
    "projectName",
    123,
    "serviceLine",
    0
  );
  deployer.deploy(
    Referral,
    "clientName2",
    "referringOffice2",
    "referringCountry2",
    "receivingOffice2",
    "receivingCountry2",
    "projectName2",
    12345,
    "serviceLine2",
    0
  );
  deployer.deploy(ReferralFactory).then(() => {
    return ReferralFactory.deployed();
  }).then((instance) => {
    // Seed contract state
    instance.createContract(
      c.client, 
      c.engagement, 
      c.referringOffice, 
      c.referringCountry, 
      c.receivingOffice, 
      c.receivingCountry, 
      c.estimatedValue, 
      c.serviceLine, 
      c.dateCreated);
  }); 
};

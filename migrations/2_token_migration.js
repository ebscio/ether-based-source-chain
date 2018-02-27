var EBSCToken = artifacts.require("./EBSCToken.sol");
var EBSCSale = artifacts.require("./EBSCSale.sol");

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };

module.exports = function(deployer, network, accounts) {
    //console.log("Accounts: " + accounts);
    //deployer.deploy(EBSCToken, accounts[1]);

    //const admin = accounts[1];
    //const admin = '0x9A264e803f69EfeB1539F09f2fF0391C4b57F3a4';
    
    const admin = '0x98Ed08804B51d162e96f41C186A7D78760355328';
    const fundingMin = 1; // In Ether
    const fundingCap = 120000; // In Ether
    const minContribution = 0.5 * Math.pow(10, 18);
    const rate = 6000;
    
    // Testing Dates
    //const startTime = new Date().getTime() / 1000;
    //const endTime =  startTime + (86400 * 15); // 15 days

    // Live dates
    const startTime = new Date('Tue, 27 Feb 2018 00:00:00 GMT').getUnixTime();
    const endTime = new Date('Sat, 12 May 2018 00:00:00 GMT').getUnixTime();

    //deployer.deploy(EBSCSale, admin, fundingMin, fundingCap, minContribution, startTime, endTime, rate, "0x48d106abface57926b59163341615285eda152e4");

    deployer.deploy(EBSCToken, admin).then(function() {
        return deployer.deploy(EBSCSale, admin, fundingMin, fundingCap, minContribution, startTime, endTime, rate, EBSCToken.address);
    });

};
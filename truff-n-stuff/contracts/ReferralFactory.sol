// import "./Referral.sol"; 
// pragma experimental ABIEncoderV2;

// // Trying a factory pattern https://ethereum.stackexchange.com/questions/1415/solidity-create-contract-from-contract
// // Also looking for other storage patterns: https://ethereum.stackexchange.com/questions/13167/are-there-well-solved-and-simple-storage-patterns-for-solidity 


// contract ReferralFactory {
//     address[] referralContracts;

//     struct ReferralStruct {
//         string client;
//         string engagement;
//         string referringOffice; 
//         string referringCountry; 
//         string receivingOffice; 
//         string receivingCountry; 
//         uint estimatedValue; 
//         string serviceLine;
//         uint dateCreated;
//     }

//     function createContract (ReferralStruct referral) public {
//         address newContract = new Referral(referral.client, referral.engagement, referral.referringOffice, referral.referringCountry, referral.receivingOffice, referral.receivingCountry, referral.estimatedValue, referral.serviceLine, referral.dateCreated);
//         referralContracts.push(newContract);
//     } 
// }

import "./Referral.sol"; 
pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2; // DON'T GO LIVE WITH THIS! 


// Trying a factory pattern https://ethereum.stackexchange.com/questions/1415/solidity-create-contract-from-contract
// Also looking for other storage patterns: https://ethereum.stackexchange.com/questions/13167/are-there-well-solved-and-simple-storage-patterns-for-solidity 


contract ReferralFactory {
    address[] public referralContracts;
    uint private contractCount; 

    function createContract (
        string client,
        string engagement,
        string referringOffice, 
        string referringCountry, 
        string receivingOffice, 
        string receivingCountry, 
        uint estimatedValue, 
        string serviceLine,
        uint dateCreated) {
        address newContract = new Referral(client, engagement, referringOffice, referringCountry, receivingOffice, receivingCountry, estimatedValue, serviceLine, dateCreated);
        referralContracts.push(newContract);
        contractCount++; 
    } 

    function getContract(uint index) public constant returns(address _addr) {
        return referralContracts[index]; 
    }

    function getContracts() public constant returns(address[] _addr) {
        return referralContracts; 
    }

    function getNumberOfContracts() public constant returns(uint _numberOfContract){
        return contractCount; 
    }
}

    // function getContracts() public returns(address[]) {
    //     return referralContracts; 
    // }
pragma solidity ^0.4.18;

contract AppBuilderBase {
	event AppBuilderContractCreated(string contractType, address originatingAddress);
	event AppBuilderContractUpdated(string contractType, string action, address originatingAddress);

	string internal ContractType;

	function AppBuilderBase(string contractType) internal {
		ContractType = contractType;
	}

	function ContractCreated() internal {
		AppBuilderContractCreated(ContractType, msg.sender);
	}

	function ContractUpdated(string action) internal {
		AppBuilderContractUpdated(ContractType, action, msg.sender);
	}
}

contract Referral is AppBuilderBase("Referral") {

	enum ContractStates { ReferrerCreate, WorkInProgress, ReceiverApproves, ReceiverRejects, Approved, Rejected }

	ContractStates public State;    // Contract state
	string public Client;    // The client that is being referred
	string public Engagement;    // The name of the client engagement
	string public ReferringOffice;    // The office of the referrer
	string public ReferringCountry;    // The country of the referrer
	string public ReceivingOffice;    // The office of the receiver
	string public ReceivingCountry;    // The country of the receiver
	uint public EstimatedValue;    // The estimated value as perceived by the referrer
	string public ServiceLine;    // The line of services (tax, audit, etc) the client is being referred for
	uint public ActualAmount;    // The actual amount of the fees the receiver was able to generate from the client
	string public Comment;    // Comments
	uint public DateCreated;    // The date the referral was entered
	uint public DateClosed;    // The date the referral was closed

	function Referral(string client, string engagement, string referringOffice, string referringCountry, string receivingOffice, string receivingCountry, uint estimatedValue, string serviceLine, uint dateCreated) {
		// Referrer = msg.sender;
		State = ContractStates.WorkInProgress;
		Client = client;
		Engagement = engagement;
		ReferringOffice = referringOffice;
		ReferringCountry = referringCountry;
		ReceivingOffice = receivingOffice;
		ReceivingCountry = receivingCountry;
		EstimatedValue = estimatedValue;
		ServiceLine = serviceLine;
		DateCreated = block.timestamp; 

		ContractCreated();
	}
	function ReceiverApproves(uint _actualValue) {
		// if (Receiver != msg.sender || State != ContractStates.ReceiverApproves) {
		// 	revert();
		// } ???? 
		//Please Fill in the remaining Business Logic

        // should accept actual value - 
        ActualAmount = _actualValue; 
        State = ContractStates.Approved; 

		ContractUpdated("ReceiverApproves");
	}
	function ReceiverRejects() {
		// if (Receiver != msg.sender || State != ContractStates.ReceiverRejects) {
		// 	revert();
		// }
		//Please Fill in the remaining Business Logic
        State = ContractStates.Rejected; 
        ActualAmount = 0; 
		ContractUpdated("ReceiverRejects");
	}
}


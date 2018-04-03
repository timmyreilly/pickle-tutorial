# To get this going in your REPL 
# '>>> from quickstart import * ' 

import json
import web3

from web3 import Web3, HTTPProvider, contract
from web3.contract import ConciseContract


with open('./truff-n-stuff/build/contracts/Referral.json', 'r') as JSONFile: 
    j = json.load(JSONFile) 

print(j.keys())  

w3 = Web3(HTTPProvider())

print (w3.eth.accounts[0]) 

c = w3.eth.contract(abi=j['abi'], bytecode=j['bytecode']) 

for x in c.functions: 
    print (x) 



# # compiled_sol = compile_source(contract_source_code) # Compiled source code
# # contract_interface = compiled_sol['<stdin>:Greeter']


# # Instantiate and deploy contract
# contract = w3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])

# # Get transaction hash from deployed contract
# tx_hash = contract.deploy(transaction={'from': w3.eth.accounts[0], 'gas': 410000})

# # Get tx receipt to get contract address
# tx_receipt = w3.eth.getTransactionReceipt(tx_hash)
# contract_address = tx_receipt['contractAddress']

# # Contract instance in concise mode
# contract_instance = w3.eth.contract(abi=contract_interface['abi'], address=contract_address, ContractFactoryClass=ConciseContract)

# # Getters + Setters for web3.eth.contract object
# print('Contract value: {}'.format(contract_instance.greet()))
# contract_instance.setGreeting('Nihao', transact={'from': w3.eth.accounts[0]})
# print('Setting value to: Nihao')
# print('Contract value: {}'.format(contract_instance.greet()))
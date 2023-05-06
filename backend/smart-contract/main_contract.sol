// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract main_contract 
{
    address private owner;

    constructor()
    {
        owner = msg.sender;
    }

    struct user
    {
        string id;
        uint256 balance;
        bool valid;
    }

    mapping (string => user) users;

    function registerUser(string memory id) public payable
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        users[id].valid = true;
        users[id].id = id;
        users[id].balance = msg.value;
    }

    function transact(string memory from, string memory to, uint256 amount) public 
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        // if from user doesn't exist 
        require(users[from].valid, "This is an invalid/not registered user"); 

        // if from user has low balance
        require(users[from].balance >= amount, "Low balance, can't transact");

        // if to user is invalid just register him
        if(users[to].valid == false) 
        {
            users[to].valid = true;
        }

        // do transaction
        users[from].balance -= amount;
        users[to].balance += amount;      
    }

    function getBalance(string memory id) public view returns(uint256) 
    {
        require(msg.sender == owner, "Only owner can call this");

        return users[id].balance;                
    }

    function deposit(string memory id) public payable 
    {
        require(msg.sender == owner, "Only owner can make a transaction");
        
        if(users[id].valid == false)
        {
            users[id].valid = true;
        }

        users[id].balance += msg.value;                
    }

    function withdraw(string memory id, uint256 amount) public
    {
        require(msg.sender == owner, "Only owner can make a transaction");
        
        require(users[id].valid == true, "This user cannot withdraw");
        require(users[id].balance >= amount, "Not enough balance");

        users[id].balance -= amount;    
        payable(owner).transfer(amount);   
    }

    fallback() external payable {}
    receive() external payable {}
}
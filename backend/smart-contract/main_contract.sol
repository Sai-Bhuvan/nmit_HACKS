pragma solidity ^0.8.19;

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

    function registerUser(string memory id) public 
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        users[id].valid = true;
    }

    function transact(string memory from, string memory to, uint256 amount) public 
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        user memory fromUser = users[from]; 
        user memory toUser = users[to];

        // if from user doesn't exist 
        require(fromUser.valid, "This is an invalid/not registered user"); 

        // if from user has low balance
        require(fromUser.balance >= amount, "Low balance, can't transact");

        // if to user is invalid just register him
        if(toUser.valid == false) 
        {
            registerUser(to);
        }

        // do transaction
        fromUser.balance -= amount;
        toUser.balance += amount;      
    }

    function getBalance(string memory id) public view returns(uint256) 
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        return users[id].balance;                
    }

    function deposit(string memory id) public payable 
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        user memory depoUser = users[id];
        
        if(depoUser.valid == false)
        {
            depoUser.valid = true;
        }

        depoUser.balance += msg.value;                
    }

    function withdraw(string memory id, uint256 amount) public
    {
        require(msg.sender == owner, "Only owner can make a transaction");

        user memory withdrawUser = users[id];
        
        require(withdrawUser.valid == true, "This user cannot withdraw");
        require(withdrawUser.balance >= amount, "Not enough balance");

        withdrawUser.balance -= amount;    
        payable(owner).transfer(amount);   
    }

    fallback() external payable {}
    receive() external payable {}
}
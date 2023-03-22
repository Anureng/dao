//SPDX-License-Identifier:MIT

pragma solidity 0.8.0;

contract dao {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct user {
        string name;
        address pubkey;
        bool approved;
        bool voted;
    }

    struct proposal {
        string heading;
        string description;
        uint vote;
        address whoCreate;
        bool closed;
        bool created;
    }
    mapping(address => user) public AllUser;
    mapping(address => proposal) public ALLProposal;
    proposal[] allproposal;

    function createUser(string memory _name, address _pubkey) public {
        AllUser[_pubkey].name = _name;
        AllUser[_pubkey].pubkey = _pubkey;
        AllUser[_pubkey].approved = false;
    }

    function approvedMember(address pubkey) public {
        require(msg.sender == owner, "only owner can approve the membership");
        require(
            AllUser[pubkey].approved == false,
            "You are already approved!!"
        );
        AllUser[pubkey].approved = true;
    }

    function CreateProposal(
        string memory _heading,
        string memory _description
    ) public {
        require(
            AllUser[msg.sender].approved == true,
            "You have to approved first"
        );
        ALLProposal[msg.sender].heading = _heading;
        ALLProposal[msg.sender].description = _description;
        ALLProposal[msg.sender].created = true;
        allproposal.push(
            proposal(_heading, _description, 0, msg.sender, false, true)
        );
    }

    function Vote(address _pubkey) public {
        require(
            AllUser[_pubkey].approved == true,
            "You have to approved first"
        );
        require(AllUser[msg.sender].voted == false, "You have already vote");
        require(ALLProposal[_pubkey].closed == false, "Voting has been closed");
        require(
            ALLProposal[_pubkey].created == true,
            "Proposal is not created yet"
        );
        AllUser[msg.sender].voted = true;
        ALLProposal[_pubkey].vote += 1;
    }

    function voteCount(address pubkey) public view returns (uint) {
        return ALLProposal[pubkey].vote;
    }

    function closeVoting() public {
        require(msg.sender == owner, "only owner can close the voting");
        ALLProposal[msg.sender].closed = true;
    }

    function allproposalofUser() public view returns (proposal[] memory) {
        return allproposal;
    }
}

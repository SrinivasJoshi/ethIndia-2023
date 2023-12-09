// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Nygma {
    address private organizer;
    mapping(address => uint256) public participantLevels;
    mapping(uint256 => bytes32) private levelAnswers;

    modifier onlyOrganizer() {
        require(msg.sender == organizer, "Only the organizer can call this function");
        _;
    }

    modifier canAttemptLevel(uint256 _level) {
        require(_level < 5, "Invalid level");
        require(participantLevels[msg.sender] == _level, "Complete the previous level first");
        _;
    }

    event PuzzleSolved(uint256 level, address solver);

    constructor(bytes32[5] memory _initialAnswers) {
        organizer = msg.sender;
        for (uint256 i = 0; i < 5; i++) {
            levelAnswers[i] = _initialAnswers[i];
        }
    }

    function submitSolution(uint256 _level, string memory _solution) external canAttemptLevel(_level) {
        bytes32 _solutionHash = keccak256(abi.encodePacked(_solution));
        require(participantLevels[msg.sender] == _level,"Solve previous hunts!");
        require(_solutionHash == levelAnswers[_level], "Try again!");
        participantLevels[msg.sender] = _level;

        if (_level < 4) {
            participantLevels[msg.sender]++;
        }
        emit PuzzleSolved(_level, msg.sender);
    }

    function funcCanAttemptLevel(uint256 _level,address user) external view returns (bool) {
        return participantLevels[user] == _level && _level < 4;
    }
}
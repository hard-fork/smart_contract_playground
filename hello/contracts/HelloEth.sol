pragma solidity ^0.4.4;

contract HelloEth {
  string message = "Hello Eth";

  function HelloEth() {
    // constructor
  }

  function GetMessage() returns (string){
    return message;
  }
}

var HelloEth = artifacts.require('./HelloEth.sol');

contract('HelloEth:GetMessage', function(accounts) {
  it("should return a correct string", async function () {
    var contract = await HelloEth.deployed();
    var result = await contract.GetMessage.call();
    assert.isTrue(result == 'Hello Eth');
  });
});

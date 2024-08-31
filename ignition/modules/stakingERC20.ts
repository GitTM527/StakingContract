import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xB164B0ac1b738882dE4B41d781F0A38671dE8F6b";

const stakingERC20Module = buildModule("stakingERC20Module", (m) => {

    const save = m.contract("stakingERC20", [tokenAddress]);

    return { save };
});

export default stakingERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1

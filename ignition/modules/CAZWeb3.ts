import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CAZWeb3Module = buildModule("CAZWeb3Module", (m) => {

    const erc20 = m.contract("CAZWeb3");

    return { erc20 };
});

export default CAZWeb3Module;
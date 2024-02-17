import React, { useState } from 'react';
import BlockDetails from './BlockDetails';
import { ethereumAddresses, ethereumBlocks } from './mockData';

function Blocks() {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState({});

    const handleSelection = (event) => {
        // Capture the selected address
        const addressValue = event.target.value;

        // Set the address and block details
        setSelectedAddress(addressValue);
        setSelectedBlock(ethereumBlocks.find((block) => block.address === addressValue));
        // check why this is required?? ----------
    };

    return(
        <div>
            <h1>Blocks</h1>
            <div>
                <label htmlFor='dropdown'>Select the address:</label>
                <select id='dropdown' value={selectedAddress} onChange={handleSelection}>
                <option>---Select---</option>
                {ethereumAddresses.map((address) => (
                    <option key={address}>
                        {address}
                    </option>
                ))}
                </select>

                {/* handle empty inputs */}
                {selectedAddress === '' || selectedAddress === '---Select---'? (
                    <h2>Ethereum address is required.</h2>
                ) : (
                    <BlockDetails {...selectedBlock} />
                )}
            </div>
        </div>
    );
}

export default Blocks;
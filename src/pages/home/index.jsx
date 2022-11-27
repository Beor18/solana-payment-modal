import { Box, Center, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ModalCustom } from '../../components/molecules/Modal';
import { ButtonGeneric } from '../../components/atoms/ButtonGeneric';
import { useEffect } from 'react';
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { InfoModal } from '../../components/atoms/InfoModal';

const MOCK_PAYMENT_SELECT = [
    {
        symbol: 'SOL',
        address: 'SOL',
        image: 'https://industrialengels.com/wp-content/plugins/flwr-update/assets/images/sol.png',
    },
];

const PAYMENT_INFO = {
    order: {
        id: 240,
        price: 0.03,
        currency: 'USD',
    },
    selectedCurrency: {
        symbol: 'SOL',
        address: 'SOL',
        image: 'https://industrialengels.com/wp-content/plugins/flwr-update/assets/images/sol.png',
    },
};

export const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { publicKey, wallet, disconnect, disconnecting } = useWallet();

    const trucatedAddress = (address) => {
        const truncated = address.slice(0, 4) + '...' + address.slice(-4);

        return truncated;
    };

    useEffect(() => {
        if (publicKey) {
            console.log('PublicKey: ', publicKey.toString());
            console.log('wallet: ', wallet);

            // window.addEventListener('keydown', (e) => {
            //     if (e.key === 'F5') {
            //         //disconnect.catch(() => {})
            //         console.log("Refresh F5")
            //     }
            // });
        }
    }, [publicKey]);

    return (
        <Center h="100vh">
            <ButtonGeneric
                onClick={onOpen}
                text='Connect'
                width='20%'
                wallet={true}
                address={publicKey}
            />

            {publicKey ? (
                <ModalCustom open={isOpen} close={onClose}>
                    <SimpleGrid columns={2} spacing={5}>
                        <InfoModal title="Connected wallet:" data={wallet.adapter.name} />
                        <InfoModal title="Connected account:" data={trucatedAddress(publicKey.toString())} />
                        <InfoModal title="Connected cluster:" data="Mainnet" />
                        <InfoModal title="Order price:" data="0.03 USD" />
                        <InfoModal title="Payment currency:" />
                    </SimpleGrid>
                    <br />
                    <WalletDisconnectButton onClick={onClose} />
                </ModalCustom>
            ) : (
                <div></div>
            )}
        </Center>
    );
};

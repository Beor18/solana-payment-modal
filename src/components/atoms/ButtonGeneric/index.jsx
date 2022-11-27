import react from 'react';
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import { Button } from '@chakra-ui/button';

export const ButtonGeneric = ({
    onClick,
    text,
    width,
    wallet = false,
    address = '',
}) => {
    if (address) {
        return <div></div>;
    }

    return (
        <div>
            {wallet ? (
                <div>
                    <WalletMultiButton
                        className='cta-button connect-wallet-button'
                        onClick={onClick}
                    />
                </div>
            ) : (
                <Button
                    w={width}
                    mt={0}
                    bg={
                        'linear-gradient(123.73deg, #B50B0E 22%, #EE1517 80.67%)'
                    }
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    onClick={onClick}
                >
                    {text}
                </Button>
            )}
        </div>
    );
};

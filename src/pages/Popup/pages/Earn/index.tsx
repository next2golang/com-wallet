import { BackHeader } from "../../container";
import { BottomNavbar } from "../../components";

import { EarnCoinContainer } from "./EarnCoinContainer";
import { Stake } from "./Stake";

export const Earn = () => {

    return (
        <>
            <BackHeader
                headerTitle='Earn'
            />
            <Stake />
            <EarnCoinContainer />
            <BottomNavbar
                selectedMenuItem='Earn'
            />
        </>
    )
}

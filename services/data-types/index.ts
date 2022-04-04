export interface CategoryTypes {
    _id: string;
    name: string;
    __v: string;
}
export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    noRekening: string;
    bankName: string;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    banks: BanksTypes[];
}
export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}
export interface LoginTypes {
    email: string;
    password: string;
}
export interface UserTypes {
    id: string,
    username: string,
    email: string,
    name: string,
    phoneNumber: number,
    avatar: string
}
export interface jwtPayloadTypes {
    player: UserTypes,
    iat: number
}

export interface checkoutTypes {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string,
}

export interface GetServerSideProps {
    req: {
        cookies: {
            token: string;
        }
    }
}

export interface TopupCategoriesTypes {
    _id: string;
    name: string;
    value: number;
  }
export interface historyVoucherTopupTypes {
    gameName: string;
    category: string;
    coinQuantity: number;
    coinName: string;
    thumbnail: string;
}
export interface historyTransactionTypes {
    _id: string;
    historyVoucherTopup: historyVoucherTopupTypes;
    status: string;
    value: number;
}

import React from 'react';
import {useRouter} from "netx/router";

const User = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>User : {id}</div>;
};

export default User;
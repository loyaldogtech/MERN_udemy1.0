import React from 'react'
import { useParams } from 'react-router';

const UserDetails = () => {

    const params = useParams();

    // console.log(params);

    const userId = params.userId;
    return (
        <div>
            User Details of {userId}
        </div>
    )
}

export default UserDetails

import React from 'react';
import EmploymentFormCon from '../components/EmploymentFormCon';
import HeaderNav from '../components/Header/HeaderNav';

function EmploymentForm() {
    return (
        <>
            <EmploymentFormCon />   
            <HeaderNav isLanding={false} />
        </>
    )
}

export default EmploymentForm;
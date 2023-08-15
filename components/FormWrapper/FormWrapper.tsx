import React, { useEffect } from 'react';

import s from './FormWrapper.module.scss'
import Form from '../Form/Form';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { setOpen } from '../../src/form/form';

const FormWrapper = () => {
    const open = useAppSelector(state => state.openSlice.value)
    const dispatch = useAppDispatch()
    const refForm = React.createRef()

    useEffect(() => {
        if (open === true) refForm.current.scrollTo({ top: 0, })
    }, [open])

    return (
        <div ref={refForm} className={[s.wrapper, open && s.wrapper__open].join(' ')} onClick={() => dispatch(setOpen(false))}>
            <div className={s.wrapper__info}>
                <Form />
            </div>
        </div>
    );
};

export default FormWrapper;
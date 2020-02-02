import React from 'react'
import CustomSelect from 'react-select';

import ISelect from './ISelect'

const Select = (props: ISelect): JSX.Element => <CustomSelect {...props} />

export default React.memo(Select)

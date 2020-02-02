import React from 'react'
import CustomSelect from 'react-select';

import { ISelectProps } from './Select.type'

const Select = (props: ISelectProps): JSX.Element => <CustomSelect {...props} />

export default React.memo(Select)

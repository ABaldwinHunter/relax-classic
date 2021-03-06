import React, {PropTypes} from 'react';
import {Component} from 'relax-framework';

import {Types} from '../../../data-types';

export default class Edit extends Component {
  static propTypes = {
    shadow: PropTypes.object.isRequired,
    changeShadow: PropTypes.func.isRequired
  }

  static options = [
    {
      type: 'Columns',
      options: [
        {
          label: 'Color',
          type: Types.Color,
          id: 'color'
        },
        {
          label: 'Blur',
          type: Types.Pixels,
          id: 'blur'
        }
      ]
    },
    {
      type: 'Columns',
      options: [
        {
          label: 'X',
          type: Types.Pixels,
          id: 'x'
        },
        {
          label: 'Y',
          type: Types.Pixels,
          id: 'y'
        }
      ]
    }
  ]

  render () {
    const {shadow} = this.props;

    return (
      <div className='text-shadow-edit white-options'>
        <this.props.OptionsList options={Edit.options} values={shadow} onChange={this.props.changeShadow} />
      </div>
    );
  }
}

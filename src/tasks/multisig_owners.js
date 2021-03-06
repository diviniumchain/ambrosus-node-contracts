/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import TaskBase from './base/task_base';

export default class MultisigOwnersTask extends TaskBase {
  constructor(multisigWrapper) {
    super();
    this.multisigWrapper = multisigWrapper;
  }

  async execute() {
    console.log((await this.multisigWrapper.getOwners()).join(','));
  }

  help() {
    return {
      description: 'list multisig owners'
    };
  }
}

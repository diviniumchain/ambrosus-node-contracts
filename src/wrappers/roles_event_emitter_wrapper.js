/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import ManagedContractWrapper from './managed_contract_wrapper';

export default class RolesEventEmitterWrapper extends ManagedContractWrapper {
  get getContractName() {
    return 'rolesEventEmitter';
  }

  async nodeOnboardings(fromBlock, toBlock) {
    const contract = await this.contract();
    return contract.getPastEvents('NodeOnboarded', {fromBlock, toBlock});
  }

  async nodeRetirements(fromBlock, toBlock) {
    const contract = await this.contract();
    return contract.getPastEvents('NodeRetired', {fromBlock, toBlock});
  }

  async nodeUrlChanges(fromBlock, toBlock) {
    const contract = await this.contract();
    return contract.getPastEvents('NodeUrlChanged', {fromBlock, toBlock});
  }
}
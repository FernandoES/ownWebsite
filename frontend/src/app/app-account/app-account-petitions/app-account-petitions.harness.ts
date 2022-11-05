import { BaseHarnessFilters, ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import {MatButtonHarness} from '@angular/material/button/testing';

export class AppAccountPetitionsHarness extends ComponentHarness {
    static hostSelector = 'app-account-petitions';

    static with(options: BaseHarnessFilters) {
        return new HarnessPredicate<AppAccountPetitionsHarness>(AppAccountPetitionsHarness, options);
    }

    private _getAcceptButtonHarness(index: number) {
        return this.locatorForOptional(MatButtonHarness.with({selector: `accept${index}`}));
    }

    async countButtons() {
        return (await this.locatorForAll(MatButtonHarness)).length;
    }
    async clickSendButton(index: number) {
        console.log("host", await this.host());
        const button = await this._getAcceptButtonHarness(index)();
        return button?.click();
    }
}